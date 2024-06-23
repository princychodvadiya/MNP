const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: "duffqsdoj",
    api_key: "935423483952969",
    api_secret: "QOnkLjxsUfwBLcBGs3fjrap6mOM"
});

const uploadFile = async (localPath, fileName) => {
    try {
        const uploadResult = await cloudinary.uploader.upload(localPath, {
            folder: fileName
        }).catch((error) => { console.log(error) });

        return uploadResult
    } catch (error) {
        console.log(error);
    }
}

module.exports = uploadFile
