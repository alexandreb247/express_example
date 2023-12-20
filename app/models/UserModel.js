const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        name: String,
        address: {
            street: String,
            suite: String,
            city: String,
            zipcode: String,
            geo: {
                lat: String,
                lng: String,
            },
        },
        website: String,
    }
);

module.exports = mongoose.model('User', User)