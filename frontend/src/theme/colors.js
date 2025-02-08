// Theme colors for the Cyber Crime Incident Reporting System

export const colors = {
  // Primary Colors
  primary: {
    deepBlue: '#002B5B',
    electricBlue: '#007BFF',
  },

  // Secondary Colors
  secondary: {
    grayishWhite: '#F5F5F5',
    slateGray: '#6C757D',
  },

  // Accent Colors
  accent: {
    alertRed: '#FF4D4D',
    successGreen: '#28A745',
  },

  // Complementary Colors
  complementary: {
    amber: '#FFC107',
    teal: '#17A2B8',
  },
};

// MUI Theme configuration
export const themeConfig = {
  palette: {
    primary: {
      main: colors.primary.deepBlue,
      light: colors.primary.electricBlue,
    },
    secondary: {
      main: colors.secondary.slateGray,
      light: colors.secondary.grayishWhite,
    },
    error: {
      main: colors.accent.alertRed,
    },
    success: {
      main: colors.accent.successGreen,
    },
    warning: {
      main: colors.complementary.amber,
    },
    info: {
      main: colors.complementary.teal,
    },
    background: {
      default: colors.secondary.grayishWhite,
      paper: '#FFFFFF',
    },
    text: {
      primary: colors.primary.deepBlue,
      secondary: colors.secondary.slateGray,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
        containedPrimary: {
          backgroundColor: colors.primary.electricBlue,
          '&:hover': {
            backgroundColor: colors.primary.deepBlue,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: colors.primary.deepBlue,
        },
      },
    },
  },
};
