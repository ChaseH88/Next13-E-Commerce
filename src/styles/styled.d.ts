import "styled-components";
import { makeTheme } from "./theme";

declare module "styled-components" {
  type Theme = ReturnType<typeof makeTheme>;
  export interface DefaultTheme extends Theme {}
}
