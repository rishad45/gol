const repo = require('../Repositories/indexRepo');

// cloudinary
const cloudinary = require('../Config/Cloudinary');
const path = require('path');
const DataUriparser = require('datauri/parser')

const parser = new DataUriparser()
module.exports = {
    // this is the controller function to create a banner
    createBanner: async (req, res) => {
        const extName = path.extname(req.file.originalName).toString();
        const file64 = parser.format(extName, req.file.buffer)
        let url
        cloudinary(file64.content).then(async( result) => {
            console.log(result)
            url = result
        })
        await repo.createBanner(url)
            .then(result => {
                if (result) {
                    res.status(200).send({ message: 'created succesfully', url})
                } else {
                    res.status(401).send({ message: 'Cant create the banner' })
                }
            })
            .catch((err) => {
                res.status(500).send({ message: 'Some error occured' });
            })
    },

}