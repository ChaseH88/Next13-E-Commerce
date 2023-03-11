import { genSalt, compare, hash } from "bcrypt";

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const checkPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await compare(password, hashedPassword);
};
