const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    isCurrent: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const bannerModel = mongoose.model('banners', bannerSchema);

module.exports = bannerModel