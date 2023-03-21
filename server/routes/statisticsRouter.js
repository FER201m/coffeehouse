var express = require("express");
const { getStatistics, getTopSaleDrinks, getTakeAwayBillPercentage, getSummaryByDate } = require("../controllers/statisticsController");
var router = express.Router();

// Get available drinks - cashier get
router.get("/", getStatistics);

router.get("/top-drink", getTopSaleDrinks);

router.get("/place-type", getTakeAwayBillPercentage);

router.get("/summary", getSummaryByDate);



module.exports = router;
