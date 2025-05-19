import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery,
  Chip
} from '@mui/material';
import {
  Home as HomeIcon,
  MenuBook as LearnIcon,
  AccountBalanceWallet as WalletIcon,
  MonetizationOn as EarnIcon,
  People as CommunityIcon,
  Person as ProfileIcon,
  Dashboard as DashboardIcon,
  School as SchoolIcon
} from '@mui/icons-material';
import useUserStore from '../store/useUserStore';

const DRAWER_WIDTH = 240;
const DRAWER_WIDTH_COLLAPSED = 72;

// Navigation items configuration
const navigationItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    badge: null
  },
  {
    id: 'home',
    label: 'Home',
    path: '/home',
    icon: <HomeIcon />,
    badge: null
  },
  {
    id: 'learn',
    label: 'Learn',
    path: '/learn',
    icon: <LearnIcon />,
    badge: { count: 3, color: 'primary' } // Example: 3 new courses
  },
  {
    id: 'courses',
    label: 'My Courses',
    path: '/my-courses',
    icon: <SchoolIcon />,
    badge: null
  },
  {
    id: 'wallet',
    label: 'Wallet',
    path: '/wallet',
    icon: <WalletIcon />,
    badge: null
  },
  {
    id: 'earn',
    label: 'Earn',
    path: '/earn',
    icon: <EarnIcon />,
    badge: { count: 'NEW', color: 'success' }
  },
  {
    id: 'community',
    label: 'Community',
    path: '/community',
    icon: <CommunityIcon />,
    badge: null
  }
];

const Sidebar = ({ 
  open = true, 
  onClose, 
  variant = 'permanent',
  collapsed = false,
  onCollapseToggle 
}) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { user, getUserDisplayName, getUserInitials } = useUserStore();

  const drawerWidth = collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH;

  const handleItemClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
        overflow: 'hidden'
      }}
    >
      {/* Logo/Brand Section */}
      <Box
        sx={{
          p: collapsed ? 1 : 3,
          textAlign: collapsed ? 'center' : 'left',
          minHeight: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-start'
        }}
      >
        {collapsed ? (
          <Avatar sx={{ bgcolor: 'primary.dark' }}>
            <SchoolIcon />
          </Avatar>
        ) : (
          <Typography variant="h5" fontWeight="bold" color="white">
            EduPlatform
          </Typography>
        )}
      </Box>

      {/* User Profile Section */}
      {!collapsed && (
        <Box sx={{ px: 3, pb: 2 }}>
          <Box
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 2,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Avatar
              src={user?.avatar}
              sx={{
                width: 40,
                height: 40,
                bgcolor: 'primary.dark'
              }}
            >
              {getUserInitials()}
            </Avatar>
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                noWrap
                color="white"
              >
                {getUserDisplayName()}
              </Typography>
              <Typography
                variant="caption"
                color="rgba(255, 255, 255, 0.7)"
                noWrap
              >
                {user?.email || 'Student'}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />

      {/* Navigation Items */}
      <List sx={{ flex: 1, px: collapsed ? 0.5 : 2, py: 2 }}>
        {navigationItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <ListItem key={item.id} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={handleItemClick}
                sx={{
                  borderRadius: 2,
                  mx: collapsed ? 0 : 1,
                  minHeight: 48,
                  bgcolor: isActive ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.1)'
                  },
                  '&.Mui-selected': {
                    bgcolor: 'rgba(255, 255, 255, 0.15)'
                  },
                  justifyContent: collapsed ? 'center' : 'flex-start',
                  px: collapsed ? 0 : 2
                }}
                selected={isActive}
              >
                <ListItemIcon
                  sx={{
                    color: 'white',
                    minWidth: collapsed ? 'auto' : 40,
                    justifyContent: 'center'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                
                {!collapsed && (
                  <>
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: '0.875rem',
                        fontWeight: isActive ? 600 : 400
                      }}
                    />
                    {item.badge && (
                      <Chip
                        label={item.badge.count}
                        size="small"
                        color={item.badge.color}
                        sx={{
                          height: 20,
                          fontSize: '0.75rem',
                          bgcolor: `${item.badge.color}.main`,
                          color: 'white'
                        }}
                      />
                    )}
                  </>
                )}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* Profile Link at Bottom */}
      <Box sx={{ mt: 'auto' }}>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <List sx={{ px: collapsed ? 0.5 : 2, py: 1 }}>
          <ListItem disablePadding>
            <ListItemButton
              component={RouterLink}
              to="/profile"
              onClick={handleItemClick}
              sx={{
                borderRadius: 2,
                mx: collapsed ? 0 : 1,
                minHeight: 48,
                bgcolor: location.pathname === '/profile' 
                  ? 'rgba(255, 255, 255, 0.15)' 
                  : 'transparent',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                },
                justifyContent: collapsed ? 'center' : 'flex-start',
                px: collapsed ? 0 : 2
              }}
            >
              <ListItemIcon
                sx={{
                  color: 'white',
                  minWidth: collapsed ? 'auto' : 40,
                  justifyContent: 'center'
                }}
              >
                <ProfileIcon />
              </ListItemIcon>
              {!collapsed && (
                <ListItemText
                  primary="Profile"
                  primaryTypographyProps={{
                    fontSize: '0.875rem',
                    fontWeight: location.pathname === '/profile' ? 600 : 400
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <Drawer
      variant={variant}
      open={open}
      onClose={onClose}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          border: 'none',
          bgcolor: 'transparent',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};

export default Sidebar;