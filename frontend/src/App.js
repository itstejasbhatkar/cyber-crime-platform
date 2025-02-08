import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';

// Pages
import Home from './pages/Home';
import ReportIncident from './pages/ReportIncident';
import Awareness from './pages/Awareness';
import LearningHub from './pages/LearningHub';
import VictimSupport from './pages/VictimSupport';
import Forum from './pages/Forum';
import Admin from './pages/Admin';
import TrackComplaint from './pages/TrackComplaint';
import AdminLogin from './components/auth/AdminLogin';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PrivateRoute from './components/auth/PrivateRoute';

// Context
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/report" element={<ReportIncident />} />
                <Route path="/awareness" element={<Awareness />} />
                <Route path="/learning" element={<LearningHub />} />
                <Route path="/support" element={<VictimSupport />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/track" element={<TrackComplaint />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route
                  path="/admin"
                  element={
                    <PrivateRoute>
                      <Admin />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
