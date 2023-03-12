import { userFaker, defaultUsersFaker } from "./user-faker";
import { User } from "models/user";
import { connect, close } from "utils/server";
import { UserInterface } from "types/interfaces";

const seeder = async () => {
  // Connect to the database
  await connect();
  console.log("Seeding database...");

  // Seed the database
  const users: UserInterface[] = [...(await defaultUsersFaker())];

  Array.from({ length: 10 }).forEach(async () => {
    users.push(await userFaker());
  });

  await User.deleteMany({});
  await User.insertMany(users);

  // Close the connection
  await close();
  console.log("Database seeded");
};

seeder();
