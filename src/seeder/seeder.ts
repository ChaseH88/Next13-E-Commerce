import { userFaker, defaultUsersFaker } from "./user-faker";
import { categoryFaker } from "./category-faker";
import { User } from "models/user";
import { Category } from "models/category";
import { connect, close } from "utils/server";
import { UserInterface, CategoryInterface } from "types/interfaces";

const seeder = async () => {
  // Connect to the database
  await connect();
  console.log("Seeding database...");

  // Seed the database
  const users: UserInterface[] = [...(await defaultUsersFaker())];
  const adminUser = users[0];
  const categories: CategoryInterface[] = [];

  Array.from({ length: 10 }).forEach(async () => {
    const user = await userFaker();
    users.push(user);
  });

  Array.from({ length: 4 }).forEach(async () => {
    const category = await categoryFaker(adminUser.id);
    categories.push(category);
  });

  await User.deleteMany({});
  await User.insertMany(users);

  await Category.deleteMany({});
  await Category.insertMany(categories);

  // Close the connection
  await close();
  console.log("Database seeded");
};

seeder();
