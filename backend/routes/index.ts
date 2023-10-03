import { NextFunction, RequestHandler, Response } from "express";

const express = require("express");
const router = express.Router();

router.get('/', (req: RequestHandler, res: Response, next: NextFunction)=> {
    res.json("Spawning Edufice Backend");
})

module.exports = router;