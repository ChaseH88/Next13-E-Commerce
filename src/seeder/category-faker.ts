import { faker } from "@faker-js/faker";
import { CategoryInterface } from "types/interfaces";

/**
 * Faker to create a new category
 * @returns
 */
export const categoryFaker = async (
  createdById: string
): Promise<CategoryInterface> => {
  const name = faker.commerce.productName();
  return {
    id: faker.database.mongodbObjectId(),
    name,
    description: faker.commerce.productDescription(),
    slug: faker.helpers.slugify(name),
    createdById,
  };
};
