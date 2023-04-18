import { Request, Response } from "express";
import { Router } from "express";

import userRouter from "../routes/auth";
const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({message:"this one is working"})
});
router.use("/auth", userRouter);
export default router