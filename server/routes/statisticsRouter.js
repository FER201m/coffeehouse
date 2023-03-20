var express = require("express");
const {  } = require("../controllers/drinkController");
var router = express.Router();

// Get available drinks - cashier get
router.get("/", getAvailableDrinks)

// DELETE a card
router.route("/:id").put(updateDrink).delete(deleteDrink);


module.exports = router;
