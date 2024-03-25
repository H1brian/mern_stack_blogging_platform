import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';  // no 'js' added to the end of the name will result in error
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    // res.json({ message: 'Running well'})
    const { username, email, password } = req.body;

    // Handling the error of required fields
    if (
        !username || !email || !password || 
        username === '' || email === '' || password === ''
    ) {
        // return res.status(400).json({message: 'All fields are required'});
        next(errorHandler(400, 'All fields are required'));  // Call 'next' middleware created in index.js
    }

    // Hash the password
    const hashedPassword = bcryptjs.hashSync(password, 10);   // 10 is the number of salts which will be mixed with the password

    // Create a new user using 'User' model
    const newUser = new User({
        username,
        email,
        password: hashedPassword
    });
    // Handling the response and error
    try {
        await newUser.save();
        res.json({ message: "Signup successfully!"});
    } catch (error) {
        // res.status(500).json({ message: error.message });
        next(error);
    }
};