import { Document } from "mongoose";

interface IUser extends Document {
    fullName: string;
    email: string;
    password: string;
    ID: string;
  }


export default IUser;