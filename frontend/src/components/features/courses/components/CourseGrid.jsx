import React, { useState } from 'react';
import {
  Grid,
  Box,
  Typography,
  Pagination,
  Alert,
  Skeleton,
  Fab,
  Zoom
} from '@mui/material';
import { ViewModule, ViewList } from '@mui/icons-material';
import CourseCard from './CourseCard';
import { useCourses } from '../../../hooks/useCourses';

const CourseGrid = ({ 
  filters = {},
  itemsPerPage = 9,
  showPagination = true,
  title,
  showViewToggle = true
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [favorites, setFavorites] = useState(new Set());

  const { courses, loading, error, refetch } = useCourses(filters);

  // Pagination logic
  const totalPages = Math.ceil(courses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFavorite = (courseId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(courseId)) {
        newFavorites.delete(courseId);
      } else {
        newFavorites.add(courseId);
      }
      return newFavorites;
    });
  };

  const handleShare = (course) => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.subtitle,
        url: window.location.origin + `/course/${course.id}`
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `${course.title} - ${window.location.origin}/course/${course.id}`
      );
      // You could add a toast notification here
    }
  };

  const toggleViewMode = () => {
    setViewMode(prev => prev === 'grid' ? 'list' : 'grid');
  };

  if (error) {
    return (
      <Alert 
        severity="error" 
        action={
          <button onClick={refetch}>
            Retry
          </button>
        }
      >
        {error}
      </Alert>
    );
  }

  return (
    <Box>
      {/* Header */}
      {(title || showViewToggle) && (
        <Box 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center" 
          mb={3}
        >
          {title && (
            <Typography variant="h4" component="h2" gutterBottom>
              {title}
            </Typography>
          )}
          
          {showViewToggle && (
            <Box display="flex" gap={1}>
              <Fab
                size="small"
                color={viewMode === 'grid' ? 'primary' : 'default'}
                onClick={toggleViewMode}
                aria-label="Grid view"
              >
                <ViewModule />
              </Fab>
              <Fab
                size="small"
                color={viewMode === 'list' ? 'primary' : 'default'}
                onClick={toggleViewMode}
                aria-label="List view"
              >
                <ViewList />
              </Fab>
            </Box>
          )}
        </Box>
      )}

      {/* Course Grid/List */}
      {loading ? (
        <CourseGridSkeleton viewMode={viewMode} />
      ) : courses.length === 0 ? (
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          py={8}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No courses found
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Try adjusting your filters or search criteria
          </Typography>
        </Box>
      ) : (
        <>
          {viewMode === 'grid' ? (
            <Grid container spacing={3}>
              {paginatedCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <CourseCard
                    course={course}
                    onFavorite={handleFavorite}
                    onShare={handleShare}
                    isFavorited={favorites.has(course.id)}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box display="flex" flexDirection="column" gap={2}>
              {paginatedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onFavorite={handleFavorite}
                  onShare={handleShare}
                  isFavorited={favorites.has(course.id)}
                  compact
                />
              ))}
            </Box>
          )}

          {/* Pagination */}
          {showPagination && totalPages > 1 && (
            <Box display="flex" justifyContent="center" mt={4}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

// Loading skeleton component
const CourseGridSkeleton = ({ viewMode }) => {
  const skeletonCount = viewMode === 'grid' ? 6 : 3;
  
  return (
    <>
      {viewMode === 'grid' ? (
        <Grid container spacing={3}>
          {Array(skeletonCount).fill(0).map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box>
                <Skeleton variant="rectangular" height={160} />
                <Box p={2}>
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="60%" />
                  <Box display="flex" alignItems="center" gap={1} mt={1}>
                    <Skeleton variant="circular" width={32} height={32} />
                    <Skeleton variant="text" width="40%" />
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          {Array(skeletonCount).fill(0).map((_, index) => (
            <Box key={index} display="flex" height={120}>
              <Skeleton variant="rectangular" width={120} height={120} />
              <Box flex={1} p={2}>
                <Skeleton variant="text" />
                <Skeleton variant="text" width="60%" />
                <Skeleton variant="text" width="40%" />
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default CourseGrid;