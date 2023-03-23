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
  FaTimes,
  FaGlobeAmericas,
  FaHeadset,
  FaShoppingBag,
  FaCaretRight,
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
  FaTimes,
  FaGlobeAmericas,
  FaHeadset,
  FaShoppingBag,
  FaCaretRight,
} as const;

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
  color?: string;
  size?: number;
}

/**
 * This component was created on top of React Icons
 * @see https://react-icons.github.io/react-icons/
 */
export const Icon = ({ name, color, size }: IconProps): JSX.Element | null => {
  const IconComponent = useMemo(() => icons[name as IconName], [name]);
  return <IconComponent color={color} size={size} />;
};
