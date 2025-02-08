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
  TextField,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import PersonIcon from '@mui/icons-material/Person';
import CommentIcon from '@mui/icons-material/Comment';
import VisibilityIcon from '@mui/icons-material/Visibility';

const discussionTopics = [
  {
    title: 'Recent Phishing Attacks',
    author: 'CyberExpert',
    replies: 15,
    views: 234,
    tags: ['Phishing', 'Security Alert'],
    lastActive: '2 hours ago',
  },
  {
    title: 'Password Security Best Practices',
    author: 'SecurityPro',
    replies: 28,
    views: 456,
    tags: ['Passwords', 'Best Practices'],
    lastActive: '4 hours ago',
  },
  {
    title: 'Social Media Account Hacked',
    author: 'ConcernedUser',
    replies: 12,
    views: 189,
    tags: ['Social Media', 'Account Security'],
    lastActive: '1 day ago',
  },
];

const Forum = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <ForumIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Community Forum
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Join the discussion, share experiences, and learn from the community.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Start New Discussion
        </Button>
      </Box>

      {/* Search and Filter */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              placeholder="Search discussions..."
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ height: '100%' }}
            >
              Advanced Search
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Discussion Topics */}
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Recent Discussions
      </Typography>
      <Grid container spacing={3}>
        {discussionTopics.map((topic) => (
          <Grid item xs={12} key={topic.title}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                      {topic.title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {topic.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{ mr: 1 }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar sx={{ width: 24, height: 24, mr: 1 }}>
                          <PersonIcon />
                        </Avatar>
                        <Typography variant="body2">{topic.author}</Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Typography variant="body2" color="text.secondary">
                        Last active: {topic.lastActive}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 3 }}>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">{topic.replies}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CommentIcon
                            fontSize="small"
                            sx={{ mr: 0.5 }}
                          />
                          <Typography variant="body2">Replies</Typography>
                        </Box>
                      </Box>
                      <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6">{topic.views}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <VisibilityIcon
                            fontSize="small"
                            sx={{ mr: 0.5 }}
                          />
                          <Typography variant="body2">Views</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="small">View Discussion</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Forum;
