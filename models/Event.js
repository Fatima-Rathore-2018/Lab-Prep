const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "Fill user field."],
    },
    name: {
        type: String,
        required: [true, "Fill name field."],
    },
    description: {
        type: String,
        required: [true, "Fill description field."],
    },
    date: {
        type: String,
        required: [true, "Fill date field."],
    },
    eventCategory: {
        type: String,
        enum: ['Meeting', 'Birthday', 'Appointment', 'Other'],
        default: 'new'
    },
    reminder: {
        type: Boolean,
        required: [true, "Fill reminder."],
    },
    startingTime: {
        type: String,
        required: [true, "Fill Starting Time field."],
    },
    endingTime: {
        type: String,
        required: [true, "Fill Ending Time field."],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', eventSchema); 