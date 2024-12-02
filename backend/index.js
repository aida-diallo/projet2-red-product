require('dotenv').config();
const express = require('express');
const mongoose = require('./db'); // Connexion à MongoDB
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const EmployeeModel = require('./models/employee');
const HotelModel = require('./models/hotel');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Vérifier et créer le dossier des images s'il n'existe pas
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuration de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Configuration de Multer pour l'upload des images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); // Dossier où les images seront stockées
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Nommez l'image avec un timestamp
    },
});

const upload = multer({ storage });

// Route pour l'authentification (connexion)
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await EmployeeModel.findOne({ email });
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if (isMatch) {
                res.json("success");
            } else {
                res.json("Le mot de passe est incorrect");
            }
        } else {
            res.json("Aucun enregistrement trouvé");
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Route pour l'inscription
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe
        const employee = await EmployeeModel.create({ ...req.body, password: hashedPassword });
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: "Échec de l'inscription", message: err.message });
    }
});

// Route pour la réinitialisation du mot de passe
app.post('/password', async (req, res) => {
    const { email } = req.body;
    try {
        const user = await EmployeeModel.findOne({ email });
        if (!user) return res.status(404).json({ message: 'Aucun enregistrement trouvé' });

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 heure d'expiration
        await user.save();

        const resetLink = `http://localhost:3001/reset-password/${resetToken}`;
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Réinitialisation du mot de passe',
            text: `Cliquez sur ce lien pour réinitialiser votre mot de passe : ${resetLink}`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: 'Un email de réinitialisation a été envoyé' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
    }
});

// Route pour récupérer tous les hôtels
app.get('/hotels', async (req, res) => {
    try {
        const hotels = await HotelModel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des hôtels', error: error.message });
    }
});

// Route pour l'ajout d'un hôtel
app.post('/hotel', upload.single('image'), async (req, res) => {
    const { name, description, email, tel, pricePerNight, currency } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null; // L'URL de l'image téléchargée

    try {
        // Création d'un nouvel hôtel
        const newHotel = new HotelModel({
            name,
            description,
            email,
            tel,
            pricePerNight,
            currency,
            imageUrl,
        });

        // Sauvegarde dans la base de données
        await newHotel.save();
        
        res.status(201).json({
            message: 'Hôtel créé avec succès',
            hotel: newHotel,
        });
    } catch (error) {
        console.error("Erreur lors de la sauvegarde de l'hôtel:", error.message);
        res.status(500).json({ message: 'Erreur lors de la création de l\'hôtel', error: error.message });
    }
});

// Serveur
app.listen(3001, () => {
    console.log("Le serveur fonctionne sur le port 3001");
});