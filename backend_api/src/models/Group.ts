import mongoose, { Document, Types } from 'mongoose';
import { Schema } from 'mongoose';
import IUser from './userInterface';
import IProject from './projectInterface';

export interface IGroup extends Document {
  name: string;
  createdBy: Types.ObjectId | IUser;
  members: Array<Types.ObjectId | IUser>;
  projects: Array<Types.ObjectId | IProject>;
  createdAt: Date;
  updatedAt: Date;
}

const GroupSchema = new Schema({
  name: { type: String, required: true },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  ],
  projects: [
    {
      type:Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    }
  ]
},
{ timestamps: true },);

const Group = mongoose.model<IGroup>('Group', GroupSchema);
export default Group;