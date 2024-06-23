const express = require('express');
const { controllerMnp } = require('../../../controller');
const upload = require('../../../middleware/upload');

const router = express.Router();

router.post(
    '/add-mnp',
    upload.single("mnp_image"),
    controllerMnp.addMnp
)

module.exports = router;    
