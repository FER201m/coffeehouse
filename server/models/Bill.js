const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    card_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Card",
      required: true,
    },
    cashier_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
    isTakeAway: {
      type: Boolean,
      required: true,
      default: false,
    },
    total_price: {
      type: Number,
    },
    date: {
      type: Date,
      required: true,
      // default: new Date()
    },
    drink_list: [
      {
        drink_id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Drink",
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        note: String,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Bill", BillSchema);
