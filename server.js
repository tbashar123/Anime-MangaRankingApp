// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

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

const arcSchema = new mongoose.Schema({
  animeId: { type: String, required: true },
  arcName: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Arc = mongoose.model('Arc', arcSchema);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/arcs/naruto', async (req, res) => {
  try {
    const { rankings } = req.body;

    rankings.forEach(async (arc, index) => {
      try {
        const newArc = new Arc({ animeId: 'naruto', arcName: arc.name, rating: index + 1 });
        await newArc.save();
      } catch (error) {
        console.error(error);
      }
    });

    res.status(201).json({ message: 'Naruto arc rankings submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/arcs/bleach', async (req, res) => {
  try {
    const { rankings } = req.body;

    rankings.forEach(async (arc, index) => {
      try {
        const newArc = new Arc({ animeId: 'bleach', arcName: arc.name, rating: index + 1 });
        await newArc.save();
      } catch (error) {
        console.error(error);
      }
    });

    res.status(201).json({ message: 'Bleach arc rankings submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/arcs/dbz', async (req, res) => {
  try {
    const { rankings } = req.body;

    rankings.forEach(async (arc, index) => {
      try {
        const newArc = new Arc({ animeId: 'dbz', arcName: arc.name, rating: index + 1 });
        await newArc.save();
      } catch (error) {
        console.error(error);
      }
    });

    res.status(201).json({ message: 'DBZ arc rankings submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
