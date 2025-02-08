import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Paper,
  Stack,
  useTheme,
} from '@mui/material';
import ReportIcon from '@mui/icons-material/Report';
import SchoolIcon from '@mui/icons-material/School';
import SupportIcon from '@mui/icons-material/Support';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import TimelineIcon from '@mui/icons-material/Timeline';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WarningIcon from '@mui/icons-material/Warning';
import HelpIcon from '@mui/icons-material/Help';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageSlider from '../components/sliders/ImageSlider';
import WhatsNewMarquee from '../components/WhatsNewMarquee';
import SocialMediaLinks from '../components/SocialMediaLinks';

const features = [
  {
    title: 'Report Cyber Crime',
    description: 'Submit incidents securely and track their progress. We ensure your privacy and confidentiality.',
    icon: ReportIcon,
    path: '/report',
  },
  {
    title: 'Learn & Prevent',
    description: 'Access comprehensive resources on cybersecurity best practices and prevention strategies.',
    icon: SchoolIcon,
    path: '/learning',
  },
  {
    title: 'Get Support',
    description: 'Find guidance, legal advice, and support services for cybercrime victims.',
    icon: SupportIcon,
    path: '/support',
  },
];

// Slider Images
const sliderImages = [
  {
    url: '/images/slider/cyber-security-1.jpg',
    alt: 'Cyber Security Protection',
  },
  {
    url: '/images/slider/cyber-crime-2.jpg',
    alt: 'Online Safety',
  },
  {
    url: '/images/slider/digital-security-3.jpg',
    alt: 'Digital Security',
  },
  {
    url: '/images/slider/cyber-awareness-4.jpg',
    alt: 'Cyber Awareness',
  },
];

const updates = [
  '🔔 New cyber security guidelines released for online banking',
  '📅 Upcoming workshop on social media safety next week',
  '🚨 Report cyber incidents 24/7 through our platform',
  '📱 Download our mobile app for instant alerts',
];

const statistics = [
  { icon: TimelineIcon, value: '1000+', label: 'Cases Resolved' },
  { icon: GroupIcon, value: '50,000+', label: 'Users Protected' },
  { icon: VerifiedUserIcon, value: '24/7', label: 'Support Available' },
];

const recentIncidents = [
  {
    type: 'Phishing Attack',
    location: 'Mumbai',
    status: 'Resolved',
    date: '2025-01-25',
  },
  {
    type: 'Data Breach',
    location: 'Delhi',
    status: 'Under Investigation',
    date: '2025-01-24',
  },
  {
    type: 'Identity Theft',
    location: 'Bangalore',
    status: 'Resolved',
    date: '2025-01-23',
  },
];

const safetyTips = [
  {
    title: 'Use Strong Passwords',
    description: 'Create unique passwords with a mix of letters, numbers, and symbols.',
    icon: SecurityIcon,
  },
  {
    title: 'Enable Two-Factor Authentication',
    description: 'Add an extra layer of security to your accounts.',
    icon: VerifiedUserIcon,
  },
  {
    title: 'Stay Updated',
    description: 'Keep your software and systems up to date with the latest security patches.',
    icon: SecurityIcon,
  },
];

const emergencyContacts = [
  { icon: PhoneIcon, label: 'Emergency Helpline', value: '112' },
  { icon: PhoneIcon, label: 'Women Helpline', value: '1091' },
  { icon: EmailIcon, label: 'Report via Email', value: 'report@cybercrime.gov.in' },
];

const reportCategories = [
  {
    title: 'Social Media Crimes',
    description: 'Report cyber bullying, stalking, and online harassment',
    icon: WarningIcon,
    path: '/report/social',
  },
  {
    title: 'Financial Fraud',
    description: 'Report online banking fraud, UPI scams, and phishing',
    icon: GavelIcon,
    path: '/report/financial',
  },
  {
    title: 'Online Content',
    description: 'Report harmful content, fake news, and explicit material',
    icon: DescriptionIcon,
    path: '/report/content',
  },
];

const quickLinks = [
  {
    title: 'Report Incident',
    path: '/report',
    icon: ReportIcon,
  },
  {
    title: 'Track Complaint',
    path: '/track-complaint',
    icon: TimelineIcon,
  },
  {
    title: 'Learning Hub',
    path: '/learning',
    icon: SchoolIcon,
  },
  {
    title: 'Victim Support',
    path: '/support',
    icon: SupportIcon,
  },
  {
    title: 'Community Forum',
    path: '/forum',
    icon: GroupIcon,
  },
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box>
      <WhatsNewMarquee updates={updates} />

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: 'white',
          pt: { xs: 8, md: 12 },
          pb: { xs: 12, md: 16 },
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                sx={{ 
                  fontWeight: 'bold',
                  mb: 3,
                  background: 'linear-gradient(45deg, #ffffff, #82b1ff)',
                  backgroundClip: 'text',
                  textFillColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Stay Safe in the Digital World
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: '#bbdefb' }}>
                Report cyber incidents, learn about online safety, and get support when you need it most.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  color="error"
                  size="large"
                  onClick={() => navigate('/report')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    background: 'linear-gradient(45deg, #ff1744 30%, #ff4081 90%)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #f50057 30%, #ff1744 90%)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Report an Incident
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => navigate('/learning')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontSize: '1.1rem',
                    borderColor: '#bbdefb',
                    color: '#bbdefb',
                    '&:hover': {
                      borderColor: '#ffffff',
                      color: '#ffffff',
                      transform: 'translateY(-2px)',
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: 20,
                    bottom: 20,
                    border: '2px solid',
                    borderColor: 'secondary.main',
                    borderRadius: 4,
                    opacity: 0.3,
                  },
                }}
              >
                <ImageSlider images={sliderImages} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Emergency Contact Banner */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, #d32f2f 30%, #f44336 90%)',
          color: 'white',
          py: 2,
          transform: 'translateY(-50%)',
          boxShadow: theme.shadows[5],
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems="center">
            {emergencyContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 2,
                      bgcolor: 'error.dark',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        bgcolor: 'error.dark',
                      },
                    }}
                  >
                    <Icon sx={{ mr: 1, fontSize: 28 }} />
                    <Box>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {contact.label}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {contact.value}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -4 }}>
        {/* Report Categories Section */}
        <Box sx={{ mb: 8, mt: 8 }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
            }}
          >
            How Can We Help You?
          </Typography>
          <Grid container spacing={4}>
            {reportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: (theme) => `0 12px 24px ${theme.palette.primary.light}40`,
                        '& .category-icon': {
                          transform: 'scale(1.2) rotate(10deg)',
                          color: 'primary.main',
                        },
                        '& .arrow-icon': {
                          transform: 'translateX(4px)',
                          opacity: 1,
                        },
                      },
                    }}
                    onClick={() => navigate(category.path)}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Icon
                        className="category-icon"
                        sx={{
                          fontSize: 56,
                          color: 'text.secondary',
                          transition: 'all 0.3s ease',
                          mb: 2,
                        }}
                      />
                      <Typography variant="h5" gutterBottom>
                        {category.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {category.description}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <Typography 
                          variant="button" 
                          color="primary"
                          sx={{ mr: 1 }}
                        >
                          Report Now
                        </Typography>
                        <ArrowForwardIcon 
                          className="arrow-icon"
                          sx={{ 
                            fontSize: 20,
                            opacity: 0,
                            transition: 'all 0.3s ease',
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Quick Links Section */}
        <Box 
          sx={{ 
            mb: 8,
            py: 6,
            px: 4,
            background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
            borderRadius: 4,
          }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{ 
              color: '#1e3c72',
              mb: 4,
              fontWeight: 'bold',
            }}
          >
            Quick Access
          </Typography>
          <Grid container spacing={3}>
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Grid item xs={12} sm={6} md={2.4} key={index}>
                  <Paper
                    sx={{
                      p: 3,
                      height: '100%',
                      borderRadius: 3,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'background.paper',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(30, 60, 114, 0.2)',
                        '& .quick-link-icon': {
                          transform: 'scale(1.2)',
                          color: '#1e3c72',
                        },
                      },
                    }}
                    onClick={() => navigate(link.path)}
                  >
                    <Icon
                      className="quick-link-icon"
                      sx={{
                        fontSize: 36,
                        color: '#2a5298',
                        mb: 2,
                        transition: 'all 0.3s ease',
                      }}
                    />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        color: '#1e3c72',
                      }}
                    >
                      {link.title}
                    </Typography>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Safety Tips Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1e3c72, #2a5298)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
            }}
          >
            Stay Protected Online
          </Typography>
          <Grid container spacing={4}>
            {safetyTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <Grid item xs={12} md={4} key={index}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 4,
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 24px rgba(30, 60, 114, 0.2)',
                        '& .tip-icon': {
                          transform: 'scale(1.2) rotate(10deg)',
                          color: '#1e3c72',
                        },
                      },
                    }}
                  >
                    <Stack spacing={3} alignItems="center">
                      <Icon
                        className="tip-icon"
                        sx={{
                          fontSize: 48,
                          color: '#2a5298',
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <Typography variant="h5" align="center" sx={{ color: '#1e3c72' }}>
                        {tip.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" align="center">
                        {tip.description}
                      </Typography>
                    </Stack>
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* Connect With Us Section */}
        <Box 
          sx={{ 
            textAlign: 'center',
            py: 6,
            px: 4,
            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
            color: 'white',
            borderRadius: 4,
            mb: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            Stay Connected
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4, color: '#bbdefb' }}>
            Follow us on social media for latest updates and cyber security tips
          </Typography>
          <SocialMediaLinks />
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
