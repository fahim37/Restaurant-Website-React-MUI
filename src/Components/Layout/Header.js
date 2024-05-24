import React from 'react'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <Box>
      <AppBar component={'nav'} sx={{bgcolor:"black"}}>
        <Toolbar>
          <Typography color={"#FFD700"} variant='h6' component={"div"} sx={{flexGrow:1}}> 
            <FastfoodIcon/>
            My Restaurant
          </Typography>  
          <Box sx={{display: { xs:"none", sm:"block"} }}>
            <ul>
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
    </Box>
  )
}

export default Header