
// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/auth');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Database connection
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api/auth/register', authRoutes);

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');



const app = express();
app.use(cors());
app.use(express.json());

// Connect to MySQL database
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database');
    // Sync models
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

