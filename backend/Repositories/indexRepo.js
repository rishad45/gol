// models
const banners = require('../Models/bannerModel');
module.exports = {
    createBanner: async (url) => {
        try {
            await banners.create({
                url
            })
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    },
}