const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const path = require('path');
const cookieParser = require('cookie-parser');

const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
