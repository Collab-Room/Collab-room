import mongoose, { Document, Schema } from 'mongoose';
import IProject from './projectInterface';

const projectSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  teamLeader: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Completed'],
    required: true,
  },
  tasks: [
    {
      type:Schema.Types.ObjectId,
      ref: 'Task',
      required: true,
    }
  ]
});

const Project = mongoose.model<IProject>('Project', projectSchema);

export default Project;