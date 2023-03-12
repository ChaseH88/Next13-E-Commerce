import { UserRoles } from "./types";

export interface UserInterface {
  id: string;
  email: string;
  password: string;
  role: UserRoles;
}

export interface CategoryInterface {
  id: string;
  name: string;
  description: string;
  slug: string;
  createdById: UserInterface | string;
}
