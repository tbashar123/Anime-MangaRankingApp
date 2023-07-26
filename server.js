const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the MONGODB_URI from .env
const connectToMongoDB = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    createIndex: true,
    maxPoolSize: 10,
  });
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => {
  console.log('MongoDB connection lost. Trying to reconnect...');
  connectToMongoDB();
});

// Create the Arc schema and model
const arcSchema = new mongoose.Schema({
  animeId: { type: String, required: true },
  arcName: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Arc = mongoose.model('Arc', arcSchema);

// Define secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Endpoint for submitting new arc rankings
app.post('/api/arcs/naruto', async (req, res) => {
  try {
    const { rankings } = req.body;

    // Process the rankings and save them to the database
    rankings.forEach(async (arcName, index) => {
      try {
        const newArc = new Arc({ animeId: 'naruto', arcName, rating: index + 1 });
        await newArc.save();
      } catch (error) {
        console.error(error);
      }
    });

    res.status(201).json({ message: 'Arc rankings submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});
