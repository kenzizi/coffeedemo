const express = require("express");
const router = express.Router();
const Menu = require("../models/menuSchema");

router.post("/add-menu", (req, res) => {
  Menu.create(req.body);
  console.log("added menu successfully");
  res.json({ Message: "created" });
});

router.get("/menu-list", async (req, res) => {
  try {
    const list = await Menu.find({}, (err, data) => {
      if (err) console.log("problem found");
      res.json(data);
    });
  } catch (err) {
    console.error(err.message);
    console.log("server erreur");
  }
});

module.exports = router;
