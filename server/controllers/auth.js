const User = require('../models/user');
const bcrypt = require('bcrypts');

const auth = (req, res) => {
    


exports.signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Cet email est déjà utilisé" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ message: "Utilisateur enregistré avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur lors de l'enregistrement" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Identifiants incorrects" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Identifiants incorrects" });
        }

        req.session.userId = user._id; 

        res.status(200).json({ 
            message: "Connexion réussie",
            userId: user._id
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur de connexion" });
    }
};

exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ error: "Erreur lors de la déconnexion" });
        }
        res.clearCookie('connect.sid'); 
        res.status(200).json({ message: "Déconnexion réussie" });
    });
};

};

module.exports = auth;
