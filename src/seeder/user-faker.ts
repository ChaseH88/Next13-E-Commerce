import { faker } from "@faker-js/faker";
import { UserInterface } from "types/interfaces";
import { UserRoles } from "types/types";
import { hashPassword } from "utils/password";

export const userFaker = async (number: number): Promise<UserInterface[]> => {
  const users: UserInterface[] = [
    {
      id: faker.database.mongodbObjectId(),
      email: "ChaseH88@gmail.com",
      password: await hashPassword("Password12345!!"),
      role: "admin",
    },
  ];

  for (let i = 1; i < number; i++) {
    const user: UserInterface = {
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      password: await hashPassword(faker.internet.password()),
      role: faker.helpers.arrayElement([
        "customer",
        "manager",
        "admin",
      ]) as UserRoles,
    };

    users.push(user);
  }

  return users;
};
