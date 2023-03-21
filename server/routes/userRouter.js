var express = require("express");
var router = express.Router();
const { getStaff } = require("../controllers/userController.js");

// GET doctor by id
router.get("/staff", getStaff);

// UPDATE user by id
// router.put("/:id", updateImage.single("avatar"),updateUser );

// router.delete("/staff/:id", deleteStaff);


module.exports = router;
