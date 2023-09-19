const express = require('express');
const session = require('express-session');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();

// Middleware configuration
app.use(express.json());
// app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/your-database', { useNewUrlParser: true });

// Define routes
// const recipeRoutes = require('./routes/recipeRoutes');
// const userRoutes = require('./routes/userRoutes');

// app.use('/api/recipes', recipeRoutes);
// app.use('/api/users', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
