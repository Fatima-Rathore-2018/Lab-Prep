const User = require('../models/User');

const registerUser = (async (req, res) => {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).send({ message: 'User already exists.' });
    }

    const user = await User.create({
        username,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt
        });
    } else {
        res.status(400).send({ message: 'Invalid data provided.' });
    }
});

const loginUser = (async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    console.log(email);
    console.log(password);

    if (user && (await user.matchPassword(password))) {
        user.lastLoginAt = Date.now();
        await user.save();

        res.json({
            _id: user.id,
            username: user.name,
            email: user.email
        });
    }
    else {
        res.status(401).send({ message: 'Invalid email or password.' });
    }
});

module.exports = {
    registerUser,
    loginUser
}