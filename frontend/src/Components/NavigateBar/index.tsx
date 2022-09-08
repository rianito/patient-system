import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListIcon from '@mui/icons-material/List';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function SideBar() {
  
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 'auto', boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {/* <ListItem>
                <Link to={'/form'} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{
                        color:"#000",
                        borderRadius:1,
                        ":hover":{
                            backgroundColor:"#32a852",
                            color:"#fff"
                        }}}>
                        <ListItemIcon>
                            <AppRegistrationIcon/>
                        </ListItemIcon>
                        <ListItemText  primary="Cadastro"/>
                    </ListItemButton>
                </Link>
            </ListItem> */}

            <ListItem>
                <Link to={'/'} style={{ textDecoration: 'none' }}>
                    <ListItemButton sx={{
                        color:"#000",
                        ":hover":{
                            borderRadius:1,
                            backgroundColor:"#32a852",
                            color:"#fff"
                        }}}>
                        <ListItemIcon>
                            <ListIcon/>
                        </ListItemIcon>
                        <ListItemText  primary="Listagem"/>
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
