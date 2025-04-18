const User = require('../models/Event');

const createEvent = (async (req, res) => {
    const { userId, name, description, eventCategory, reminder, startingTime, endingTime } = req.body;

    // Check if user exists.
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    // Create the event.
    const event = new Event({
        userId,
        name,
        description,
        eventCategory,
        reminder,
        startingTime,
        endingTime,
    });

    await review.save();
    res.status(201).json({ message: 'Event created successfully.', review });
});

const getEventSortDate = (async (req, res) => {
    userId = req.params.id;
    try {
        // Check if user exists.
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });

        }

        const event = await Event.find({ user: req.user.id }).sort({ date: 1 })
        if (!event) {
            res.status(404);
            throw new Error('Event not found.');
        }
        res.status(200).json(event);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to retrieve event.' });
    }
});

module.exports = {
    createEvent,
    getEventSortDate
}; 