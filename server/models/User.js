const mongoose = require("mongoose");
const Role = require('./Role')

const UserSchema = new mongoose.Schema(
  {
    avatar: { type: String, requied: true },
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    phone: {
      type: String,
      required: false,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    address: {
      type: String,
    },
    password: {
      type: String,
      min: 6,
      required: true,
      // required: true, //login by google not need
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Role",
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
