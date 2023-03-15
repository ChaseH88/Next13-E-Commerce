import { faker } from "@faker-js/faker";
import { fitArr, FitType, sizeArr, genderArr, GenderType } from "types/dynamic";
import { ProductInterface, ReviewInterface } from "types/interfaces";

/**
 * Faker to create a new review
 * @param variantId - variant id
 * @param userId - user id
 * @returns
 */
export const reviewFaker = (
  variantId: string,
  userId: string
): ReviewInterface => ({
  id: faker.database.mongodbObjectId(),
  variantId,
  userId,
  rating: faker.datatype.number({ min: 1, max: 5 }),
  title: faker.lorem.sentence(),
  body: faker.lorem.paragraph(),
  isHelpful: faker.datatype.number({ min: 0, max: 100 }),
  isNotHelpful: faker.datatype.number({ min: 0, max: 100 }),
  archived: false,
});

/**
 * Faker to create a new variant
 */
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
    gender: faker.helpers.shuffle(genderArr as any).slice(0, 1) as GenderType[],
    variants: Array.from({
      length: faker.datatype.number({ min: 1, max: 1 }),
    }).map(variantFaker),
  };
};
