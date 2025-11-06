require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3010;
app.use(express.json());

app.use(express.static('static'));
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/inventoryDB';

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Connect to MongoDB, then start the server only after a successful connection.
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})
.catch((err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
  // Exit the process if the database connection fails so the issue can be addressed.
  process.exit(1);
});
