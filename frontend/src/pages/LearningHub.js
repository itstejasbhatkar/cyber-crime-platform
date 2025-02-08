import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  LinearProgress,
  Chip,
  Divider,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MediaGallerySlider from '../components/sliders/MediaGallerySlider';
import ImportantLinksSlider from '../components/sliders/ImportantLinksSlider';

const courses = [
  {
    title: 'Cybersecurity Fundamentals',
    description: 'Learn the basics of cybersecurity and online safety.',
    progress: 0,
    level: 'Beginner',
    duration: '2 hours',
  },
  {
    title: 'Advanced Threat Protection',
    description: 'Understand advanced cyber threats and protection methods.',
    progress: 30,
    level: 'Intermediate',
    duration: '3 hours',
  },
  {
    title: 'Digital Forensics Basics',
    description: 'Introduction to digital forensics and incident response.',
    progress: 70,
    level: 'Advanced',
    duration: '4 hours',
  },
];

const mediaItems = [
  {
    imageUrl: 'https://source.unsplash.com/800x600/?cybersecurity-training',
    title: 'Password Security Workshop',
  },
  {
    imageUrl: 'https://source.unsplash.com/800x600/?online-safety',
    title: 'Online Safety Guidelines',
  },
  {
    imageUrl: 'https://source.unsplash.com/800x600/?data-protection',
    title: 'Data Protection Basics',
  },
  {
    imageUrl: 'https://source.unsplash.com/800x600/?cyber-security',
    title: 'Cyber Security Essentials',
  },
];

const importantLinks = [
  {
    title: 'Cybersecurity Best Practices',
    description: 'Essential guidelines for staying safe online',
    url: '/learning/best-practices',
  },
  {
    title: 'Video Tutorials',
    description: 'Watch and learn from our expert tutorials',
    url: '/learning/videos',
  },
  {
    title: 'Security Tools Guide',
    description: 'Learn about essential security tools',
    url: '/learning/tools',
  },
  {
    title: 'Latest Threats',
    description: 'Stay updated with recent cyber threats',
    url: '/learning/threats',
  },
];

const LearningHub = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mb: 4 }}>
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
          <SchoolIcon sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h3" component="h1" gutterBottom>
            Learning Hub
          </Typography>
          <Typography variant="h6" paragraph>
            Enhance your cybersecurity knowledge with our comprehensive learning resources
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Media Gallery Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Featured Resources
          </Typography>
          <MediaGallerySlider items={mediaItems} />
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Courses Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Available Courses
          </Typography>
          <Grid container spacing={4}>
            {courses.map((course, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: (theme) => `0 12px 24px ${theme.palette.primary.light}40`,
                      '& .progress-bar': {
                        transform: 'scaleX(1.02)',
                        backgroundColor: 'primary.main',
                      },
                      '& .course-chip': {
                        transform: 'translateY(-2px)',
                      },
                    },
                  }}
                >
                  <CardContent>
                    <Typography 
                      variant="h6" 
                      gutterBottom
                      sx={{
                        transition: 'color 0.3s ease',
                        '&:hover': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {course.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        className="course-chip"
                        label={course.level}
                        color="primary"
                        size="small"
                        sx={{ 
                          mr: 1,
                          transition: 'all 0.3s ease',
                        }}
                      />
                      <Chip
                        className="course-chip"
                        label={course.duration}
                        color="secondary"
                        size="small"
                        sx={{ 
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Progress: {course.progress}%
                      </Typography>
                      <LinearProgress
                        className="progress-bar"
                        variant="determinate"
                        value={course.progress}
                        sx={{ 
                          mt: 1,
                          transition: 'all 0.3s ease',
                          transform: 'scaleX(1)',
                          transformOrigin: 'left',
                        }}
                      />
                    </Box>
                  </CardContent>
                  <CardActions sx={{ mt: 'auto', p: 2 }}>
                    <Button 
                      size="small" 
                      color="primary" 
                      fullWidth
                      sx={{
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: (theme) => theme.shadows[4],
                        },
                      }}
                    >
                      Continue Learning
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Important Links Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom>
            Quick Access Resources
          </Typography>
          <ImportantLinksSlider links={importantLinks} />
        </Box>
      </Container>
    </Box>
  );
};

export default LearningHub;
