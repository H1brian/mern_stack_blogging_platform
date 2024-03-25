import User from '../models/user.model.js';

export const signup = async (req, res) => {
    // res.json({ message: 'Running well'})
    const { username, email, password } = req.body;

    const newUser = new User({
        username,
        email,
        password
    });

    try {
        await newUser.save();
        res.json({ message: "Signup successfully!"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};