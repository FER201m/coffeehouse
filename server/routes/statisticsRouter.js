var express = require("express");
const { getStatistics, getTopSaleDrinks, getTakeAwayBillPercentage } = require("../controllers/statisticsController");
var router = express.Router();

// Get available drinks - cashier get
router.get("/", getStatistics);

router.get("/top-drink", getTopSaleDrinks);

router.get("/place-type", getTakeAwayBillPercentage);



module.exports = router;
