const { Address } = require("../../database/models");

module.exports = {
  createNewAddress: async (req, res, next) => {
    try {
      const response = await Address.create(req.body);
      return res.status(200).send(response);
    } catch (err) {
      next(err);
    }
  },
  findAddressByID: async (req, res, next) => {
    try {
    } catch (err) {
      const response = await Address.findOne({
        where: {
          id: req.params.id,
        },
      });
    }
  },
};
