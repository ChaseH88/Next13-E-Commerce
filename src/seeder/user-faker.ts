import { faker } from "@faker-js/faker";
import { UserInterface, LocationInterface } from "types/interfaces";
import { UserRoles } from "types/types";
import { hashPassword } from "utils/password";

/**
 * Faker to create a new location
 */
export const locationFaker = (): LocationInterface => ({
  name: faker.address.street(),
  address1: faker.address.streetAddress(),
  address2: faker.address.secondaryAddress(),
  city: faker.address.city(),
  state: faker.address.state(),
  zip: faker.address.zipCode(),
  country: "USA",
  isActive: true,
});

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
    firstName: "Chase",
    lastName: "Harrison",
    locations: [locationFaker()],
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
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  locations: [locationFaker()],
  role: faker.helpers.arrayElement([
    "customer",
    "manager",
    "admin",
  ]) as UserRoles,
});
