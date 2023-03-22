import { faker } from "@faker-js/faker";
import { ImageInterface } from "types/interfaces";

/**
 * We use the Cloudinary API to upload images to our Cloudinary account.
 * 
 * On Upload the response looks like this:
 * {
    asset_id: '702360955462aa05c3b6962c6a900306',
    public_id: 'olympic_flag',
    version: 1679442345,
    version_id: 'a0a83ccea083e74da5c75014ecc08c91',
    signature: '99a64c835c3c0d5c3311159df25b17dafda8087e',
    width: 4272,
    height: 2848,
    format: 'jpg',
    resource_type: 'image',
    created_at: '2023-03-21T23:45:45Z',
    tags: [],
    bytes: 2678479,
    type: 'upload',
    etag: '7f9b962756ce7880affab2641c7a17de',
    placeholder: false,
    url: 'http://res.cloudinary.com/chaseh88/image/upload/v1679442345/olympic_flag.jpg',
    secure_url: 'https://res.cloudinary.com/chaseh88/image/upload/v1679442345/olympic_flag.jpg',
    folder: '',
    access_mode: 'public',
    original_filename: 'Olympic_flag',
    api_key: '899273552835847'
  }
 */

const products = {
  apparel: faker.image.fashion,
};

/**
 * Faker to create a new image
 * @returns
 */
export const imageFaker = async (
  createdById: string,
  imageType: keyof typeof products
): Promise<ImageInterface> => {
  const image = products[imageType]();
  const name = image.split("/").pop()!;
  return {
    id: faker.database.mongodbObjectId(),
    createdById,
    name,
    alt: name,
    isActive: true,
    isArchived: false,
    path: image,
  };
};
