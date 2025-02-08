import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

const PersonalInfo = () => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="fullName"
          name="fullName"
          label="Full Name"
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.fullName && Boolean(errors.fullName)}
          helperText={touched.fullName && errors.fullName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="phone"
          name="phone"
          label="Phone Number"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phone && Boolean(errors.phone)}
          helperText={touched.phone && errors.phone}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="address"
          name="address"
          label="Address"
          multiline
          rows={3}
          value={values.address}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.address && Boolean(errors.address)}
          helperText={touched.address && errors.address}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
