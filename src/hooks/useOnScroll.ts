import { useEffect } from "react";

type ScrollHandler = () => void;

const useOnScroll = (handler: ScrollHandler) => {
  useEffect(() => {
    const handleScroll = () => {
      handler();
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handler]);
};

export { useOnScroll };
