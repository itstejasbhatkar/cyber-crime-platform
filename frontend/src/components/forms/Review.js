import React from 'react';
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
  Divider,
} from '@mui/material';
import { useFormikContext } from 'formik';

const Review = () => {
  const { values } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Review Your Report
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>
          <List disablePadding>
            <ListItem>
              <ListItemText primary="Full Name" secondary={values.fullName} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Email" secondary={values.email} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Phone" secondary={values.phone} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Address" secondary={values.address} />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: 2, mb: 2 }}>
          <Typography variant="h6" gutterBottom>
            Incident Details
          </Typography>
          <List disablePadding>
            <ListItem>
              <ListItemText primary="Incident Type" secondary={values.incidentType} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary="Incident Date" secondary={values.incidentDate} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText
                primary="Financial Loss"
                secondary={values.financialLoss ? `$${values.financialLoss}` : 'None reported'}
              />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Incident Description
          </Typography>
          <Typography variant="body1" paragraph>
            {values.incidentDescription}
          </Typography>
        </Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Evidence and Additional Information
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Attached Files:
          </Typography>
          <List dense>
            {values.files.map((file, index) => (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
          {values.additionalInfo && (
            <>
              <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                Additional Information:
              </Typography>
              <Typography variant="body1">
                {values.additionalInfo}
              </Typography>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Review;
