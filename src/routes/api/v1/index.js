const express = require('express');

const router = express.Router();

// const mnpRouter = require("./mpn.routes");
const mnpRouter = require('./mpn.routes');

router.use('/mnp', mnpRouter)

module.exports = router;
