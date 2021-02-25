const {
  userController: { getAllUsers, addNewUser },
} = require("../controllers");

const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", addNewUser);

module.exports = router;
