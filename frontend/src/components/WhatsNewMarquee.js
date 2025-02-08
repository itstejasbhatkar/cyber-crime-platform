import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Info } from '@mui/icons-material';

const MarqueeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
}));

const WhatsNewLabel = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  padding: theme.spacing(0.5, 2),
  borderRadius: theme.shape.borderRadius,
  zIndex: 2,
  marginRight: theme.spacing(3),
  boxShadow: theme.shadows[4],
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
  },
}));

const MarqueeContent = styled(Box)(({ isPaused }) => ({
  display: 'flex',
  alignItems: 'center',
  animation: 'marquee 20s linear infinite',
  whiteSpace: 'nowrap',
  animationPlayState: isPaused ? 'paused' : 'running',
  '&:hover': {
    animationPlayState: 'paused',
  },
  '@keyframes marquee': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

const UpdateText = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  '&:not(:last-child)::after': {
    content: '"•"',
    marginLeft: theme.spacing(2),
    color: theme.palette.secondary.light,
  },
}));

const WhatsNewMarquee = ({ updates }) => {
  const [isPaused, setIsPaused] = React.useState(false);

  return (
    <MarqueeContainer>
      <WhatsNewLabel>
        <Info />
        <Typography variant="subtitle2">What's New</Typography>
      </WhatsNewLabel>
      <Box sx={{ flex: 1, overflow: 'hidden' }}>
        <MarqueeContent
          isPaused={isPaused}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {updates.map((update, index) => (
            <UpdateText key={index} variant="body2">
              {update}
            </UpdateText>
          ))}
        </MarqueeContent>
      </Box>
    </MarqueeContainer>
  );
};

export default WhatsNewMarquee;
