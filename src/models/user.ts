import { Schema, model } from "mongoose";

export interface UserInterface {
  id: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserInterface>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = model<UserInterface>("User", UserSchema);
