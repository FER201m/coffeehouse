const { default: mongoose } = require("mongoose");
const Bill = require("../models/Bill");
const BillDrink = require("../models/BillDrink");
const Card = require("../models/Card");
const Drink = require("../models/Drink");

const getSingleBill = async (req, res) => {
  try {
    const bill = await BillDrink.find({
      bill_id: new mongoose.Types.ObjectId(req.params.id),
    }).populate("drink_id", "image name");
    if (!bill.length) return res.status(404).send("Not available bill");

    // const populatedBills = await Bill.populate(bills, {
    //   path: "drink_list",
    //   populate: {
    //     path: "drink_id",
    //     model: "Drink",
    //     select: "name"
    //   },
    // });

    // console.log(populatedBills);
    return res.status(200).json(bill);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getBills = async (req, res) => {
  try {
    const bills = await Bill.find()
      .populate("cashier_id", "fullname")
      .populate("card_id", "_id number");
    if (!bills.length) return res.status(404).send("Not available bills");

    // const populatedBills = await Bill.populate(bills, {
    //   path: "drink_list",
    //   populate: {
    //     path: "drink_id",
    //     model: "Drink",
    //     select: "name"
    //   },
    // });
    // console.log(populatedBills);

    // const drink_list = await BillDrink.find({bill_id: mongoose.Types.ObjectId()})
    return res.status(200).json(bills);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const addNewBill = async (req, res) => {
  try {
    // drinks = [{drink_id, quantity, note}]
    const { isTakeAway, drink_list, cashier_id, card_id } = req.body;
    console.log(drink_list);
    if ( !drink_list.length || !cashier_id || !card_id)
      return res
        .status(400)
        .send(
          "Pass bill's isTakeAway, booked drinks, cashier_id, card_id, please"
        );

    // let isDuplicate = false;
    // for (let i = 0; i < drink_list.length - 1; i++) {
    //   const foundItem = arr.find(
    //     (compareItem, index) => drink_list[i].drink_id === compareItem.drink_id && index > i
    //   );
    //   if (foundItem) {
    //     isDuplicate = true;
    //     break;
    //   }
    // }
    // if(isDuplicate) return res
    // .status(400)
    // .send(
    //   "Drinks are duplicated!"
    // );

    const card = await Card.findOne({
      status: true,
      isFree: true,
      _id: card_id,
    });
    if (!card) return res.status(404).send("Card not free. There is a customer take it");

    const newBill = await Bill.create({
      card_id,
      isTakeAway,
      cashier_id,
      date: new Date(),
      drink_list,
    });

    let total_price = 0;
    for (const drink of drink_list) {
      const drinkDoc = await Drink.findById(drink.drink_id);
      if (drinkDoc) {
        await BillDrink.create({
          bill_id: newBill._doc._id,
          drink_id: drink.drink_id,
          quantity: drink.quantity,
          note: drink.note,
        });
        total_price += drinkDoc.price * drink.quantity;
      }
    }

    newBill.total_price = total_price;
    await newBill.save();

    // set card to hands on
    card.isFree = false;
    await card.save();
    return res.status(200).json(newBill);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const completeBill = async (req, res) => {
  // update name, image, price
  try {
    const bill = await Bill.findByIdAndUpdate(
      req.params.id,
      {
        isDone: true,
      },
      { new: true }
    );

    await Card.findByIdAndUpdate(bill.card_id, { isFree: true });
    return res.status(200).json(bill);
  } catch (err) {
    res.status(500).json(err);
  }
};

// const deleteBill = async (req, res) => {
//   try {
//     const drink = await Drink.findByIdAndUpdate(req.params.id, {
//       status: false,
//     });
//     return res.status(200).json(drink);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// };

module.exports = { getBills, addNewBill, getSingleBill, completeBill };
