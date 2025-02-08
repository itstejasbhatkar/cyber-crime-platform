import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const submitIncidentReport = async (reportData, files) => {
  try {
    console.log('Starting report submission...'); // Debug log
    
    // Handle file uploads
    const fileUrls = [];
    if (files && files.length > 0) {
      console.log(`Processing ${files.length} files...`); // Debug log
      for (const file of files) {
        try {
          // Convert file to base64 for storage
          const base64File = await convertFileToBase64(file);
          fileUrls.push({
            name: file.name,
            content: base64File
          });
        } catch (fileError) {
          console.error('Error processing file:', file.name, fileError);
          throw new Error(`Failed to process file ${file.name}: ${fileError.message}`);
        }
      }
    }

    // Create the report
    const report = {
      ...reportData,
      fileUrls,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    console.log('Sending report to server...'); // Debug log
    
    // Submit to JSON Server
    const response = await axios.post(`${API_URL}/incident_reports`, report);
    
    console.log('Report submitted successfully:', response.data); // Debug log

    return {
      success: true,
      reportId: response.data.id,
      message: 'Report submitted successfully'
    };

  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
      config: {
        url: error.config?.url,
        method: error.config?.method,
      }
    });

    // Return a more detailed error message
    return {
      success: false,
      error: `Submission failed: ${error.response?.data || error.message}. 
              Please make sure the JSON Server is running on port 3001.`
    };
  }
};

export const getReportStatus = async (reportId) => {
  try {
    const response = await axios.get(`${API_URL}/incident_reports/${reportId}`);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error getting report:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export const getAllReports = async () => {
  try {
    const response = await axios.get(`${API_URL}/incident_reports`);
    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    console.error('Error getting reports:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Helper function to convert File to base64
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};
