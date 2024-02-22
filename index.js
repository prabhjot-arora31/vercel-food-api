const express = require("express");
const axios = require("axios");
const app = express();
const app_id = "18507763";
const app_key = "db6026d3790bc0f5e2d767b9956b94d6";
app.get("/sweet", async function (req, res) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=sweet&app_id=${app_id}&app_key=${app_key}`;
  try {
    const data = await axios.get(url);
    res.send(data.data.hits);
  } catch (error) {
    console.log(error);
  }
});
app.get("/spicy", async function (req, res) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=spicy&app_id=${app_id}&app_key=${app_key}`;
  try {
    const data = await axios.get(url);
    res.send(data.data.hits);
  } catch (error) {
    console.log(error);
  }
});
app.get("/chicken", async function (req, res) {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${app_id}&app_key=${app_key}`;
  try {
    const data = await axios.get(url);
    res.send(data.data.hits);
  } catch (error) {
    console.log(error);
  }
});
app.get("/query/:name", async (req, res) => {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.name}&app_id=${app_id}&app_key=${app_key}`;
  try {
    const data = await axios.get(url);
    res.send(data.data.hits);
  } catch (error) {
    console.log(error);
  }
});
app.listen(3001, () => {
  console.log("Listening on port 3001");
});
