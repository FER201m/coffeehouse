const mongoose = require("mongoose");

const BillDrinkSchema = new mongoose.Schema(
  {
    bill_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"Bill"
    },
    drink_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"Drink"
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    note: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("BillDrink", BillDrinkSchema);
