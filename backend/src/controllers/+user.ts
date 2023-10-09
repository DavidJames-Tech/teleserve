import { NextFunction, Request, Response } from "express";

import { User } from "../actions";

export const create_user = async (req: Request, res: Response, next: NextFunction)=> {

    
    try {

        const user = await User.spawn({
            email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, job_title: req.body.job_title, phone: req.body.phone
         });
    
         res.json({message: "Congratulations. You have been registered as an adventurer. Your guild card will be ready in a short while", user});

    } catch(err){
        res.json({message:"Sorry, cannot create user", error: err})
    }

}

export const read_user = async (req: Request, res: Response, next: NextFunction)=> {
    const users = await User.findAll();
    res.json(users);
}

export const update_user = async (req: Request, res: Response, next: NextFunction)=> {
    const users = await User.update({__id: ""});
    res.json(users);
}

export const delete_user = async (req: Request, res: Response, next: NextFunction)=> {
    
}