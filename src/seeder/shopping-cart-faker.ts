import { faker } from "@faker-js/faker";
import { CartItemInterface } from "types/interfaces";

/**
 * Faker to create a shopping cart item
 * @returns
 */
export const shoppingCartFaker = (
  productId: string,
  variantId: string,
  quantity?: number
): CartItemInterface => ({
  id: faker.database.mongodbObjectId(),
  productId,
  variantId,
  quantity: quantity || 1,
});
