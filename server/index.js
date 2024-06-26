// server/index.js
const path = require('path');
const express = require('express');

const app = express();

// ----------------
// Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// ----------------
// Routes
app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// ----------------
// Port
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
});
