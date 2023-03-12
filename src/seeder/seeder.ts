import { connect, close } from "utils/server";
import { User } from "models/user";
import { Category } from "models/category";
import { Product } from "models/product";
import {
  UserInterface,
  CategoryInterface,
  ProductInterface,
} from "types/interfaces";
import { defaultUsersFaker, userFaker } from "./user-faker";
import { categoryFaker } from "./category-faker";
import { productFaker } from "./product-faker";

const seeder = async () => {
  try {
    // Connect to the database
    await connect();
    console.log("Seeding database...");

    // delete all existing data
    await User.deleteMany({});
    await Category.deleteMany({});
    await Product.deleteMany({});

    if (process.argv.includes("--delete")) {
      // inset the admin user only
      await User.insertMany(await defaultUsersFaker());
      console.log("Database deleted has been deleted and admin user created");
      return await close();
    }

    // Seed the database
    const users: UserInterface[] = [...(await defaultUsersFaker())];
    const categories: CategoryInterface[] = [];
    const products: ProductInterface[] = [];

    // Filter the list of users to only include those with the "admin" role
    const adminUsers = users.filter((user) => user.role === "admin");

    // Create 10 additional users
    for (let i = 0; i < 10; i++) {
      const user = await userFaker();
      users.push(user);
    }

    // Create 4 categories
    for (let i = 0; i < 4; i++) {
      const category = await categoryFaker(
        adminUsers[Math.floor(Math.random() * adminUsers.length)].id
      );
      categories.push(category);
    }

    // Create 30 products
    for (let i = 0; i < 30; i++) {
      const product = await productFaker(
        adminUsers[Math.floor(Math.random() * adminUsers.length)].id,
        categories[Math.floor(Math.random() * categories.length)].id
      );
      products.push(product);
    }

    // insert all many
    await User.insertMany(users);
    await Category.insertMany(categories);
    await Product.insertMany(products);

    // Close the connection
    await close();
    console.log("Database seeded");
  } catch (error) {
    console.log(error);
  }
};

seeder();
