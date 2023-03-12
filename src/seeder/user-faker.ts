import { faker } from "@faker-js/faker";
import { UserInterface } from "types/interfaces";
import { UserRoles } from "types/types";
import { hashPassword } from "utils/password";

/**
 * Faker to create default users for the system
 * @returns
 */
export const defaultUsersFaker = async (): Promise<UserInterface[]> => [
  {
    id: faker.database.mongodbObjectId(),
    email: "ChaseH88@gmail.com",
    password: await hashPassword("Password12345!!"),
    role: "admin",
  },
];

/**
 * Faker to create a new user
 * @returns
 */
export const userFaker = async (): Promise<UserInterface> => ({
  id: faker.database.mongodbObjectId(),
  email: faker.internet.email(),
  password: await hashPassword(faker.internet.password()),
  role: faker.helpers.arrayElement([
    "customer",
    "manager",
    "admin",
  ]) as UserRoles,
});
