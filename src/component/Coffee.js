import React from 'react'
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

export default function Coffee() {
  return (
    <>
        <Typography variant="h4" component="h4">
        Coffee
        </Typography>

        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="Boil some water" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton >
                <ListItemText primary="Brew the coffee grounds" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="Pour coffee in the cup" />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="Add sugar and milk" />
                </ListItemButton>
            </ListItem>
            </List>
        </Box>
    </>
    
  )
}
