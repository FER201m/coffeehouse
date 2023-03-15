var Drink = require("../models/Drink.js");

const getAvailableDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find(
      { status: true },
      { status: 0, updatedAt: 0, createdAt: 0 }
    );
    if (!drinks.length) return res.status(404).send("Not available drinks");
    return res.status(200).json(drinks);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getDrinks = async (req, res) => {
  try {
    const drinks = await Drink.find();
    if (!drinks.length) return res.status(404).send("No drinks");
    return res.status(200).json(drinks);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addNewDrink = async (req, res) => {
  try {
    const { name, price, image } = req.body;

    if (!name || !price || !image)
      return res.status(400).send("Pass drink's name, price, image, please");

    const newDrink = await Drink.create({ name, price, image });
    return res.status(200).json(newDrink);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateDrink = async (req, res) => {
  // update name, image, price
  const { name, image, price, status } = req.body;
  // console.log({name, image, price});
  try {
    const updatedDrink = await Drink.findByIdAndUpdate(
      req.params.id,
      {
        name,
        image,
        price,
        status,
      },
      { new: true }
    );
    return res.status(200).json(updatedDrink);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const deleteDrink = async (req, res) => {
  try {
    const drink = await Drink.findByIdAndUpdate(
      req.params.id,
      {
        status: false,
      },
      { new: true }
    );
    return res.status(200).json(drink);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getDrinks,
  getAvailableDrinks,
  addNewDrink,
  updateDrink,
  deleteDrink,
};
