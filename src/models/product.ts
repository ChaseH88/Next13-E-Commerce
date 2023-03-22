import { Schema, model, models } from "mongoose";
import { fitArr, genderArr, sizeArr } from "types/dynamic";
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
    price: {
      name: {
        type: String,
        required: true,
        default: "default",
      },
      value: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
        default: "USD",
      },
      salePrice: {
        type: Number,
        required: false,
      },
      saleEndDate: {
        type: Date,
        required: false,
      },
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
    fit: [
      {
        type: String,
        enum: fitArr,
        required: true,
      },
    ],
    gender: [
      {
        type: String,
        enum: genderArr,
      },
    ],
    variants: [
      {
        name: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
          enum: sizeArr,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        price: {
          name: {
            type: String,
            required: false,
          },
          value: {
            type: Number,
            required: false,
          },
          currency: {
            type: String,
            required: false,
          },
          salePrice: {
            type: Number,
            required: false,
          },
          saleEndDate: {
            type: Date,
            required: false,
          },
        },
      },
    ],
    reviews: [
      {
        _id: false,
        variantId: {
          type: String,
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
        },
        title: {
          type: String,
        },
        body: {
          type: String,
        },
        isHelpful: {
          type: Number,
        },
        isNotHelpful: {
          type: Number,
        },
        archived: {
          type: Boolean,
        },
      },
    ],
    images: [
      {
        _id: false,
        createdById: {
          type: Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        path: {
          type: String,
          required: true,
        },
        alt: {
          type: String,
          required: true,
        },
        isActive: {
          type: Boolean,
          required: true,
          default: true,
        },
        isArchived: {
          type: Boolean,
          required: true,
          default: false,
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
