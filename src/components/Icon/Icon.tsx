import { useMemo } from "react";
import {
  FaShoppingCart,
  FaCartPlus,
  FaCartArrowDown,
  FaPlus,
  FaMinus,
  FaUser,
  FaCheck,
  FaSearch,
} from "react-icons/fa";

const icons = {
  FaShoppingCart,
  FaCartPlus,
  FaCartArrowDown,
  FaPlus,
  FaMinus,
  FaUser,
  FaCheck,
  FaSearch,
} as const;

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
}

/**
 * This component was created on top of React Icons
 * @see https://react-icons.github.io/react-icons/
 */
export const Icon = ({ name }: IconProps): JSX.Element | null => {
  const IconComponent = useMemo(() => icons[name as IconName], [name]);
  return <IconComponent />;
};
