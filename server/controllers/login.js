const bcrypt = require("bcrypts");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res) => {
    const { email, password } = req.body;

    try {
       
        const dbUser = await User.findOne({ email }).exec();
        if (!dbUser) {
            console.error(`User not found: ${email}`);
            return res.status(400).json({ message: "User not found" });
        }

        const match = await bcrypt.compare(password, dbUser.password);
        if (!match) {
            console.error(`Invalid password attempt for user: ${email}`);
            return res.status(400).json({ message: "Invalid password" });
        }

        
        const token = jwt.sign(
            { _id: dbUser._id, name: dbUser.name, email: dbUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

    
        res.json({
             message: "Login successful", 
             token,
             id:  dbUser._id,
             name: dbUser.name, 
             email: dbUser.email
            
         }
        );
        
    } catch (error) {
        console.error("Login error:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

