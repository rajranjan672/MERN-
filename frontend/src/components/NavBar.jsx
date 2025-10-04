import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import DropdownMenu from './DropdownMenu';
import "./NavBar.css"

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isDropdownVisible, setDropdownVisible] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false); 
const navigate = useNavigate()

React.useEffect(() => {
  axios
    .get("http://localhost:3001/api/user/check-login", { withCredentials: true })
    .then((response) => {
      setIsLoggedIn(response.data.loggedIn); // Backend should return `loggedIn: true/false`
    })
    .catch(() => {
      setIsLoggedIn(false);
    });
}, []);

const Logout = () => {
  axios.get("http://localhost:3001/api/user/logout",  {withCredentials : true}).then((resp, rej) => {
    if(resp) {
      navigate("/")
}
  })}


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };



  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor:"#c298d4" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Link to="/dta">NavBar</Link>
      </Typography>
      <Divider />
      <List>
        
          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  ><NavLink to="/home" className="nav-item">Home</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>

          

          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  ><NavLink to="/about" className="nav-item">About</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>


          <ListItem  disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText  ><NavLink to="/dta" className="nav-item">dummy</NavLink></ListItemText>
            </ListItemButton>
          </ListItem>
        
      </List>
      <li className="nav-item dropdown"> <a className="nav-link" href="#">  Hover me  </a>
 		    <ul className="dropdown-menu">
 			  <li><a className="dropdown-item" href="#"> Submenu item 1</a></li>
 			  <li><a className="dropdown-item" href="#"> Submenu item 2 </a></li>
 			  <li><a className="dropdown-item" href="#"> Submenu item 3 </a></li>
 		    </ul>
 		</li>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            onClick={() => navigate("/dta")}
            role='button'
          >
            NavBar
          </Typography>

         
         
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button><NavLink to="/project" className="nav-item">Home</NavLink></Button>

              <Button><NavLink to="/login" className="nav-item">Login</NavLink></Button>


 		    {/*
 		{/* </li> */}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;


// // import React from 'react'
// // import {NavLink} from "react-router-dom"
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Menu } from '@mui/icons-material'
// import MenuIcon from '@mui/icons-material/Menu';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import Button from 'react-bootstrap/Button';
// import "./router.css"

// const Navbar = ({setAuth,auth, data}) => {
//   const [isNav, setIsNav] = useState(false)
//   const [showNavbar, setShowNavbar] = useState(false)
// //   const [data, setData] = useState([])
//   const navigate = useNavigate()
 

//   const logout = async(e) => {
      
//     e.preventDefault()
//      axios.get("http://localhost:3001/api/user/logout", {withCredentials : true}).then((resp, rej) => {
//     // navigate("/login")
//     // setAuth(false)
   
//         if(!resp) {
//         alert('please enter valid email or password')
//         }

//      }).then(() => {
//       // {props.user()}
//       // navigate("/login")
//      }) 

// }


// const handleShowNavbar = () => {
//   setShowNavbar(!showNavbar)
// }

//   return (


//     <>
    
//       <div className='navbar '>
        
//       <div className="menu-icon" onClick={handleShowNavbar}>
//           <MenuIcon className='menuicon text-white'/>
//         </div>
//         <div className={`nav-elements  ${showNavbar && 'active'} d-flex justify-content-between`}>
//          <ul >
//              <li><NavLink to="/home" className=" nav-item" onClick={handleShowNavbar}>Home</NavLink></li>

//              <li><NavLink to="/about" className=" nav-item" onClick={handleShowNavbar}>About Us</NavLink></li>
//              <li><NavLink to="/quiz" className=" nav-item" onClick={handleShowNavbar}>QUIZ</NavLink></li>
//              <li ="nav-item dropdown"> <a class="nav-link" href="#">  Hover me  </a>
// 		    <ul class="dropdown-menu">
// 			  <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
// 			  <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
// 			  <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
// 		    </ul>
// 		</li>

//              </ul>
//             <ul className='d-flex '>

//          </ul>
//          </div>

//              <ul>
//     <div className="dropdown" style={{float: "right"}}>
//   <button Name="dropbtn">{data.name}</button>

//   <div className="dropdown-content">
//    <button type="button" className="btn btn-warning" onClick={logout}>Logout<i className="bi bi-arrow-{data.username}"></i></button>
//     <NavLink to="/profile/none" className="profile"><i className="bi bi-person-circle"> Profile</i></NavLink>
//      <a href="#">Link 3</a> 
//   </div>
// </div>
//     </ul>
//      </div> 
    
//      </>

//   )



// }
  


// export default React.memo(Navbar)
