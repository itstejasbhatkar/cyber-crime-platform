import React from 'react';
import { Box, IconButton, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const GalleryContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  padding: theme.spacing(4, 0),
}));

const MediaItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '200px',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    '& .media-overlay': {
      opacity: 1,
    },
    '& .media-image': {
      transform: 'scale(1.1)',
    },
    '& .media-title': {
      transform: 'translateY(0)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
  },
}));

const MediaImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease',
});

const MediaTitle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.7)',
  color: theme.palette.common.white,
  transform: 'translateY(100%)',
  transition: 'all 0.4s ease',
  textAlign: 'center',
}));

const MediaOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
  opacity: 0,
  transition: 'opacity 0.4s ease',
});

const SliderButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.1)',
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.grey[300],
  },
}));

const MediaGallerySlider = ({ items }) => {
  const [startIndex, setStartIndex] = React.useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      Math.max(prevIndex - itemsPerPage, 0)
    );
  };

  const visibleItems = items.slice(startIndex, startIndex + itemsPerPage);

  return (
    <GalleryContainer>
      <Grid container spacing={2}>
        {visibleItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MediaItem>
              <MediaImage 
                className="media-image"
                src={item.imageUrl} 
                alt={item.title} 
              />
              <MediaOverlay className="media-overlay" />
              <MediaTitle className="media-title" variant="subtitle2">
                {item.title}
              </MediaTitle>
            </MediaItem>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <SliderButton 
          onClick={prevSlide} 
          disabled={startIndex === 0}
        >
          <ArrowBack />
        </SliderButton>
        <SliderButton 
          onClick={nextSlide} 
          disabled={startIndex >= items.length - itemsPerPage}
        >
          <ArrowForward />
        </SliderButton>
      </Box>
    </GalleryContainer>
  );
};

export default MediaGallerySlider;
