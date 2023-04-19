import mongoose from 'mongoose';
import { Document, Types } from 'mongoose';
import { ITask } from './Task';

interface IProject extends Document {
    name: string;
    description: string;
    teamLeader: mongoose.Types.ObjectId;
    startDate: Date;
    endDate: Date;
    tasks: Array<Types.ObjectId | ITask>;
    status: 'To Do' | 'In Progress' | 'Completed';
  }
  

export default IProject;