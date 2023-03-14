import { Schema, model, models } from "mongoose";
import { UserInterface } from "types/interfaces";

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
    role: {
      type: String,
      enum: ["customer", "manager", "admin"],
      default: "customer",
    },
    cart: [
      {
        _id: false,
        productId: {
          type: String,
        },
        variantId: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const User = models.User || model<UserInterface>("User", UserSchema);
