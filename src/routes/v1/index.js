const express = require("express");
const UserController = require("../../controllers/user-controller");

const router = express.Router();

router.post("/users", UserController.create);
router.get("/users/:id", UserController.get);
router.get("/signin", UserController.signIn);
router.get("/signup", UserController.signUp);
router.get("/users", UserController.getAll);
router.delete("/users/:id", UserController.destroy);
router.patch("/users/:id", UserController.update);

module.exports = router;