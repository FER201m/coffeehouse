const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema(
  {
    card_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    cashier_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false
    },
    isTakeAway: {
      type: Boolean,
      required: true,
      default: false
    },
    total_price:{
      type: Number,
    },
    date: {
      type: Date,
      required: true,
      // default: new Date()
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Bill", BillSchema);
