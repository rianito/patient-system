import {
  Box,
  Container,
  ListItemIcon,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function () {
  return (
    <>
      <Box sx={{
        display: 'flex',
        width: '500px',
        margin: '0 auto',
        marginTop: '50px',
        boxShadow: 2,
      }}>
        <Container sx={{
        display: 'grid',
        justifyContent: 'center',
        }}>
            <Typography variant="h4" align="center" sx={{marginBottom: '20px',marginTop:'20px'}}>Quem Somos</Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="João" secondary="202102074444"/>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Rian" secondary="202103152031"/>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
              <ListItemText primary="Caique" secondary="202102073359"/>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
              <ListItemText primary="Lucas" secondary=""/>
            </ListItem>

          </List>
        </Container>
      </Box>
    </>
  );
}
