import { linearGradient } from "polished";

export const gradient = (direction: string, colors: string[]) => {
  return linearGradient({
    colorStops: colors,
    toDirection: direction,
    fallback: colors[0],
  });
};
