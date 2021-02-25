const { User, Address } = require("../../database/models");
const { Op, where } = require("sequelize");

module.exports = {
  getAllUsers: async (req, res, next) => {
    try {
      const whereClause = {};
      for (const [key, value] of Object.entries(req.query)) {
        Object.assign(whereClause, {
          [key]: { [Op.like]: `%${value}%` },
        });
      }
      const response = await User.findAll({
        where: whereClause,
        attributes: ["id", "firstName", "lastName", "email"],
        include: [
          {
            model: Address,
            as: "address",
            // where: { address: "Bekasi" }
          },
        ],
      });
      return res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  },
  addNewUser: async (req, res, next) => {
    try {
      const response = await User.create(req.body);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  },
};
