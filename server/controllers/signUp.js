const bcrypt = require("bcrypt");
const { isEmail } = require("validator");
const User = require("../models/user");

const saltRounds = 10;

// Function to validate sign-up data
const validateSignUpData = async (name, email, password) => {
    if (!name || !email || !password) {
        throw new Error("All fields (name, email, password) are required");
    }
    if (name.trim().length === 0) {
        throw new Error("Please enter a name");
    }
    if (!isEmail(email)) {
        throw new Error("Please enter a valid email");
    }
    if (password.trim().length < 6) {
        throw new Error("Minimum password length is 6 characters");
    }

    const existingUser = await User.findOne({ email }).exec();
    if (existingUser) {
        throw new Error("Email already registered");
    }
};

// Main function to handle sign-up
module.exports = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        await validateSignUpData(name, email, password);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({ name, email, password: hashedPassword });

        res.status(201).json({
            message: "Account created successfully",
            user: { _id: user._id, name: user.name, email: user.email },
        });
    } catch (error) {
        console.error("Signup error:", error.message);
        res.status(400).json({ message: error.message });
    }
};  