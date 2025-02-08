import React, { useState, useEffect } from 'react';
import { Box, IconButton, Paper, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '400px',
  overflow: 'hidden',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
}));

const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.5s ease-in-out',
});

const SliderButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  color: theme.palette.common.white,
  zIndex: 1,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
}));

const SliderDots = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '8px',
  zIndex: 1,
}));

const Dot = styled(Paper)(({ active, theme }) => ({
  width: active ? '24px' : '8px',
  height: '8px',
  borderRadius: '4px',
  backgroundColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.8)',
  },
}));

const ImageOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)',
});

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const theme = useTheme();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId;
    if (isAutoPlaying) {
      intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <SliderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ImageOverlay />
      <SlideImage
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        style={{
          transform: `scale(${isAutoPlaying ? '1.05' : '1'})`,
          transition: 'transform 10s ease-in-out',
        }}
      />
      <SliderButton
        sx={{ left: 16 }}
        onClick={prevSlide}
        size="large"
      >
        <KeyboardArrowLeft />
      </SliderButton>
      <SliderButton
        sx={{ right: 16 }}
        onClick={nextSlide}
        size="large"
      >
        <KeyboardArrowRight />
      </SliderButton>
      <SliderDots>
        {images.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => goToSlide(index)}
            elevation={0}
          />
        ))}
      </SliderDots>
    </SliderContainer>
  );
};

export default ImageSlider;
