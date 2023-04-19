import { Request, Response } from "express";
import { Router } from "express";

import userRouter from "../routes/auth";
import groupRouter from "../routes/groups";
import projectRouter from "../routes/projects";
import taskRouter from "../routes/tasks";

const router: Router = Router();

router.use("/auth", userRouter);
router.use("/group", groupRouter);
router.use("/project", projectRouter);
router.use("/task", taskRouter);

export default router