import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Chip,
  TextField,
  Grid,
  Card,
  CardContent,
  IconButton,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  LinearProgress,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
  Security,
  Warning,
  CheckCircle,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Admin = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
    fullName: '',
    phone: '',
  });

  // Mock data for dashboard
  const attackData = [
    { name: 'Jan', attacks: 65 },
    { name: 'Feb', attacks: 59 },
    { name: 'Mar', attacks: 80 },
    { name: 'Apr', attacks: 81 },
    { name: 'May', attacks: 56 },
    { name: 'Jun', attacks: 55 },
  ];

  const caseStatusData = [
    { name: 'Active', value: 35 },
    { name: 'Resolved', value: 45 },
    { name: 'Pending', value: 20 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 0) {
        const response = await fetch('/api/reports');
        const data = await response.json();
        setReports(data);
      } else if (activeTab === 1) {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    if (item) {
      setFormData({
        username: item.username || '',
        email: item.email || '',
        role: item.role || 'user',
        fullName: item.fullName || '',
        phone: item.phone || '',
      });
    } else {
      setFormData({
        username: '',
        email: '',
        password: '',
        role: 'user',
        fullName: '',
        phone: '',
      });
    }
    setOpenDialog(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        const endpoint = activeTab === 0 ? `/api/reports/${id}` : `/api/users/${id}`;
        await fetch(endpoint, { method: 'DELETE' });
        fetchData();
      } catch (error) {
        console.error('Error deleting item:', error);
      }
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = activeTab === 0 ? '/api/reports' : '/api/users';
      const method = selectedItem ? 'PUT' : 'POST';
      const url = selectedItem ? `${endpoint}/${selectedItem.id}` : endpoint;

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to save');
      }

      setOpenDialog(false);
      fetchData();
    } catch (error) {
      console.error('Error saving:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Welcome, {user?.username}
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            <Tab label="Dashboard" />
            <Tab label="User Management" />
            <Tab label="Reports" />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Grid container spacing={3}>
            {/* Statistics Cards */}
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Active Cases
                  </Typography>
                  <Typography variant="h3">
                    35
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={70} 
                    sx={{ mt: 2 }}
                    color="warning"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Resolved Cases
                  </Typography>
                  <Typography variant="h3">
                    45
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={90} 
                    sx={{ mt: 2 }}
                    color="success"
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Pending Cases
                  </Typography>
                  <Typography variant="h3">
                    20
                  </Typography>
                  <LinearProgress 
                    variant="determinate" 
                    value={40} 
                    sx={{ mt: 2 }}
                    color="primary"
                  />
                </CardContent>
              </Card>
            </Grid>

            {/* Attack Trend Chart */}
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Attack Trends
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={attackData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="attacks" 
                      stroke="#8884d8" 
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Case Status Distribution */}
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Case Status Distribution
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={caseStatusData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {caseStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </Paper>
            </Grid>
          </Grid>
        )}

        {activeTab === 1 && (
          <>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleEdit(null)}
              >
                Add User
              </Button>
              <Button
                startIcon={<RefreshIcon />}
                onClick={fetchData}
              >
                Refresh
              </Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.role}
                          color={user.role === 'admin' ? 'primary' : 'default'}
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={user.status}
                          color={user.status === 'active' ? 'success' : 'error'}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEdit(user)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(user.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}

        {activeTab === 2 && (
          <>
            <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleEdit(null)}
              >
                Add Report
              </Button>
              <Button
                startIcon={<RefreshIcon />}
                onClick={fetchData}
              >
                Refresh
              </Button>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell>{report.id}</TableCell>
                      <TableCell>{report.title}</TableCell>
                      <TableCell>
                        <Chip
                          label={report.status}
                          color={report.status === 'resolved' ? 'success' : 'warning'}
                        />
                      </TableCell>
                      <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => handleEdit(report)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(report.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Paper>

      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <form onSubmit={handleFormSubmit}>
          <DialogTitle>
            {selectedItem ? 'Edit Item' : `Add New ${activeTab === 1 ? 'User' : 'Report'}`}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ mt: 2 }}>
              {activeTab === 1 ? (
                // User Form
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      name="username"
                      value={formData.username}
                      onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </Grid>
                  {!selectedItem && (
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                    </Grid>
                  )}
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Role</InputLabel>
                      <Select
                        value={formData.role}
                        label="Role"
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      >
                        <MenuItem value="user">User</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </Grid>
                </Grid>
              ) : (
                // Report Form
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Title"
                      name="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Status</InputLabel>
                      <Select
                        value={formData.status}
                        label="Status"
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      >
                        <MenuItem value="pending">Pending</MenuItem>
                        <MenuItem value="in_progress">In Progress</MenuItem>
                        <MenuItem value="resolved">Resolved</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </Grid>
                </Grid>
              )}
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default Admin;
