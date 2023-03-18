var Card = require("../models/Card.js");

const getFreeCards = async (req, res) => {
  try {
    const cards = await Card.find({ status: true, isFree: true }).select({
      isFree: 0,
      status: 0,
    });
    if (!cards.length) return res.status(404).send("Not free cards");
    return res.status(200).json(cards);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    if (!cards.length) return res.status(404).send("Not available cards");
    return res.status(200).json(cards);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addNewCard = async (req, res) => {
  try {
    const { number } = req.body;
    if (!number) return res.status(400).send("Pass card number, please");
    const intNumber = parseInt(number, 10);
    if(isNaN(intNumber)) return res.status(400).send("Send a number!");
    if(intNumber < 0 || intNumber > 100) return res.status(400).send("Send a number in range 0 - 100");
    const existCard = await Card.findOne({number: intNumber});
    if(existCard) return res.status(400).send(`Card ${intNumber} already exists.`);
    
    const newCard = await Card.create({ number: intNumber });
    return res.status(200).json(newCard);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const enableCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, {
      status: true,
    },{new: true});
    return res.status(200).json(card);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteCard = async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndUpdate(req.params.id, {
      status: false,
    },{new:true});
    return res.status(200).json(deletedCard);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getCards,
  addNewCard,
  deleteCard,
  enableCard,
  getFreeCards,
};
