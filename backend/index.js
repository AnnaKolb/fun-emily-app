const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, '../dist/emily-app/browser')));

// Handle all other requests by serving index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/emily-app/browser/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
