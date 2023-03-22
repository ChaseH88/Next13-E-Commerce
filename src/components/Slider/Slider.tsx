import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SliderButton = styled.button`
  border: none;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
`;

const SliderButtonPrevious = styled(SliderButton)`
  left: 0;
  z-index: 900;
`;

const SliderButtonNext = styled(SliderButton)`
  right: 0;
  z-index: 901;
`;

const SliderImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const [currentImage, setCurrentImage] = useState(images[currentImageIndex]);

  useEffect(() => {
    setCurrentImage(images[currentImageIndex]);
  }, [currentImageIndex, images]);

  return (
    <SliderContainer>
      <SliderButtonPrevious onClick={handlePreviousImage}>
        {"<"}
      </SliderButtonPrevious>
      <SliderImage
        key={currentImage}
        src={currentImage}
        alt=""
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100%" }}
        transition={{ duration: 0.5 }}
      />
      <SliderButtonNext onClick={handleNextImage}>{">"}</SliderButtonNext>
    </SliderContainer>
  );
};

export { Slider };
