const router = require("express").Router();
const {
  addressController: { createNewAddress },
} = require("../controllers/index");

router.post("/", createNewAddress);

module.exports = router;
