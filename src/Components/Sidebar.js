import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function TemporaryDrawer() {
    const [category,setCategory] = useState([])
    useEffect(() => {
      axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setCategory(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
    },[]);

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='mt-12'
    >
      <List>
          <ListItem disablePadding>
            <Link exact to='/'>
                <ListItemButton>
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home"/>
                </ListItemButton>   
            </Link>
          </ListItem>
        </List>
        <Divider />
        <List>
        <h4 className='ms-2 ps-3 pt-3 text-xl font-bold '>Category :</h4>
          {
            category.map((el,index) =>{
                return(
                    <>  
                        <Link exact to ={'/categoryProduct/'+ el}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                <ListItemText className='cstm-fontSize color-8080 ps-3'>{el}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </>
                )
            })
          }
      </List>
      <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PowerSettingsNewIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out"/>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className='text-white mt-minus'/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
