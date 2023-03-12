import { faker } from "@faker-js/faker";
import { fitArr, FitType, sizeArr } from "types/dynamic";
import { ProductInterface } from "types/interfaces";

const variantFaker = (): ProductInterface["variants"][0] => ({
  id: faker.database.mongodbObjectId(),
  name: "default",
  color: faker.color.human(),
  size: faker.helpers.arrayElement(sizeArr),
  quantity: faker.datatype.number({ min: 1, max: 10 }),
});

/**
 * Faker to create a new category
 * @returns
 */
export const productFaker = async (
  createdById: string,
  categoryId: string
): Promise<ProductInterface> => {
  const name = faker.commerce.productName();
  return {
    id: faker.database.mongodbObjectId(),
    name,
    description: faker.commerce.productDescription(),
    slug: faker.helpers.slugify(name),
    categoryId,
    createdById,
    isAvailable: faker.datatype.boolean(),
    isHighlighted: faker.datatype.boolean(),
    fit: faker.helpers.shuffle(fitArr as any).slice(0, 1) as FitType[],
    price: {
      name: "default",
      value: faker.datatype.number({ min: 10, max: 1000 }),
      currency: "USD",
    },
    variants: Array.from({
      length: faker.datatype.number({ min: 1, max: 1 }),
    }).map(variantFaker),
  };
};
