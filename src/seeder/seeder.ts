import { userFaker } from "./user-faker";

console.log("Seeding users...");
const users = userFaker(10);
console.log(users);
