import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
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
import { motion } from 'framer-motion';
//imge
import logo from './logo5.png'

import { useAuth0 } from "@auth0/auth0-react";

const pages = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'New Blog', link: '/create' },
];

const settings = ['Profile', 'Account', 'Dashboard','login'];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (e) => {
    if (e.target.textContent === "Logout") {
      console.log("Logout");
    } else if (e.target.textContent === "Login") {
      // Handle login here
    }
    setAnchorElUser(null);
  };

  const handleRoute = (link) => {
    if(isAuthenticated){
      navigate(link);
    }
    else{
      navigate("/")
      alert("Please Login to Add new Blog")
    }
    // navigate(link);
    handleCloseNavMenu();
  };


//login log out
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  ////////////
let p=''
  //image shown p
  if (isAuthenticated){
    p=user.image
    settings[3]=user.name
  }
  else{
    p=logo
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#192841' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ display: 'block', md: 'none' }}
            >
              <MenuIcon />
            </IconButton>
          </motion.div>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontFamily: 'Monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#FFD700',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="My Blog Logo"
              style={{ height: '40px', marginRight: '8px' }}
            />
            BATTLE OF POLITICS
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {pages.map((page) => (
              <motion.div key={page.name} whileHover={{ scale: 1.1 }}>
                <Button
                  onClick={() => handleRoute(page.link)}
                  sx={{ mx: 2, color: 'white', fontWeight: 600 }}
                >
                  {page.name}
                </Button>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.1 }}>

              {/* login logout button ...................*/}
                 
                 {isAuthenticated ?
                 <Button
                 onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                 sx={{ mx: 2, color: 'white', fontWeight: 600 }}
               >
                 Logout
               </Button>:
              <Button
                onClick={() => loginWithRedirect()}
                sx={{ mx: 2, color: 'white', fontWeight: 600 }}
              >
                Login
              </Button>
                 
                 }


              



            {/* logout end......................... */}
            </motion.div>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="User Avatar"
                  src={p} // Change to the path of your avatar image
                />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" color="textSecondary">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;



// import React from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { motion } from 'framer-motion';
// //imge
// import logo from './logo5.png'


// import { useAuth0 } from "@auth0/auth0-react";

// const pages = [
//   { name: 'Home', link: '/' },
//   { name: 'About', link: '/about' },
//   { name: 'New Blog', link: '/create' },
// ];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout','Login'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const navigate = useNavigate();

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = (e) => {
//     if(e.target.textContent=="Logout"){
//       console.log("Logout")
//     }

//     else if (e.target.textContent=="Login"){

//     }
//     setAnchorElUser(null);

//   };

//   const handleRoute = (link) => {
//     navigate(link);
//     handleCloseNavMenu();
//   };

//   const { loginWithRedirect } = useAuth0();
 
//   return (
//     <AppBar position="static" sx={{ bgcolor: '#192841',width:"100" }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
//             <IconButton
//               size="large"
//               aria-label="menu"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//               sx={{ display: { xs: 'block', md: 'none' } }}
//             >
//               <MenuIcon />

              


//             </IconButton>
//           </motion.div>
//           <Typography
//             variant="h6"
//             noWrap
//             component={Link}
//             to="/"
//             sx={{
//               flexGrow: 1,
//               fontFamily: 'Monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: '#FFD700',
//               textDecoration: 'none',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <img
//               src={logo} // Change to the path of your logo image
//               alt="My Blog Logo"
//               style={{ height: '40px', marginRight: '8px' }}
//             />
//             BATTLE OF POLITICS
//           </Typography>
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <motion.div key={page.name} whileHover={{ scale: 1.1 }}>
//                 <Button
//                   onClick={() => handleRoute(page.link)}
//                   sx={{ mx: 2, color: 'white', fontWeight: 600 }}
//                 >
//                   {page.name}
//                 </Button>
//               </motion.div>
//             ))}
//             <motion.div whileHover={{ scale: 1.1 }}>
//                 <Button
//                   onClick={() => loginWithRedirect()}
//                   sx={{ mx: 2, color: 'white', fontWeight: 600 }}
//                 >
//                   Login
//                 </Button>
//               </motion.div>
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar
//                   alt="User Avatar"
//                   src="/path/to/avatar.jpg" // Change to the path of your avatar image
//                 />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center" color="textSecondary">
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

















// import{Link} from 'react-router-dom'

// import { useNavigate } from 'react-router-dom';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';

// const pages = ['Home', 'About', 'New Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const link=['/',"detail","/create"]

// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   //
//   const navigate=useNavigate()
// const handleroute=(e)=>{
   
    
//     console.log(e.target.textContent,"x")
//    if(e.target.textContent==="New Blog"){
//     navigate("/create")
//     console.log("gg")
//    }
//    else{
//     navigate('/')
//     console.log("bjbj")
    
    
//    }

// }

//   return (
//     <AppBar position="static" sx={{bgcolor:"black"}} >
//       <Container maxWidth="xl" >
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }}} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//               MY BLOG
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page,link) => (
//                 <MenuItem key={page}  onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center" onClick={handleroute}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             MY BLOG
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} onClick={handleroute}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default Navbar;

// // const Navbar = () => {
// //     return ( 
// //     <div>
      
// //         <div class="Navbar1">
// //         <Link to="/" className="btn">Home</Link>
// //         <Link to="#" className="btn">About</Link>
// //         <Link to="/create" className="btn">New Blog</Link>
// //         <Link to="/detail/:id" className="btn">Detail</Link>
// //         </div>

// //     </div>
// //     );
// // }
 
// // export default Navbar;