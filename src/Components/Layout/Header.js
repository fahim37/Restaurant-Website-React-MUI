import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, Drawer, Divider } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom'
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
          <NavLink activeClassName='active' to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/menu'}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
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
                <NavLink activeClassName='active' to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/menu'}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={'/about'}>About</NavLink>
              </li>
              <li>
                <NavLink to={'/contact'}>Contact</NavLink>
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
      <Toolbar />
    </Box>
  )
}

export default Header