const express = require("express");
const plans = express.Router();
const plansArray = require("../models/plan.model.js");

plans.get("/", (req, res) => {
  res.send(plansArray);
});

module.exports = plans;