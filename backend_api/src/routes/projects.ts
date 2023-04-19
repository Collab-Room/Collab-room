import express from 'express';
import projectController from '../controllers/projects';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.post('/create', authenticate, projectController.createProject);
router.get('/invite', authenticate, projectController.getProjectById);

export default router;