const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema(
  {
    title:{
        type: String,
        required: true,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", RoleSchema);
