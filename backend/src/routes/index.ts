import express from "express";

// routes
import user from "./user";
import service from "./service";


const router = express.Router();

router.use("/user", user);
router.use("/service", service);

module.exports = router;