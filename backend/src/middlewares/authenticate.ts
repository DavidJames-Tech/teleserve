import { Request, Response, Errback, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction)=> {
    console.log("You are authenticated");
    next();
}