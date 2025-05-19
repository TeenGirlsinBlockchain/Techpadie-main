import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Box,
  Badge,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import useUserStore from '../store/useUserStore';

const TopBar = ({ onSidebarToggle, sidebarOpen }) => {
  const { user, getUserDisplayName, getUserInitials, clearUser } = useUserStore();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    clearUser();
    handleMenuClose();
    // Redirect to login page
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: theme => theme.zIndex.drawer + 1,
        bgcolor: 'white',
        color: 'text.primary',
        boxShadow: 1
      }}
    >
      <Toolbar>
        {/* Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="toggle sidebar"
          onClick={onSidebarToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo/Title */}
        <Typography 
          variant="h6" 
          noWrap 
          component="div"
          sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}
        >
          EduPlatform
        </Typography>

        {/* Actions */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Search Icon */}
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>

          {/* Notifications */}
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* User Menu */}
          <IconButton
            onClick={handleMenuOpen}
            color="inherit"
          >
            <Avatar
              src={user?.avatar}
              sx={{ 
                width: 32, 
                height: 32,
                bgcolor: 'primary.main'
              }}
            >
              {getUserInitials()}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleMenuClose}>
              <AccountIcon sx={{ mr: 2 }} />
              Profile
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              Settings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;