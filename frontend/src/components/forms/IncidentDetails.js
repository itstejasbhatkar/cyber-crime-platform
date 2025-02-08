import React from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
} from '@mui/material';
import { useFormikContext } from 'formik';

const incidentTypes = [
  'Phishing Attack',
  'Identity Theft',
  'Online Fraud',
  'Cyberstalking',
  'Data Breach',
  'Ransomware Attack',
  'Social Media Account Hack',
  'Email Compromise',
  'Cryptocurrency Scam',
  'Other',
];

const IncidentDetails = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth required error={touched.incidentType && Boolean(errors.incidentType)}>
          <InputLabel id="incident-type-label">Incident Type</InputLabel>
          <Select
            labelId="incident-type-label"
            id="incidentType"
            name="incidentType"
            value={values.incidentType}
            label="Incident Type"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {incidentTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="incidentDate"
          name="incidentDate"
          label="Incident Date"
          type="date"
          value={values.incidentDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.incidentDate && Boolean(errors.incidentDate)}
          helperText={touched.incidentDate && errors.incidentDate}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="incidentDescription"
          name="incidentDescription"
          label="Incident Description"
          multiline
          rows={4}
          value={values.incidentDescription}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.incidentDescription && Boolean(errors.incidentDescription)}
          helperText={
            touched.incidentDescription && errors.incidentDescription
              ? errors.incidentDescription
              : 'Please provide as much detail as possible about the incident'
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="financialLoss"
          name="financialLoss"
          label="Financial Loss (if any)"
          type="number"
          value={values.financialLoss}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.financialLoss && Boolean(errors.financialLoss)}
          helperText={touched.financialLoss && errors.financialLoss}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          id="suspectInfo"
          name="suspectInfo"
          label="Suspect Information (if known)"
          value={values.suspectInfo}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText="Any information about the perpetrator"
        />
      </Grid>
    </Grid>
  );
};

export default IncidentDetails;
