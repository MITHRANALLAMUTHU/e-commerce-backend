require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(express.json()); // Use express.json() to parse JSON bodies

// Your existing code
mongoose.connect('mongodb://127.0.0.1:27017/commerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));


// Routes
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const productRoute = require('./routes/product');
const reviewRoute = require('./routes/review');

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/product', productRoute);
app.use('/api/review', reviewRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});