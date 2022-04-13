import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Mortgage calculator
            </Typography>
            <Button color="inherit" onClick={() => navigate('/bank/add')}>
              Add Bank
            </Button>
            <Button color="inherit">Calculator</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
