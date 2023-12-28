// Importation des modules nécessaires
const express = require('express');
const mongoose = require('mongoose');

// Création de l'application Express
const app = express();
const port = 3001;

// Connexion à la base de données MongoDB (remplacez 'coursDB' par le nom de votre base de données)
mongoose.connect('mongodb://localhost:27017/coursDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Création du schéma MongoDB (remplacez ceci par le modèle de données de votre application)
const courseSchema = new mongoose.Schema({
  title: String,
  price: String,
  category: String,
  image: String
});

// Création du modèle MongoDB
const Course = mongoose.model('Course', courseSchema);

// Middleware pour permettre l'analyse des données JSON dans les requêtes
app.use(express.json());

// Route pour la racine de l'application
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil !');
});

// Exemple de route pour récupérer tous les cours depuis la base de données
app.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Exemple de route pour ajouter un nouveau cours à la base de données
app.post('/courses', async (req, res) => {
  const course = new Course(req.body);
  try {
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});
