// const authenticateUser = (req, res, next) => {
//     if (req.session.userId) {
//         req.user = { _id: req.session.userId }; 
//         return next();
//     }
//     return res.status(401).json({ message: 'Utilisateur non authentifié' });
// };

// module.exports = authenticateUser;



// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authMiddleware = async (req, res, next) => {
    try {
        // Récupérer le token depuis l'en-tête Authorization
        const token = req.header('Authorization').replace('Bearer ', '');
        
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Trouver l'utilisateur
        const user = await User.findOne({ _id: decoded.userId });
        
        if (!user) {
            throw new Error('Utilisateur non trouvé');
        }
        
        // Ajouter l'utilisateur à l'objet de requête
        req.user = user;
        req.token = token;
        
        next();
    } catch (error) {
        res.status(401).json({ message: 'Veuillez vous authentifier' });
    }
};

module.exports = authMiddleware;