import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import "../../styles/HeaderStyle.css"
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //Handling menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }
  //Menu Drawer
  const drawerContent = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography color={"#FFD700"} variant='h6' component={"div"} sx={{ flexGrow: 1, my: 2 }}>
        <FastfoodIcon />
        Restaurant
      </Typography>
      <Divider />
      <ul className='navigation-mobile'>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/menu'}>Menu</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
      </ul>
    </Box>
  )
  return (
    <Box>
      <AppBar component={'nav'} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton color='inherit'
            aria-label='Drawer open'
            edge='start'
            sx={{
              mr: 2,
              display: { sm: 'none' }
            }}
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography color={"#FFD700"} variant='h6' component={"div"} sx={{ flexGrow: 1 }}>
            <FastfoodIcon />
            Restaurant
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ul className='navigation-menu'>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/menu'}>Menu</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={'nav'}>
        <Drawer variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: { xs: 'block', sm: 'none' }, "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "250px"
            }
          }}>
          {drawerContent}
        </Drawer>
      </Box>
      <Box sx={{ p: 1 }}>
        <Toolbar />
      </Box>

    </Box>
  )
}

export default Header