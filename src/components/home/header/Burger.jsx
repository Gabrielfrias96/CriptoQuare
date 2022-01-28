import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './burger.scss'

export default function Burger() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,  }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{backgroundColor:"#F2E527" , color: "#383838"}}>
        {['Iniciar Sesion'].map((text, index) => (
          <Link to="/CriptoQuare/login" style={{ textDecoration: 'none', color: "#383838"}}> 
            <ListItem button key={text}>
              <ListItemIcon>
                <LoginIcon sx={{color:"#383838"}} />
              </ListItemIcon>
              <h3>Iniciar Sesión</h3> 
            </ListItem>
          </Link>
        ))}
      </List>
      <List sx={{backgroundColor:"#383838"}}>
        <Link to="/CriptoQuare/register" style={{textDecoration:"none", color:"#383838"}}>
          <ListItem button >
            <ListItemIcon>
              <LoginIcon sx={{color:"white"}}/>
            </ListItemIcon>
            <div className="btn_getStarted">
                <p>Comenzar</p>
            </div>
          </ListItem>
        </Link>
        
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={"bottom"}>
          <MenuIcon onClick={toggleDrawer("bottom", true)}>{"top"}</MenuIcon>
          <Drawer
            anchor={"bottom"}
            open={state["bottom"]}
            onClose={toggleDrawer("bottom", false)}
          >
            {list("bottom")}
          </Drawer>
        </React.Fragment>
     
    </div>
  );
}