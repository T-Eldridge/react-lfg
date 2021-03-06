const express = require("express");
const usersController = require("../controllers/users");
const { authenticate } = require("../middleware");
const router = express.Router();

router.get("/", authenticate, usersController.getAllUsers);

router.get("/:id", authenticate, usersController.getUserById);

router.get('/logout', function (req, res) {
  res.clearCookie('connect.sid');
  res.redirect('/')
})

router.post("/", authenticate, usersController.createUser);

router.put("/:id", authenticate, usersController.updateUserById);

router.delete(
  "/:username",
  authenticate,
  usersController.deleteUser
);

module.exports = router;
