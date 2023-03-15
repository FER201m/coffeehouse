var express = require("express");
const {
  addNewCard,
  getCards,
  deleteCard,
  enableCard,
  getFreeCards,
} = require("../controllers/cardController");
var router = express.Router();

//cashier get for booking
router.get("/free", getFreeCards);

// GET all cards
router.route("/").get(getCards).post(addNewCard);

// DELETE a card - soft delete
router.delete("/:id", deleteCard);

// Enable card
router.put("/:id", enableCard);


module.exports = router;
