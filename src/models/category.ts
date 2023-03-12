import { Schema, model, models } from "mongoose";
import { CategoryInterface } from "types/interfaces";

const CategorySchema = new Schema<CategoryInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    createdById: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export const Category =
  models.Category || model<CategoryInterface>("Category", CategorySchema);
