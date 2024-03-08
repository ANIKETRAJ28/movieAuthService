const express = require("express");
const apiRoutes = require("./v1/index");

const router = express.Router();

router.use("/v1", apiRoutes);

module.exports = router;