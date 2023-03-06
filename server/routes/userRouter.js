var express = require("express");
var router = express.Router();
var UserModel = require("../models/User.js");
var {verifyUser} = require("../middlewares/verifyToken")

// GET doctor by id
// router.get("/staff", getStaff);

// UPDATE user by id
// router.put("/:id", updateImage.single("avatar"),updateUser );

// router.delete("/staff/:id", deleteStaff);


module.exports = router;
