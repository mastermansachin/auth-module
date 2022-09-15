const expressAsyncHandler = require("express-async-handler");
const { generateToken } = require("../config/generateToken");
const { User } = require("../models/userModel");

const registerUser = expressAsyncHandler(async (req, res) => {
    const { name, email, password, pic } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all the compulsory fields");
    }

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password,
        pic,
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.picture,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create new user ");
    }
});

const authUser = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if (user && (await user.matchPassword(password))) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.picture,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid login credentials.");
    }
});

module.exports = { registerUser, authUser };
