import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@mui/material';
import { useFormikContext } from 'formik';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';

const Evidence = () => {
  const { values, setFieldValue } = useFormikContext();
  const [fileList, setFileList] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFileList((prevFiles) => [...prevFiles, ...files]);
    setFieldValue('files', [...values.files, ...files]);
  };

  const handleFileDelete = (index) => {
    const newFileList = fileList.filter((_, i) => i !== index);
    setFileList(newFileList);
    setFieldValue('files', newFileList);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Upload Evidence
        </Typography>
        <Typography variant="body2" color="textSecondary" paragraph>
          Please upload any relevant evidence such as screenshots, emails, or documents.
          Supported file types: Images (PNG, JPG), Documents (PDF, DOC), and Text files.
        </Typography>
      </Grid>
      
      <Grid item xs={12}>
        <Box
          sx={{
            border: '2px dashed',
            borderColor: 'primary.main',
            borderRadius: 2,
            p: 3,
            textAlign: 'center',
            mb: 2,
          }}
        >
          <input
            accept="image/*,.pdf,.doc,.docx,.txt"
            style={{ display: 'none' }}
            id="evidence-file-upload"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="evidence-file-upload">
            <Button
              variant="contained"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload Files
            </Button>
          </label>
        </Box>
      </Grid>

      <Grid item xs={12}>
        {fileList.length > 0 && (
          <List>
            {fileList.map((file, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={file.name}
                  secondary={`${(file.size / 1024 / 1024).toFixed(2)} MB`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleFileDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          id="additionalInfo"
          name="additionalInfo"
          label="Additional Information"
          multiline
          rows={4}
          value={values.additionalInfo}
          onChange={(e) => setFieldValue('additionalInfo', e.target.value)}
          helperText="Please provide any additional context or information about the evidence"
        />
      </Grid>
    </Grid>
  );
};

export default Evidence;
