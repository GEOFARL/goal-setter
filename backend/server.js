const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Enable CORS
console.log(process.env.ORIGIN);
app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true, // if you need to include cookies in the request
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Allow-Origin',
    ],
  })
);
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Server frontend
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(path.resolve(), 'frontend', 'dist')));
  app.get('*', (req, res) =>
    res.sendFile(path.join(path.resolve(), 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
