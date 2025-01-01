const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const messageRoutes = require('./routes/messageRoutes');

const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(express.json());

// MongoDB setup
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Portfolio_db';

if (!mongoURI) {
    console.error("MongoDB URI is not defined. Please check your .env file.");
    process.exit(1);  // Stop the server if the URI is missing
}

mongoose.connect(mongoURI)
  .then(() => {
      console.log("Connected to MongoDB successfully");
  })
  .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
  });



const contactSchema = new mongoose.Schema({
  name: String, // Add name field
  email: String,
  message: String,
  file: String, // Store the file name or path (optional)
  timestamp: { type: Date, default: Date.now },
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname); // Save file with a unique name
  }
});

// Initialize multer
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    // Accept only specific file types (optional)
    const fileTypes = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = fileTypes.test(file.mimetype);
    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Only images and document files are allowed!'));
    }
  }
});
  
const Contact = mongoose.model('Contact', contactSchema);

const projects = [
  { id: 1, title: "Weather App", description: "Weather forecasting app using Flask", link: "https://example.com/weather" },
  { id: 2, title: "Chatbot", description: "AI chatbot built using Python and Flask", link: "https://example.com/chatbot" },
];

app.use('/api/messages', messageRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Contact API
app.post('/api/contact', upload.single('file'), async (req, res) => {
    try {
      const { name, email, message } = req.body;
      const file = req.file ? req.file.filename : null; // Handle file if provided
      const contact = new Contact({ name, email, message, file });
      await contact.save();
      res.status(201).json({ message: 'Message sent successfully!' , contact});
    } catch (error) {
      res.status(500).json({ message: 'Error saving message', error });
    }
  });

app.use('/uploads', express.static('uploads'));

  // File upload API
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    res.status(200).json({
      message: 'File uploaded successfully!',
      filePath: `/uploads/${req.file.filename}`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading file', error });
  }
});

app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);
