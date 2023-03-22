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
import { productFaker, reviewFaker } from "./product-faker";
import { shoppingCartFaker } from "./shopping-cart-faker";
import { imageFaker } from "./image-faker";

const NUMBER_OF_USERS = 3;
const NUMBER_OF_CATEGORIES = 4;
const NUMBER_OF_PRODUCTS = 30;
const NUMBER_OF_REVIEWS = 3;
const NUMBER_OF_SHOPPING_CART_ITEMS = 2;
const NUMBER_OF_IMAGES = 3;

const getRandomId = (array: any[], getEntireObj = false) =>
  !getEntireObj
    ? array[Math.floor(Math.random() * array.length)].id
    : array[Math.floor(Math.random() * array.length)];

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
    for (let i = 0; i < NUMBER_OF_USERS; i++) {
      const user = await userFaker();
      users.push(user);
    }

    // Create 4 categories
    for (let i = 0; i < NUMBER_OF_CATEGORIES; i++) {
      const category = await categoryFaker(getRandomId(adminUsers));
      categories.push(category);
    }

    // Create 30 products
    for (let i = 0; i < NUMBER_OF_PRODUCTS; i++) {
      const product = await productFaker(
        getRandomId(adminUsers),
        getRandomId(categories)
      );
      // for each product, create 3 reviews, we will use random users for each review
      for (let i = 0; i < NUMBER_OF_REVIEWS; i++) {
        const review = reviewFaker(product.variants[0].id!, getRandomId(users));
        if (product.reviews) {
          product.reviews.push(review);
        } else {
          product.reviews = [review];
        }
      }

      // Generate images for the product
      for (let i = 0; i < NUMBER_OF_IMAGES; i++) {
        const image = await imageFaker(getRandomId(adminUsers), "apparel");
        product.images.push(image);
      }

      products.push(product);
    }

    // Insert all data
    await User.insertMany(users);
    await Category.insertMany(categories);
    await Product.insertMany(products);

    // Create a shopping cart item for a random user
    const allUsers = await User.find();
    const allProducts = await Product.find();

    for (const user of allUsers) {
      for (let i = 0; i < NUMBER_OF_SHOPPING_CART_ITEMS; i++) {
        const randomProduct = getRandomId(allProducts, true);
        const cartItem = shoppingCartFaker(
          randomProduct?.id!,
          randomProduct?.variants[0].id!,
          1
        );

        await User.findByIdAndUpdate(
          user.id,
          {
            $push: {
              cart: cartItem,
            },
          },
          { new: true }
        );
      }
    }

    // Close the connection
    await close();
    console.log("Database seeded");
  } catch (error) {
    console.log(error);
  }
};

seeder();
