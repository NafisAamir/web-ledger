const { Router } = require("express");
require("dotenv").config();
const axios = require("axios");

const findFoodRoute = Router();

findFoodRoute.post("/", async (req, res) => {
  const { query } = req.body;

  axios
    .get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API_KEY}&query=${query}`
    )
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});

module.exports = findFoodRoute;