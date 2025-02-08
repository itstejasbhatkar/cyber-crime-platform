import React, { useState, useRef } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress,
  useTheme,
  Grid,
  Divider,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import {
  Search,
  TrackChanges,
  Download,
  AccessTime,
  Person,
  Category,
  Description,
  LocationOn,
  Update,
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const AnimatedButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
}));

const StatusChip = styled(Chip)(({ status, theme }) => {
  const getColor = () => {
    switch (status?.toLowerCase()) {
      case 'resolved':
        return { bg: '#4caf50', color: '#fff' };
      case 'under investigation':
        return { bg: '#2196f3', color: '#fff' };
      case 'action taken':
        return { bg: '#ff9800', color: '#fff' };
      default:
        return { bg: '#757575', color: '#fff' };
    }
  };

  return {
    backgroundColor: getColor().bg,
    color: getColor().color,
    fontWeight: 'bold',
    '& .MuiChip-label': {
      padding: '8px 12px',
    },
  };
});

const steps = ['Complaint Filed', 'Under Investigation', 'Action Taken', 'Resolved'];

// Enhanced mock data
const mockComplaintData = {
  id: 'CMP123456',
  status: 'Under Investigation',
  details: 'Your complaint is currently being investigated by our cyber crime unit.',
  lastUpdated: '2024-01-27',
  nextSteps: 'Our team will contact you for additional information if needed.',
  activeStep: 1,
  category: 'Online Fraud',
  location: 'Cyber Crime Unit, Mumbai',
  dateReported: '2024-01-25',
  assignedOfficer: 'Inspector Kumar',
  priority: 'High',
  timeline: [
    {
      date: '2024-01-25',
      status: 'Complaint Filed',
      details: 'Complaint registered in the system',
    },
    {
      date: '2024-01-26',
      status: 'Initial Review',
      details: 'Complaint assigned to cyber crime unit',
    },
    {
      date: '2024-01-27',
      status: 'Under Investigation',
      details: 'Investigation initiated by assigned team',
    },
  ],
  evidenceSubmitted: true,
  witnessStatements: 2,
  expectedResolutionDate: '2024-02-27',
};

const TrackComplaint = () => {
  const [complaintId, setComplaintId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [complaintStatus, setComplaintStatus] = useState(null);
  const theme = useTheme();
  const complaintDetailsRef = useRef(null);

  const handleTrack = async (e) => {
    e.preventDefault();
    if (!complaintId.trim()) {
      setError('Please enter a complaint ID');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace this with actual API call
      if (complaintId === mockComplaintData.id) {
        setComplaintStatus(mockComplaintData);
      } else {
        setError('Invalid complaint ID. Please check and try again.');
      }
    } catch (err) {
      setError('Failed to fetch complaint status. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    if (!complaintDetailsRef.current) return;

    try {
      const canvas = await html2canvas(complaintDetailsRef.current);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`complaint-status-${complaintStatus.id}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
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
          Track Your Complaint
        </Typography>

        <StyledPaper elevation={3}>
          <form onSubmit={handleTrack}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField
                label="Complaint ID"
                variant="outlined"
                value={complaintId}
                onChange={(e) => setComplaintId(e.target.value)}
                placeholder="Enter your complaint ID (e.g., CMP123456)"
                error={!!error}
                helperText={error}
                InputProps={{
                  startAdornment: <TrackChanges sx={{ color: 'action.active', mr: 1 }} />,
                }}
              />

              <AnimatedButton
                type="submit"
                variant="contained"
                size="large"
                disabled={loading}
                startIcon={loading ? <CircularProgress size={20} /> : <Search />}
              >
                Track Status
              </AnimatedButton>
            </Box>
          </form>

          {complaintStatus && (
            <Box sx={{ mt: 4 }} ref={complaintDetailsRef}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      Complaint Details
                    </Typography>
                    <AnimatedButton
                      variant="contained"
                      startIcon={<Download />}
                      onClick={downloadPDF}
                      sx={{ ml: 2 }}
                    >
                      Download Status
                    </AnimatedButton>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Stepper activeStep={complaintStatus.activeStep} alternativeLabel>
                    {steps.map((label) => (
                      <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                      </Step>
                    ))}
                  </Stepper>
                </Grid>

                <Grid item xs={12} md={8}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6">Current Status</Typography>
                            <StatusChip
                              label={complaintStatus.status}
                              status={complaintStatus.status}
                            />
                          </Box>
                          <Divider sx={{ my: 2 }} />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Category sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body1">
                              <strong>Category:</strong> {complaintStatus.category}
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationOn sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body1">
                              <strong>Location:</strong> {complaintStatus.location}
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Person sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body1">
                              <strong>Assigned To:</strong> {complaintStatus.assignedOfficer}
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AccessTime sx={{ mr: 1, color: 'primary.main' }} />
                            <Typography variant="body1">
                              <strong>Expected Resolution:</strong> {complaintStatus.expectedResolutionDate}
                            </Typography>
                          </Box>
                        </Grid>

                        <Grid item xs={12}>
                          <Box sx={{ mt: 2 }}>
                            <Typography variant="body1" paragraph>
                              <strong>Details:</strong> {complaintStatus.details}
                            </Typography>
                            <Alert severity="info" sx={{ mt: 2 }}>
                              <strong>Next Steps:</strong> {complaintStatus.nextSteps}
                            </Alert>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Case Timeline
                      </Typography>
                      <Timeline>
                        {complaintStatus.timeline.map((event, index) => (
                          <TimelineItem key={index}>
                            <TimelineSeparator>
                              <TimelineDot color="primary" />
                              {index < complaintStatus.timeline.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                              <Typography variant="subtitle2" color="primary">
                                {event.date}
                              </Typography>
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                {event.status}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {event.details}
                              </Typography>
                            </TimelineContent>
                          </TimelineItem>
                        ))}
                      </Timeline>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          )}
        </StyledPaper>
      </Box>
    </Container>
  );
};

export default TrackComplaint;
