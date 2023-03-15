import { NextApiRequest } from "next";
import { FitType, SizeType, GenderType } from "./dynamic";
import { UserRoles } from "./types";

export interface CustomRequest extends NextApiRequest {
  userId?: string;
}

export interface UserInterface {
  _id?: string;
  id: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  locations?: LocationInterface[];
  role: UserRoles;
  cart?: CartItemInterface[];
}

export interface LocationInterface {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isActive: boolean;
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
  gender: GenderType[];
  // images: string[];
  variants: VariantInterface[];
  reviews?: ReviewInterface[];
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

export interface ReviewInterface {
  _id?: string;
  id: string;
  variantId: VariantInterface | string;
  userId: UserInterface | string;
  rating: number;
  title: string;
  body: string;
  isHelpful: number;
  isNotHelpful: number;
  archived: boolean;
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
