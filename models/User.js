const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Fill username field."],
    },
    email: {
        type: String,
        required: [true, "Fill email field."],
    },
    password: {
        type: String,
        required: [true, "Fill password field."],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema); 