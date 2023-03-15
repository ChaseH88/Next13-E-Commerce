import { lighten } from "polished";

/**
 * Utility function that uses the `polished` library to lighten a color
 * @param color
 * @param amount
 * @returns
 */
export const lightenColor = (color: string, amount: number = 0.2) =>
  lighten(amount, color);
