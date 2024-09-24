const express = require("express");
const router = express.Router();
const userRouter = require("./user.routes");
const controller =  require('../controllers/seed.controllers');

router.use("/users", userRouter);
router.use("/dbseeds", controller.seeData);

module.exports = router;
