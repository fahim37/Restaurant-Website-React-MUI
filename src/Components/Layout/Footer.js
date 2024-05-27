import React from 'react'
import { Box, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: '#1A1A19', color: 'white', p: 1 }}>
                <Box sx={{
                    "& svg": {
                        fontSize: '30px',
                        cursor: 'pointer',
                        mr: "1rem"
                    },
                    "& svg:hover": {
                        color: "#FFD700",
                        transform: "translateX(5px)",
                        transition: "all 300ms"
                    }
                }}>
                    <GitHubIcon />
                    <LinkedInIcon />
                    <FacebookIcon />
                </Box>
                <Typography
                    variant='h6'
                    sx={{
                        "@media (max-width:600px)": {
                            fontSize: '1rem'
                        }
                    }}
                >
                    All Right Reserved &copy; Fahim Ahmed
                </Typography>
            </Box >
        </>
    )
}

export default Footer