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
  price: number;
  categoryId: CategoryInterface | string;
  createdById: UserInterface | string;
  isAvailable: boolean;
  isHighlighted: boolean;
  pricingTiers: PricingTierInterface[];
  variants: VariantInterface[];
}

export interface PricingTierInterface {
  name: string;
  description: string;
  quantity: number;
  price: number;
  isActive: boolean;
}

export interface VariantInterface {
  name: string;
  options: string[];
  quantity: number;
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdById: UserInterface | string;
}
