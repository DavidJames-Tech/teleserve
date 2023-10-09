import express from "express";

import { create_user, read_user, update_user, delete_user } from "../controllers/+user";
import auth from "../middlewares/authenticate";

const router = express.Router();

// Global middlewares
router.use(auth);

// Basic CRUD
router.route('/')
.post(create_user)
.get(read_user)
.patch(update_user)
.delete(delete_user)

// Additional operations
router.get('/my-job', async(_, res)=> {
    res.json([1,2,3,4]);
})

export default router;