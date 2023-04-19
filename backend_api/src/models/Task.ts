import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  name: string;
  description: string;
  assignee: mongoose.Types.ObjectId;
  dueDate: Date;
  status: 'To Do' | 'In Progress' | 'Done' | 'Cancelled';
}

const taskSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  assignee: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  dueDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['To Do', 'In Progress', 'Done', 'Cancelled'],
    required: true,
  },
});

const Task = mongoose.model<ITask>('Task', taskSchema);

export default Task;
