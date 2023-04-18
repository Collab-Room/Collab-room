import { Router } from "express";   
import userController from "../controllers/auth";

const router:Router = Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);

export default router;