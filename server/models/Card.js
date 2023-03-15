const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    isFree: {
      type: Boolean,
      required: true,
      default: true
    },
    status: {
      type: Boolean,
      required: true,
      default: true
    },
    number: {
        type: Number,
        required:true,
    },
  },
  {
    timestamps: false,
    versionKey: false
  }
);

module.exports = mongoose.model("Card", CardSchema);
