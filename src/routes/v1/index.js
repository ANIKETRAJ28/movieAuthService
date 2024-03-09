const express = require("express");
const UserController = require("../../controllers/user-controller");
const RoleController = require("../../controllers/role-controller");
const UserRoleControllers = require("../../controllers/userrole-controller");

const router = express.Router();

router.post("/users", UserController.create);
router.get("/users/:id", UserController.get);
router.get("/signin", UserController.signIn);
router.get("/signup", UserController.signUp);
router.get("/users", UserController.getAll);
router.delete("/users/:id", UserController.destroy);
router.patch("/users/:id", UserController.update);

router.get("/roles/:id", RoleController.get);
router.post("/roles", RoleController.create);
router.get("/roles", RoleController.getAll);
router.delete("roles/:id", RoleController.destroy);
router.patch("roles/:id", RoleController.update);

router.get("/userroles/:id", UserRoleControllers.get);
router.post("/userroles", UserRoleControllers.create);
router.get("/userroles", UserRoleControllers.getAll);
router.delete("userroles/:id", UserRoleControllers.destroy);
router.patch("userroles/:id", UserRoleControllers.update);

module.exports = router;