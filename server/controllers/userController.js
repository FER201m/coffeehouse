var UserModel = require("../models/User.js");
var bcrypt = require("bcryptjs");

const getStaff = async (req, res) => {
  try {
    const staff = await UserModel.aggregate([
      {
        $match: {}
      },
      {
        $lookup: {
          from: 'roles',
          localField: 'role',
          foreignField: '_id',
          as: 'role'
        }
      },
      {
        $unwind: { path: '$role', preserveNullAndEmptyArrays: true }
      },
      {
        $project: {
          _id: 1,
          avatar: 1,
          fullname: 1,
          email: 1,
          phone: 1,
          gender: 1,
          dob: 1,
          address: 1,
          status: 1,
          role: { $ifNull: ['$role._id', 'N/A'] },
          role_name: { $ifNull: ['$role.title', 'N/A'] },
        }
      },
      { $sort: { status: -1 } }
    ])

    
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const updateUser = async (req, res) => {
  const { fullname, email, phone, gender, dob, address, status, role } = req.body;
  let update = { fullname, email, phone, gender, dob, address, role }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const changeStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        status: status
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
}

const createUser = async (req, res) => {
  try {
    const { fullname, email, phone, gender, dob, address, status, role } = req.body;
    if (!fullname || !email || !phone || !gender || !dob || !address || !status || !role)
      return res.status(400).send("Invalid infomation");

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync("123456", salt);

    const newUser = await UserModel.create({ fullname, email, phone, gender, dob, address, status, role, password: hash });
    return res.status(200).json(newUser);

  } catch (error) {
    console.log(error.message);
    res.status(500).json(error);
  }
}

module.exports = { getStaff, updateUser, changeStatus, createUser }