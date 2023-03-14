import { NextApiRequest } from "next";
import { FitType, SizeType } from "./dynamic";
import { UserRoles } from "./types";

export interface CustomRequest extends NextApiRequest {
  userId?: string;
}

export interface UserInterface {
  _id?: string;
  id: string;
  email: string;
  password: string;
  role: UserRoles;
  cart?: CartItemInterface[];
}

export interface CartItemInterface {
  _id?: string;
  id?: string;
  productId: string;
  variantId: string;
  quantity: number;
}

export interface ProductInterface {
  _id?: string;
  id: string;
  name: string;
  description: string;
  slug: string;
  categoryId: CategoryInterface | string;
  createdById: UserInterface | string;
  price: PriceInterface;
  isAvailable: boolean;
  isHighlighted: boolean;
  fit: FitType[];
  // images: string[];
  variants: VariantInterface[];
}

export interface VariantInterface {
  _id?: string;
  id: string;
  name: string;
  color: string;
  size: SizeType;
  quantity: number;
  price?: PriceInterface;
}

export interface PriceInterface {
  name: string;
  value: number;
  currency: string;
  salePrice?: number;
  saleEndDate?: Date;
}

export interface CategoryInterface {
  _id?: string;
  id: string;
  name: string;
  description: string;
  slug: string;
  createdById: UserInterface | string;
}
