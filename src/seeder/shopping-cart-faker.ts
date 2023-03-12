import { faker } from "@faker-js/faker";
import { CartItem } from "types/interfaces";

/**
 * Faker to create a shopping cart item
 * @returns
 */
export const shoppingCartFaker = (
  productId: string,
  variantId: string,
  quantity?: number
): CartItem => ({
  id: faker.database.mongodbObjectId(),
  productId,
  variantId,
  quantity: quantity || 1,
});
