import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';  // no 'js' added to the end of the name will result in error
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

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

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (
        !email || !password || email === '' || password === ''
    ) {
        next(errorHandler(400, 'All fields are required'))
    }
    try {
        const validUser = await User.findOne({ email });    // Maching the email

        if (!validUser) {
            return next(errorHandler(404, 'User not found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password); // Compare the hashed password
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid password'));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;  // Remove the password from the validUser data
        res.status(200).cookie('access_token', token, {  // Generate a cookie called 'access_token'
            httpOnly: true,
        })
        .json(rest);  // Return the rest of the data except of password
    } catch (error) {
        next(error);
    }
    // Matching the password
};