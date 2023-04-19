import express from 'express';
import groupController from '../controllers/groups';
import { authenticate } from '../middlewares/auth';

const router = express.Router();

router.post('/create', authenticate, groupController.createGroup);
router.post('/invite', authenticate, groupController.inviteMembers);

export default router;