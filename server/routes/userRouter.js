var express = require("express");
var router = express.Router();
const { getStaff, updateUser, changeStatus, createUser } = require("../controllers/userController.js");

// GET doctor by id
router.get("/staff", getStaff);

// UPDATE user by id
router.post("/staff/status/:id", changeStatus);
router.put("/:id", updateUser);
router.post("/", createUser)



module.exports = router;
