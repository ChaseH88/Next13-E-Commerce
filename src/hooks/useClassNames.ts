import { useMemo } from "react";

type ClassValue =
  | string
  | { [key: string]: boolean }
  | undefined
  | null
  | false;

const useClassNames = (...classes: ClassValue[]): string => {
  const className = useMemo(
    () =>
      classes
        .filter(Boolean)
        .map((classValue) => {
          if (typeof classValue === "string") {
            return classValue;
          } else if (
            typeof classValue === "object" &&
            classValue !== null &&
            !Array.isArray(classValue) &&
            Object.getPrototypeOf(classValue) === Object.prototype
          ) {
            return Object.entries(classValue)
              .filter(([, value]) => Boolean(value))
              .map(([key]) => key)
              .join(" ");
          } else {
            return "";
          }
        })
        .filter(Boolean)
        .join(" "),
    [classes]
  );

  return className;
};

export { useClassNames };
