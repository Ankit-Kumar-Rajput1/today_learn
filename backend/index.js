const express = require('express');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express backend!');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some JSON data from the backend' });
});

// POST endpoint example
app.post('/api/post', (req, res) => {
  const userData = req.body;
  res.json({ message: 'Data received', data: userData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
