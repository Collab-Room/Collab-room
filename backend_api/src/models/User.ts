import mongoose, { Schema, Document } from "mongoose";
import IUser from "./userInterface";

enum roleType {
    TeamLeader = 'TeamLeader',
    Member = 'Member',
  }
  

const UserSchema: Schema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            indexedDB:true,
        },
        password: {
            type: String,
            required: true,
        },
        ID: {
            type: String,
            required: true,
            unique: true,
        }
    },
    { 
        timestamps: { 
            createdAt: 'created_at', 
            updatedAt: 'updated_at' 
        } 
    }
)

// UserSchema.virtual('fullName').get(function () {
//   return `${this.firstName} ${this.middleName}`
// })

UserSchema.set('toJSON', { virtuals: true })
export default mongoose.model<IUser>("User", UserSchema);