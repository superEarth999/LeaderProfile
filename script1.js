const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Here you would save the data to your database or file system
    // Example:
    // saveFormData(name, email, message);

    res.status(200).json({ message: 'Form data saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
