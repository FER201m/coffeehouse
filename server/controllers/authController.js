var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var UserModel = require("../models/User.js");

// POST /api/resgiter
// Với role là R2 (doctor) thì gửi thêm 3 fields là degree, specialist_id, profile
// REGISTERserver/controllers/authController.js
const register = async (req, res, next) => {
  try {
    const user = await UserModel.findOne({ phone: req.body.phone });
    if (user) {
      return res.status(409).send("Số điện thoại đã tồn tại.");
    } else {
      // Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      console.log("resgiter");
      const hash = bcrypt.hashSync(req.body.password, salt);

      // default: role_code = "R3"

      let {
        avatar,
        fullname,
        email,
        phone,
        gender,
        dob,
        address,
        role,
      } = req.body;

      let document = {
        avatar,
        fullname,
        email,
        phone,
        gender,
        dob,
        address,
        password: hash,
        role,
      };

      const newUser = new UserModel(
        document
      );

      let user = await newUser.save();

      res.status(200).json(user);
    }
  } catch (err) {
    // console.log(err);
    // await deleteImageById(avatar.id);
    res.status(500).json(err);
  }
};

// POST /api/login
// LOGIN
const login = async (req, res, next) => {
  console.log("login");
  try {
    // profile của doctor chỉ được admin thay đổi
    const user = await UserModel.findOne({ email: req.body.email, status: true }).populate("role");

    if (!user) return res.status(404).send("User not exist!");

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) return res.status(401).send("Wrong passwod!");

    const token = jwt.sign(
      { id: user._id, role: user.role.title },
      "coffeehouse_key"
    );
    // console.log(token);

    const { password, ...filteredUser } = user._doc;
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(filteredUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// POST /api/logout
// LOGOUT
const logout = (req, res) => {
  console.log("logout controller", req.user);
  // req.cookie.destroy()
  // req.logout();
  // res.redirect(CLIENT_URL)
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", true);
  delete req.user;
  // req.logout();
  req.session = null;
  res.clearCookie("session");
  res.clearCookie("session.sig");
  console.log("asdasd");
  // res.redirect(CLIENT_URL);
  res.status(200).json("logged out");
  // res
  //   // .clearCookie("access_token", {
  //   //   sameSite: "none",
  //   //   secure: true,
  //   // })
  //   .status(200)
  //   .json("User has been logged out.");
};

module.exports = {
  register,
  login,
  logout,
};
