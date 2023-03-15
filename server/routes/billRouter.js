var express = require("express");
const { getBills, addNewBill, getSingleBill, completeBill } = require("../controllers/billController");
var router = express.Router();

// GET all and ADD new
router.route("/").get(getBills).post(addNewBill)

// GET a bill by id
router.get("/:id", getSingleBill)

// Complete a bill
router.put("/complete/:id", completeBill)

module.exports = router;
