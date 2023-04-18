import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  id: string;
}

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
        id: {
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