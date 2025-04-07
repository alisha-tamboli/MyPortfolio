const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const upload = require('./multerConfig'); // Import multer config
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/uploads', express.static('uploads')); // Serve uploaded files

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Portfolio_db';
if (!mongoURI) {
    console.error("MongoDB URI is not defined. Please check your .env file.");
    process.exit(1);
}

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.error("Error connecting to MongoDB:", err));

// Contact schema and model
const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    file: String,
    timestamp: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.use('/api/messages', messageRoutes);

// Contact form endpoint
app.post('/api/contact', upload.single('file'), async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('File:', req.file);

        const { name, email, message } = req.body;
        const file = req.file ? req.file.filename : null;

        const contact = new Contact({ name, email, message, file });
        await contact.save();

        res.status(201).json({ message: 'Message sent successfully!', contact });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ message: 'Error saving message', error });
    }
});

// Optional file upload test endpoint
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

// Projects API - dummy handler (replace if needed)
app.get('/api/projects', (req, res) => {
    res.json([]); // return empty or actual projects
});

// Fallback to React frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
