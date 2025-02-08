import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Divider,
  styled,
} from '@mui/material';
import { colors } from '../theme/colors';

const StyledFooter = styled(Box)(({ theme }) => ({
  backgroundColor: colors.primary.deepBlue,
  color: colors.secondary.grayishWhite,
  padding: theme.spacing(6, 0),
  marginTop: 'auto',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: colors.secondary.grayishWhite,
  textDecoration: 'none',
  '&:hover': {
    color: colors.primary.electricBlue,
  },
  marginBottom: theme.spacing(1),
  display: 'block',
}));

const Footer = () => {
  return (
    <StyledFooter component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                color: colors.complementary.amber,
                fontWeight: 'bold'
              }}
            >
              Cyber Crime Portal
            </Typography>
            <Typography 
              variant="body2"
              sx={{ color: colors.secondary.grayishWhite }}
            >
              Protecting citizens in the digital age through awareness, education,
              and support.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                color: colors.complementary.amber,
                fontWeight: 'bold'
              }}
            >
              Quick Links
            </Typography>
            <StyledLink component={RouterLink} to="/report">
              Report Incident
            </StyledLink>
            <StyledLink component={RouterLink} to="/awareness">
              Awareness
            </StyledLink>
            <StyledLink component={RouterLink} to="/learning">
              Learning Hub
            </StyledLink>
            <StyledLink component={RouterLink} to="/support">
              Victim Support
            </StyledLink>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography 
              variant="h6" 
              gutterBottom
              sx={{ 
                color: colors.complementary.amber,
                fontWeight: 'bold'
              }}
            >
              Contact
            </Typography>
            <Typography variant="body2" paragraph>
              Emergency: 100
            </Typography>
            <Typography variant="body2" paragraph>
              Cyber Crime Helpline: 1930
            </Typography>
            <Typography variant="body2">
              Email: support@cybercrime.gov.in
            </Typography>
          </Grid>
        </Grid>
        <Divider 
          sx={{ 
            my: 3, 
            backgroundColor: colors.secondary.slateGray,
            opacity: 0.2 
          }} 
        />
        <Typography 
          variant="body2" 
          align="center"
          sx={{ 
            color: colors.secondary.grayishWhite,
            opacity: 0.8 
          }}
        >
          {new Date().getFullYear()} Cyber Crime Portal. All rights reserved.
        </Typography>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
