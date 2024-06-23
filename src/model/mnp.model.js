const mongoose = require('mongoose');

const mnpSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        mnp_image: {
            type: {
                public_id: String,
                url: String
            }
        },
        isActive: {
            type: Boolean,
            default: true,
            required: true
        }
    }
)
const Mnp = mongoose.model('Mnp', mnpSchema);

module.exports = Mnp;