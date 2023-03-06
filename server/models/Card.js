const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema(
  {
    isFree: {
      type: Boolean,
      required: true,
      default: true
    },
    number: {
        type: Number,
        required:true,
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = mongoose.model("Card", CardSchema);
