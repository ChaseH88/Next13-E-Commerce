import { FitType, SizeType } from "./dynamic";
import { UserRoles } from "./types";

export interface UserInterface {
  id: string;
  email: string;
  password: string;
  role: UserRoles;
}

export interface ProductInterface {
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
  variants: {
    id: string;
    name: string;
    color: string;
    size: SizeType;
    quantity: number;
    price?: PriceInterface;
  }[];
}

export interface PriceInterface {
  name: string;
  value: number;
  currency: string;
  salePrice?: number;
  saleEndDate?: Date;
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdById: UserInterface | string;
}
