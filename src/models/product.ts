import { Schema, model, models } from "mongoose";
import { ProductInterface } from "types/interfaces";

const ProductSchema = new Schema<ProductInterface>(
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
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdById: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true,
    },
    isHighlighted: {
      type: Boolean,
      required: true,
      default: false,
    },
    pricingTiers: [
      {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        isActive: {
          type: Boolean,
          required: true,
          default: true,
        },
      },
    ],
    variants: [
      {
        name: {
          type: String,
          required: true,
        },
        options: {
          type: [String],
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Product =
  models.Product || model<ProductInterface>("Product", ProductSchema);
