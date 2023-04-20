import { Router } from "express";   
import userController from "../controllers/auth";
// import { authenticate } from "../middlewares/auth";

const router:Router = Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/getusers", userController.getUsers);

export default router;