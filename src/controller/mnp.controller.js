const { log } = require("console");
const Mnp = require("../model/mnp.model");
const uploadFile = require("../routes/utils/cloudinary");

const addMnp = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const fileRes = await uploadFile(req.file.path, "Mnp");
    console.log(fileRes);

    try {
        const Mnpadd = await Mnp.create({
            ...req.body,
            mnp_image: {
                public_id: fileRes.public_id,
                url: fileRes.url
            }
        });
        console.log(Mnpadd);


        if (!Mnpadd) {
            res.status(400).json({
                success: false,
                message: 'Mnpadd not created.'
            })
        }

        res.status(201).json({
            success: true,
            message: 'Mnpadd created successfully.',
            data: Mnpadd
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error.' + error.message
        })
    }
}

module.exports = {
    addMnp
}
