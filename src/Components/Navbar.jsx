import { Alert, Box, IconButton, List, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle } from '@mui/icons-material';

const Navbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const menuId = 'primary-search-account-menu';

  return (
    // <AppBar>
    <Box>
      <Box>
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
          borderBottom='solid #e0e0e0 1px'
        >
          <List className='flex-header'>
            <li>
              <span>مقال</span>
            </li>
            <li>
              <span>دوليات</span>
            </li>
            <li>
              <span>متابعات</span>
            </li>
            <li>
              <span>تقنية</span>
            </li>
            <li>
              <span>تجارة </span>
            </li>
            <li>
              <span>منوعات</span>
            </li>
            <li>
              <span>طب</span>
            </li>
          </List>

          <List className='flex-icon'>
            <li>
              <Link to=''>الدخول / التسجيل</Link>
            </li>
            <li>
              <IconButton
                size='large'
                edge='end'
                aria-label='account of current user'
                aria-controls={menuId}
                aria-haspopup='true'
                // onClick={handleProfileMenuOpen}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>

              <IconButton size='large' aria-label='search' color='inherit' >
                <SearchIcon className="searchIcon" />
              </IconButton>
            </li>
          </List>
        </Stack>
      </Box> 

      <Alert
        className='alert-mui'
        sx={{ background: '#234EC4', color: '#e4e4e4', marginBottom: '20px', borderRadius: '0' }}
      >
        <span>اليوم | </span>
        <Typography>
          «التحالف» يدمّر مسيّرتين بالأجواء اليمنية أُطلقت نحو المملكة
        </Typography>
        <span> من ساعاتان </span>
      </Alert>
    </Box>
    // </AppBar>
  );
};

export default Navbar;
