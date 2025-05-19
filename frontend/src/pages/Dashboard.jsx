import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Container,
  Paper,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { 
  School as SchoolIcon,
  Timeline as TimelineIcon,
  EmojiEvents as AchievementIcon
} from '@mui/icons-material';
import Sidebar from '../components/layout/Sidebar';
import CourseGrid from '../features/courses/components/CourseGrid';
import useUserStore from '../store/useUserStore';
import { useCourses } from '../hooks/useCourses';

const Dashboard = () => {
  const { user, getUserDisplayName, getUserInitials } = useUserStore();
  const { stats } = useCourses();

  // You can fetch user-specific data here
  const userStats = {
    enrolledCourses: 5,
    completedCourses: 3,
    achievements: 12,
    studyHours: 48
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'grey.50' }}>
      <Sidebar />
      
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="xl">
          {/* Welcome Header */}
          <Box 
            display="flex" 
            justifyContent="space-between" 
            alignItems="center" 
            mb={4}
          >
            <Box>
              <Typography variant="h4" fontWeight="bold" color="text.primary">
                Welcome back, {getUserDisplayName()}!
              </Typography>
              <Typography variant="body1" color="text.secondary" mt={1}>
                Top courses you may like to enroll in today!
              </Typography>
            </Box>
            
            <Avatar
              src={user?.avatar}
              sx={{ 
                width: 64, 
                height: 64, 
                bgcolor: 'primary.main',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}
            >
              {getUserInitials()}
            </Avatar>
          </Box>

          {/* Stats Cards */}
          <Grid container spacing={3} mb={4}>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Enrolled Courses"
                value={userStats.enrolledCourses}
                icon={<SchoolIcon />}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Completed"
                value={userStats.completedCourses}
                icon={<AchievementIcon />}
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Study Hours"
                value={userStats.studyHours}
                icon={<TimelineIcon />}
                color="info"
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <StatsCard
                title="Total Courses"
                value={stats.total}
                icon={<SchoolIcon />}
                color="warning"
              />
            </Grid>
          </Grid>

          {/* Course Recommendations */}
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <CourseGrid
              title="Recommended Courses"
              filters={{ limit: 6 }}
              showPagination={false}
              showViewToggle={false}
            />
          </Paper>

          {/* Continue Learning Section */}
          <Box mt={4}>
            <Paper sx={{ p: 3, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Continue Learning
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={3}>
                Pick up where you left off
              </Typography>
              
              {/* You can create a separate component for in-progress courses */}
              <Typography variant="body2" color="text.secondary">
                No courses in progress
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

// Reusable Stats Card Component
const StatsCard = ({ title, value, icon, color = 'primary' }) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3
        }
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Typography variant="h4" fontWeight="bold" color={`${color}.main`}>
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
          <Box 
            sx={{ 
              p: 1.5, 
              borderRadius: 2, 
              bgcolor: `${color}.light`,
              color: `${color}.main`
            }}
          >
            {icon}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Dashboard;