import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from '@mui/material';
import PhishingIcon from '@mui/icons-material/PhishingOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const awarenessTopics = [
  {
    title: 'Phishing Awareness',
    description: 'Learn how to identify and avoid phishing attempts, protect your personal information, and maintain email security.',
    icon: PhishingIcon,
  },
  {
    title: 'Online Privacy',
    description: 'Understand the importance of privacy settings, secure browsing, and protecting your digital identity.',
    icon: PrivacyTipIcon,
  },
  {
    title: 'Cybersecurity Best Practices',
    description: 'Discover essential security measures, password management, and safe online behavior.',
    icon: SecurityIcon,
  },
];

const Awareness = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Cyber Crime Awareness
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Stay informed and protected in the digital world with our comprehensive
          awareness resources.
        </Typography>
      </Box>

      {/* Main Topics */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {awarenessTopics.map((topic) => (
          <Grid item xs={12} md={4} key={topic.title}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <topic.icon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h2" gutterBottom>
                  {topic.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  {topic.description}
                </Typography>
                <Button variant="outlined" color="primary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Latest Resources */}
      <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
        Latest Resources
      </Typography>
      <Grid container spacing={4}>
        {[1, 2, 3].map((item) => (
          <Grid item xs={12} md={4} key={item}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={`https://source.unsplash.com/random/400x200?cybersecurity=${item}`}
                alt="Cyber security"
              />
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  {['Stay Safe Online', 'Protect Your Data', 'Digital Security'][
                    item - 1
                  ]}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  Learn about the latest cybersecurity threats and how to protect
                  yourself and your organization.
                </Typography>
                <Button size="small" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Awareness;
