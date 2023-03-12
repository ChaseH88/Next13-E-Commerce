import { faker } from "@faker-js/faker";
import { UserInterface } from "types/interfaces";

export const userFaker = (number: number): UserInterface[] =>
  Array.from({ length: number }, () => ({
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(["customer", "manager", "admin"]),
  }));
