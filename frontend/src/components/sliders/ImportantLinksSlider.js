import React from 'react';
import { Box, Paper, Typography, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  padding: theme.spacing(2, 0),
}));

const SliderTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  animation: 'slide 20s linear infinite',
  '@keyframes slide': {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50%)',
    },
  },
}));

const LinkItem = styled(Paper)(({ theme }) => ({
  minWidth: '250px',
  margin: theme.spacing(0, 2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ImportantLinksSlider = ({ links }) => {
  const theme = useTheme();

  // Duplicate links to create seamless infinite scroll effect
  const duplicatedLinks = [...links, ...links];

  return (
    <SliderContainer>
      <SliderTrack>
        {duplicatedLinks.map((link, index) => (
          <LinkItem key={index} elevation={2}>
            <Link
              href={link.url}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="subtitle1" color="primary" gutterBottom>
                {link.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {link.description}
              </Typography>
            </Link>
          </LinkItem>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default ImportantLinksSlider;
