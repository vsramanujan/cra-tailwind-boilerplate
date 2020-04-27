require('dotenv').config();
const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.EXPRESS_PORT || 8000;

app.use(express.static(path.join(__dirname, '../build')));

// Dummy API endpoint
app.get("/api", (req, res) => {
  res.status(200).json({
    message: "Hello World"
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Express app is listening on port ${PORT}`);
});
