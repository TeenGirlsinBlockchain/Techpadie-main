import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Chip, 
  Avatar, 
  Typography,
  Box,
  Rating,
  IconButton
} from '@mui/material';
import { 
  People as PeopleIcon,
  PhoneIphone as MobileIcon,
  Computer as DesktopIcon,
  FavoriteBorder as FavoriteIcon,
  Share as ShareIcon
} from '@mui/icons-material';

const CourseCard = ({ 
  course, 
  onFavorite, 
  onShare, 
  isFavorited = false,
  compact = false 
}) => {
  const DeviceIcon = course.deviceType === 'mobile' ? MobileIcon : DesktopIcon;

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    onFavorite?.(course.id);
  };

  const handleShareClick = (e) => {
    e.preventDefault();
    onShare?.(course);
  };

  if (compact) {
    return (
      <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
        <Card 
          sx={{ 
            display: 'flex',
            height: 120,
            '&:hover': { 
              boxShadow: 3,
              transform: 'translateY(-2px)',
              transition: 'all 0.2s ease-in-out'
            }
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 120, flexShrink: 0 }}
            image={course.image}
            alt={course.title}
          />
          <CardContent sx={{ flex: 1, p: 2 }}>
            <Box display="flex" justifyContent="space-between" alignItems="start">
              <Typography variant="subtitle2" component="h3" gutterBottom>
                {course.title}
              </Typography>
              <Chip 
                label={course.level} 
                size="small" 
                color="primary" 
                variant="outlined"
              />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {course.subtitle}
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between">
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar 
                  src={course.instructor.avatar} 
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="caption" color="primary">
                  {course.instructor.name}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Rating value={course.rating} size="small" readOnly />
                <Typography variant="caption">
                  ({course.students})
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          '&:hover': { 
            boxShadow: 4,
            transform: 'translateY(-4px)',
            transition: 'all 0.3s ease-in-out'
          }
        }}
      >
        {/* Course Image */}
        <Box sx={{ position: 'relative' }}>
          <CardMedia
            component="img"
            height="160"
            image={course.image}
            alt={course.title}
          />
          
          {/* Device Type Badge */}
          {course.deviceType && (
            <Chip
              icon={<DeviceIcon />}
              size="small"
              sx={{ 
                position: 'absolute', 
                top: 8, 
                right: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
              }}
            />
          )}

          {/* Action Buttons */}
          <Box sx={{ 
            position: 'absolute', 
            top: 8, 
            left: 8,
            display: 'flex',
            gap: 1
          }}>
            <IconButton
              size="small"
              onClick={handleFavoriteClick}
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
              }}
            >
              <FavoriteIcon 
                color={isFavorited ? 'error' : 'action'}
                fontSize="small"
              />
            </IconButton>
            <IconButton
              size="small"
              onClick={handleShareClick}
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 1)' }
              }}
            >
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Course Content */}
        <CardContent sx={{ flexGrow: 1, p: 2 }}>
          {/* Level Badge */}
          <Box mb={1}>
            <Chip 
              label={course.level} 
              size="small" 
              color="primary"
            />
          </Box>

          {/* Course Stats */}
          <Box display="flex" alignItems="center" gap={2} mb={1}>
            <Box display="flex" alignItems="center" gap={0.5}>
              <PeopleIcon fontSize="small" color="action" />
              <Typography variant="body2" color="text.secondary">
                {course.students}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={0.5}>
              <Rating 
                value={course.rating} 
                size="small" 
                readOnly 
                precision={0.1}
              />
              <Typography variant="body2" color="text.secondary">
                {course.rating}
              </Typography>
            </Box>
          </Box>

          {/* Title and Subtitle */}
          <Typography 
            variant="subtitle1" 
            component="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              display: '-webkit-box',
              '-webkit-line-clamp': 2,
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden'
            }}
          >
            {course.title}
          </Typography>

          <Typography 
            variant="body2" 
            color="text.secondary" 
            gutterBottom
            sx={{ 
              display: '-webkit-box',
              '-webkit-line-clamp': 2,
              '-webkit-box-orient': 'vertical',
              overflow: 'hidden'
            }}
          >
            {course.subtitle}
          </Typography>

          {/* Price (if available) */}
          {course.price && (
            <Typography 
              variant="h6" 
              color="primary" 
              sx={{ fontWeight: 600, mb: 1 }}
            >
              ${course.price}
            </Typography>
          )}
        </CardContent>

        {/* Instructor Info */}
        <Box sx={{ p: 2, pt: 0 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar 
              src={course.instructor.avatar} 
              sx={{ width: 32, height: 32 }}
            />
            <Typography 
              variant="body2" 
              color="primary"
              sx={{ fontWeight: 500 }}
            >
              {course.instructor.name}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default CourseCard;