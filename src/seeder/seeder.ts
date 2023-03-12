import { userFaker } from "./user-faker";
import { User } from "models/user";
import { connect, close } from "utils/server";

const seeder = async () => {
  await connect();
  console.log("Seeding database...");
  await User.deleteMany({});
  await User.insertMany(await userFaker(10));
  await close();
  console.log("Database seeded");
};

seeder();
