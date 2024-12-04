require('dotenv').config();
const express = require('express');
const mongoose = require('./db'); 
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


app.use(express.json());
app.use(cors());


const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
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

app.post('/hotels', upload.single('image'), (req, res) => {
    try {
      const { name, description, email, tel, pricePerNight, currency } = req.body;
      const image = req.file;  // multer gestion de l'image
  
      if (!name || !description || !email || !tel || !pricePerNight) {
        return res.status(400).send({ message: 'Tous les champs sont obligatoires' });
      }
  
      // Sauvegarder l'hôtel dans la base de données ici (par exemple)
      const newHotel = {
        name,
        description,
        email,
        tel,
        pricePerNight,
        currency,
        imageUrl: image ? image.path : null
      };
  
      // Retourner la réponse
      res.status(201).json({ hotel: newHotel });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'hôtel : ", error);
      res.status(500).send({ message: 'Erreur serveur' });
    }
  });


// Serveur
app.listen(3001, () => {
    console.log("Le serveur fonctionne sur le port 3001");
});



