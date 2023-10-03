import { NextFunction, RequestHandler, Response } from "express";

const express = require("express");
const router = express.Router();

// Create new user
router.post('/', (req: RequestHandler, res: Response, next: NextFunction)=> {
    res.json("Spawning Edufice Backend");
})

// Authenticate user
router.get('/auth', (req: RequestHandler, res: Response, next: NextFunction)=> {
    res.json("Spawning Edufice Backend");
})

module.exports = router;