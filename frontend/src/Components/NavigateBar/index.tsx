import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from 'react-router-dom';

export default function SideBar() {
  
  return (
    <Box >
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: '100%',height:'auto',boxShadow:2, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{display:'flex',width:180}}>

            <ListItem>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{
                        color:"#000",
                        ":hover":{
                            borderRadius:1,
                            backgroundColor:"#32a852",
                            color:"#fff",
                        }}}>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText  primary="Listagem"/>
                    </ListItemButton>
                </Link>
            </ListItem>

            <ListItem>
                <Link to={'/about'} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{
                        color:"#000",
                        borderRadius:1,
                        ":hover":{
                            backgroundColor:"#32a852",
                            color:"#fff"
                        }}}>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText  primary="Sobre"/>
                    </ListItemButton>
                </Link>
            </ListItem>

          </List>
        </Box>
      </Drawer>
      <Box sx={{
        flexGrow:1 , p:3,
      }}>

      </Box>
    </Box>
  );
}
