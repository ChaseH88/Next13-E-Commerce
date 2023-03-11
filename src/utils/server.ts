import mongoose from "mongoose";

const username = "chase123";
const password = "chase123";
const collection = "ecommerceapp";
const uri = `mongodb+srv://${username}:${password}@chaseharrison.h2q0q.mongodb.net/${collection}?retryWrites=true&w=majority`;

export const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};
