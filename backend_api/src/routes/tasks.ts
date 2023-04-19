import express from 'express';
import taskController from '../controllers/tasks';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.post('/create', authenticate, taskController.createTask);

export default router