import { useMemo } from "react";
import {
  FaShoppingCart,
  FaCartPlus,
  FaCartArrowDown,
  FaPlus,
  FaMinus,
  FaUser,
  FaCheck,
} from "react-icons/fa";

const icons = {
  FaShoppingCart,
  FaCartPlus,
  FaCartArrowDown,
  FaPlus,
  FaMinus,
  FaUser,
  FaCheck,
} as const;

type IconName = keyof typeof icons;

interface IconProps {
  name: IconName;
}

export const Icon = ({ name }: IconProps): JSX.Element | null => {
  const IconComponent = useMemo(() => icons[name as IconName], [name]);
  return <IconComponent />;
};
