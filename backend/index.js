// require('dotenv').config();
// const express = require('express');
// const mongoose = require('./db'); 
// const cors = require('cors');
// const nodemailer = require('nodemailer');
// const crypto = require('crypto');
// const bcrypt = require('bcryptjs');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const EmployeeModel = require('./models/employee');
// const HotelModel = require('./models/hotel');

// const app = express();


// app.use(express.json());
// app.use(cors());


// const uploadDir = './uploads';
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, uploadDir); 
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname)); 
//     },
// });

// const upload = multer({ storage });

// // Route pour l'authentification (connexion)
// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await EmployeeModel.findOne({ email });
//         if (user) {
//             const isMatch = await bcrypt.compare(password, user.password);
//             if (isMatch) {
//                 res.json("success");
//             } else {
//                 res.json("Le mot de passe est incorrect");
//             }
//         } else {
//             res.json("Aucun enregistrement trouvé");
//         }
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// });

// app.post('/register', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const employee = await EmployeeModel.create({ ...req.body, password: hashedPassword });
//         res.json(employee);
//     } catch (err) {
//         res.status(500).json({ error: "Échec de l'inscription", message: err.message });
//     }
// });


// // Route pour la réinitialisation du mot de passe
// app.post('/password', async (req, res) => {
//     const { email } = req.body;
//     try {
//         const user = await EmployeeModel.findOne({ email });
//         if (!user) return res.status(404).json({ message: 'Aucun enregistrement trouvé' });

//         const resetToken = crypto.randomBytes(32).toString('hex');
//         user.resetPasswordToken = resetToken;
//         user.resetPasswordExpires = Date.now() + 3600000; // 1 heure d'expiration
//         await user.save();

//         const resetLink = `http://localhost:3001/reset-password/${resetToken}`;
//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'Réinitialisation du mot de passe',
//             text: `Cliquez sur ce lien pour réinitialiser votre mot de passe : ${resetLink}`,
//         };

//         await transporter.sendMail(mailOptions);
//         res.json({ message: 'Un email de réinitialisation a été envoyé' });
//     } catch (error) {
//         res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
//     }
// });

// // app.post('/hotels', upload.single('image'), (req, res) => {
// //     try {
// //       const { name, description, email, tel, pricePerNight, currency } = req.body;
// //       const image = req.file;  
  
// //       if (!name || !description || !email || !tel || !pricePerNight) {
// //         return res.status(400).send({ message: 'Tous les champs sont obligatoires' });
// //       }
  
    
// //       const newHotel = {
// //         name,
// //         description,
// //         email,
// //         tel,
// //         pricePerNight,
// //         currency,
// //         imageUrl: image ? image.path : null
// //       };
  
// //       // Retourner la réponse
// //       res.status(201).json({ hotel: newHotel });
// //     } catch (error) {
// //       console.error("Erreur lors de l'ajout de l'hôtel : ", error);
// //       res.status(500).send({ message: 'Erreur serveur' });
// //     }
// //   });

// app.get('/hotels', async (req, res) => {
//     try {
//         const hotels = await HotelModel.find(); // Fetch all hotels from database
//         res.json({ hotels });
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching hotels' });
//     }
// });

// app.post('/hotels', async (req, res) => {
//     try {
//         const { name, description, email, tel, pricePerNight, currency } = req.body;

//         if (!name || !description || !email || !tel || !pricePerNight) {
//             return res.status(400).send({ message: 'Tous les champs sont obligatoires' });
//         }

//         const newHotel = new HotelModel({ name, description, email, tel, pricePerNight, currency });
//         await newHotel.save();

//         res.status(201).json({ hotel: newHotel });
//     } catch (error) {
//         console.error("Error adding hotel:", error);
//         res.status(500).send({ message: 'Erreur serveur' });
//     }
// });

// // Serveur
// app.listen(3001, () => {
//     console.log("Le serveur fonctionne sur le port 3001");
// });





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
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Dossier pour les images téléchargées
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Configuration de l'envoi d'email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Configuration de Multer pour l'upload des fichiers
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir); 
    },
    filename: (req, file, cb) => {
        const sanitizedFilename = file.originalname.replace(/[^a-zA-Z0-9._-]/g, '');
        cb(null, Date.now() + '-' + sanitizedFilename);
    },
});
const upload = multer({ storage });

// **Routes**

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

// Route pour l'enregistrement (inscription)
app.post('/register', async (req, res) => {
    const { email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
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

        const resetLink = `http://localhost:${PORT}/reset-password/${resetToken}`;
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

// Route pour ajouter un hôtel
app.post('/hotels', upload.single('image'), async (req, res) => {
    try {
        const { name, description, email, tel, pricePerNight, currency } = req.body;
        const image = req.file; // Récupération de l'image téléchargée

        if (!name || !description || !email || !tel || !pricePerNight) {
            return res.status(400).send({ message: 'Tous les champs sont obligatoires' });
        }

        const newHotel = new HotelModel({
            name,
            description,
            email,
            tel,
            pricePerNight,
            currency,
            imageUrl: image ? image.filename : null,
        });

        await newHotel.save();
        res.status(201).json({ hotel: newHotel });
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'hôtel : ", error);
        res.status(500).send({ message: 'Erreur serveur' });
    }
});

// Route pour récupérer les hôtels
app.get('/hotels', async (req, res) => {
    try {
        const hotels = await HotelModel.find();
        res.json({ hotels });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des hôtels' });
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Le serveur fonctionne sur le port ${PORT}`);
});
