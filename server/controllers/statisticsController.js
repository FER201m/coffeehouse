const User = require("../models/User");
const Bill = require("../models/Bill");
const Card = require("../models/Card");
const Drink = require("../models/Drink");
const { startOfDay, endOfDay } = require("date-fns");

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
            $sum: "$bill_drinks.quantity", // best seller
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

const getSummaryByDate = async (req, res) => {
  const date = req.query.date;
  // const viewDate = '2023-03-20'
  // console.log(new Date('2023-03-19'));
  const viewDate = new Date(date);
  try {
    const bills = await Bill.find({
      date: {
        $gte: viewDate,
        $lte: new Date(viewDate.getTime() + 24 * 60 * 60 * 1000 - 1),
      },
    });
    const summary = {
      revenue: 0,
      bill_quantity: bills.length,
      cup_quantity: 0,
    };
    let revenue = 0;
    let bill_quantity = 0;
    let cup_quantity = 0;
    for (const bill of bills) {
      revenue += bill.total_price;
      const bill_cup_quantity = bill.drink_list.reduce(
        (quantity, bill_item) => quantity + bill_item.quantity,
        0
      );
      cup_quantity += bill_cup_quantity;
    }

    return res.status(200).json({...summary, revenue, cup_quantity});
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = {
  getStatistics,
  getTopSaleDrinks,
  getTakeAwayBillPercentage,
  getSummaryByDate,
};
