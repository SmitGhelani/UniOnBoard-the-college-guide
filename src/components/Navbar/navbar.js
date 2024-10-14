import React from 'react'
import {AppBar, Modal,Card} from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter, Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import './navbar.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 12,
  p: 4,
};

const Navbar = (props) => {

  const navigate = useNavigate()

  const [openModal, setOpenModal] = React.useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [token, setToken] = useState("")

  useEffect(() => {
    setInterval(()=>{
      axios.get('https://unionboard-backend.smitghelani.xyz/cookiestatus')
      .then( response => {
          console.log(response);
          setToken(response.data.token)
      })
      .catch(error => {
        console.log("No cookie found.");
      });
    },2000)
  },[])

  const logoutCall = async () => {
    try {
      const res = await fetch("https://unionboard-backend.smitghelani.xyz/logout", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": 'application/json',
        },
        credentials: "include"
      })

      if(res){
        navigate('/',{state:{type: "logOut"}});
        
      }
      window.location.reload()
    }
    catch (err) {
      console.log(err)
    }

  }
  

  return (
    <>
    <Box position='statics'>
    <AppBar position="fixed" className='appbar-main'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2,cursor: 'pointer', display: { xs: 'none', md: 'flex' } }}
            onClick={() => navigate('/')}
          >
            UniOnBoard
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem >
                <Link to="/"> Home</Link>
              </MenuItem>
              
              <MenuItem >
                <Link to="/coaching"> Coachings</Link>
              </MenuItem>
              <MenuItem >
                <Link to="/courses" onClick={() => setOpenModal(true)}> Courses</Link>
              </MenuItem>
              <MenuItem >
                <Link to="/explore"> Explore </Link>
              </MenuItem>
              <MenuItem >
                <Link to="/getAllBlog" onClick={() => setOpenModal(true)}> Blogs </Link>
              </MenuItem>
              <MenuItem >
                <Link to="/contactus"> Contact Us </Link>
              </MenuItem>
             
              <MenuItem >
                <Link to="/Dashboard"> Dashboard </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,cursor: 'pointer', display: { xs: 'flex', md: 'none' } }}
          >
             UniOnBoard
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <div className="nav-item">
                <Link to="/" className='contact' style={{color: "white"}}>
                  Home
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Coaching" className='contact' style={{color: "white"}}>
                  Coachings
                </Link>
              </div>
              <div className="nav-item">
                <Link to={token ? "/courses" : "/"} onClick={() => setOpenModal(token ? false : true)} className='contact' style={{color: "white"}}>
                  Courses
                </Link>
              </div>
              <div className="nav-item" >
                <Link to={token ? "/explore" : "/"} onClick={() => setOpenModal(token ? false : true)} className='contact' style={{color: "white"}}>
                  Explore
                </Link>
              </div>
              <div className="nav-item" >
                <Link to={token ? "/getAllBlog" : "/"} onClick={() => setOpenModal(token ? false : true)} className='contact' style={{color: "white"}}>
                  Blogs
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Contactus" className='contact' style={{color: "white"}}>
                  Contact Us
                </Link>
              </div>
              <div className="nav-item">
                <Link to="/Dashboard" className='contact' style={{color: "white"}}>
                  Dashboard
                </Link>
              </div>
          </Box>

          <Box sx={{ flexGrow: 0,display: token ? "flex" : "none" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to="/userdashboard" className='Avatar-menu'>
                  My Profile
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link to='/' onClick={logoutCall} className='Avatar-menu'>
                  Log Out
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* <Box sx={{ flexGrow: 0, display: localStorage.getItem('token') ? "flex" : "none"}}>
            <div className="nav-item">
              <Link to="/login" className='contact' style={{color: "white"}}>
                Log Out
              </Link>
            </div>
          </Box> */}
          <Box sx={{ flexGrow: 0,display: token ? "none" : "flex" }}>
            <div className="nav-item">
              <Link to="/register" className='contact' style={{color: "white", backgroundColor: "#78bddd", textTransform:"capitalize"}}>
                  SignUp
              </Link>
              <Link to="/login" className='contact' style={{color: "white", backgroundColor: "#78bddd", textTransform:"capitalize"}}>
                  Login
              </Link>
            </div>
          </Box>
          <Modal
            open={openModal}
            onClose={() => {setOpenModal(false);navigate('/')}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
                <h6>Please Sign In To Access This Page</h6>
                <Box style={{display:'flex',justifyContent: 'space-between',marginTop:'20px'}}>
                  <Button size="small" onClick={() => {setOpenModal(false);navigate('/')}}>Back</Button>
                  <Button size="small" onClick={() =>  {setOpenModal(false);navigate('/login')}}>Sign in</Button>
                </Box>
            </Box>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar />
    </Box>
    <Outlet />
    <Footer/>
    </>
  );
};
export default Navbar;