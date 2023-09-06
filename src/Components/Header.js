import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Sidebar from '../Components/Sidebar';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import {React,useState,useEffect} from 'react';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
export default function PrimarySearchAppBar() {
  const[cartProduct,setCartProduct] = useState([])
  let carItemno = cartProduct.length 
    const getData = () => {
      axios.get('https://dummyjson.com/carts/1')
          .then(function (response) {
            setCartProduct(response.data.products)
          })
          .catch(function (error) {
              console.log(error);
          })
    }
    useEffect(() =>{
      getData();
    },[])
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='p-4'>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Sidebar />
          </IconButton>
          <Link exact to="/">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
          </Link>
          <Search className='w-full'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Link exact to="/wishlist/1">
              <IconButton size="large" color="inherit">
                <Badge badgeContent={carItemno} color="error">
                  <FavoriteBorderIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link exact to="/cart/1">
              <IconButton
                size="large"
                color="inherit"
              >
                <Badge badgeContent={carItemno} color="error">
                  <AddShoppingCartIcon />
                </Badge>
              </IconButton>
              <Link exact to="/login">
                <Button color="inherit" className='text-xs'>Login</Button>
                <LoginIcon className='text-xs'/>
              </Link>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}