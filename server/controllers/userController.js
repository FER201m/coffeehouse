var UserModel = require("../models/User.js");

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
          role: { $ifNull: ['$role.title', 'N/A'] }

        }
      }
    ])
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getStaff }