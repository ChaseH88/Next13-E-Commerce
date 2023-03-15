import { darken } from "polished";

/**
 * Utility function that uses the `polished` library to darken a color
 * @param color
 * @param amount
 * @returns
 */
export const darkenColor = (color: string, amount: number = 0.2) =>
  darken(amount, color);
