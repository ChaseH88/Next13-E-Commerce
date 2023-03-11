import { UserRoles } from "./types";

export interface UserInterface {
  id: string;
  email: string;
  password: string;
  role: UserRoles;
}
