// models/user.js
const mongoose = require('mongoose');

// Définir le schéma de l'utilisateur
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Vous pouvez ajouter d'autres champs comme "role", "date de création", etc.
});

// Créer un modèle basé sur le schéma
const UserModel = mongoose.model('User', userSchema);

// Exporter le modèle pour l'utiliser dans d'autres fichiers
module.exports = UserModel;
