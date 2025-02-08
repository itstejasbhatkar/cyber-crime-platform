import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GavelIcon from '@mui/icons-material/Gavel';
import HealingIcon from '@mui/icons-material/Healing';
import SecurityIcon from '@mui/icons-material/Security';

const VictimSupport = () => {
  const emergencyContacts = [
    {
      title: 'Emergency Helpline',
      contact: '112',
      icon: PhoneIcon,
      description: 'Available 24/7 for immediate assistance',
    },
    {
      title: 'Cybercrime Hotline',
      contact: '1800-123-4567',
      icon: SupportAgentIcon,
      description: 'Dedicated support for cyber crime victims',
    },
    {
      title: 'Email Support',
      contact: 'support@cyberguard.com',
      icon: EmailIcon,
      description: 'Send us detailed information about your case',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <HealingIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
        <Typography variant="h3" component="h1" gutterBottom>
          Victim Support Center
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          You're not alone. We're here to help you recover and protect yourself
          from cyber crimes.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<PhoneIcon />}
        >
          Get Immediate Help
        </Button>
      </Box>

      {/* Emergency Contacts */}
      <Typography variant="h4" component="h2" gutterBottom>
        Emergency Contacts
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {emergencyContacts.map((contact) => (
          <Grid item xs={12} md={4} key={contact.title}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <contact.icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom>
                  {contact.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  gutterBottom
                  sx={{ fontWeight: 'bold' }}
                >
                  {contact.contact}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {contact.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Support Services */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              <GavelIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Legal Assistance
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Free Legal Consultation"
                  secondary="Get advice from cybercrime legal experts"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Documentation Support"
                  secondary="Help with legal paperwork and procedures"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Court Representation"
                  secondary="Connect with specialized cybercrime attorneys"
                />
              </ListItem>
            </List>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Get Legal Help
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              <SecurityIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
              Recovery Support
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Account Recovery"
                  secondary="Assistance in recovering compromised accounts"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Identity Protection"
                  secondary="Steps to protect your identity from further harm"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Financial Guidance"
                  secondary="Help with financial recovery and fraud reporting"
                />
              </ListItem>
            </List>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Start Recovery
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VictimSupport;
