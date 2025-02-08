import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  LinkedIn,
  Telegram,
} from '@mui/icons-material';

const socialMediaLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    color: '#1877F2', // Facebook blue
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com',
    color: '#1DA1F2', // Twitter blue
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
    color: '#E4405F', // Instagram pink
  },
  {
    name: 'YouTube',
    icon: YouTube,
    url: 'https://youtube.com',
    color: '#FF0000', // YouTube red
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    url: 'https://linkedin.com',
    color: '#0A66C2', // LinkedIn blue
  },
  {
    name: 'Telegram',
    icon: Telegram,
    url: 'https://telegram.org',
    color: '#26A5E4', // Telegram blue
  },
];

const SocialIconButton = styled(IconButton)(({ color }) => ({
  margin: '0 8px',
  transition: 'all 0.3s ease',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  '&:hover': {
    transform: 'translateY(-4px)',
    background: color,
    '& .MuiSvgIcon-root': {
      color: '#ffffff',
      transform: 'scale(1.2)',
    },
  },
  '& .MuiSvgIcon-root': {
    fontSize: 24,
    color: '#ffffff',
    transition: 'all 0.3s ease',
  },
}));

const SocialMediaLinks = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}>
      {socialMediaLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Tooltip key={social.name} title={social.name} arrow placement="top">
            <SocialIconButton
              color={social.color}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Icon />
            </SocialIconButton>
          </Tooltip>
        );
      })}
    </Box>
  );
};

export default SocialMediaLinks;
