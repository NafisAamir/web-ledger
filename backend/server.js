const express = require('express');
// const session = require('express-session');
// const passport = require('passport');
const mongoose = require('mongoose');
const {recipeController}=require("./routes/recipe.routes")
const {userController}=require("./routes/user.routes")
const {connection}=require("./config/db.js")
const {authentication}=require("./middlewares/authentication")
const app = express();
require("dotenv").config();

// Middleware configuration
app.use(express.json());
app.use(cors());

app.use("/user", userController);
app.use("/search", recipeController);

app.use(authentication);
app.use("/favourite", favouriteController);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
