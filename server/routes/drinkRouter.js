var express = require("express");
const { getDrinks, addNewDrink, updateDrink, deleteDrink, getAvailableDrinks } = require("../controllers/drinkController");
var router = express.Router();

// Get available drinks - cashier get
router.get("/available", getAvailableDrinks)

// GET all drinks - admin
router.route("/").get(getDrinks).post(addNewDrink);


// DELETE a card
router.route("/:id").put(updateDrink).delete(deleteDrink);


module.exports = router;
