const User = require("../models/User");
const Bill = require("../models/Bill");
const Card = require("../models/Card");
const Drink = require("../models/Drink");

const getStatistics = async (req, res) => {
  try {
    const users = await User.find().populate({
      path: "role",
      match: { title: { $ne: "admin" } },
    });
    const staffUsers = users.filter((user) => user.role != null);

    const cards = await Card.find({ status: true });
    const drinks = await Drink.find({ status: true });
    return res.status(200).json({
      staff: staffUsers.length,
      cards: cards.length,
      drinks: drinks.length,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getTopSaleDrinks = async (req, res) => {
  try {
    const result = await Drink.aggregate([
      {
        $lookup: {
          from: "billdrinks",
          localField: "_id",
          foreignField: "drink_id",
          as: "bill_drinks",
        },
      },
      {
        $unwind: "$bill_drinks",
      },
      {
        $group: {
          _id: "$name",
          total_price: {
            $sum: '$bill_drinks.quantity' // best seller
            // {
            //   // $multiply: ["$price", "$bill_drinks.quantity"],
            // },
          },
        },
      },
      {
        $sort: {
          total_price: -1,
        },
      },
      {
        $limit: 5,
      },
    ]);
    return res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getTakeAwayBillPercentage = async (req, res) => {
  try {
    const bills = await Bill.find();
    const toGoBills = await Bill.find({ isTakeAway: true });

    return res.status(200).json({
      here: bills.length - toGoBills.length,
      togo: toGoBills.length,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { getStatistics, getTopSaleDrinks, getTakeAwayBillPercentage };
