import { Schema, model, models } from "mongoose";

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
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model<UserInterface>("User", UserSchema);
