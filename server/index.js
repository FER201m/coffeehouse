const express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 3000;

// Router import
const authRouter = require('./routes/authRouter')
const userRouter = require('./routes/userRouter')
const drinkRouter = require('./routes/drinkRouter')
const billRouter = require('./routes/billRouter')
const cardRouter = require('./routes/cardRouter')

// Middleware for parsing JSON data in requests
require("dotenv").config();
app.use(express.json());
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Connect to database
const connectToDb = require('./config/dbConnection');
connectToDb();

// Resource path
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/drinks", drinkRouter);
app.use("/api/bills", billRouter);
app.use("/api/cards", cardRouter);

const PORT = process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
