import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { AppBar, Typography, Button } from '@mui/material'
import Link from 'next/link'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Login from './Login'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import MobileMenu from './MobileMenu'







function Header() {

  const appBarStyles = {
    backgroundColor: '#fff', // Set your desired background color
  };
  const naviBtn = {
    backgroundColor: '#D72752', 
  };

  return (
    <AppBar position='static' style={appBarStyles}>

      <div className='container-fluid'>
      <div class="LayoutCardOuterMain d-flex justify-content-between py-3">
        <div>
        <Link href='/'>
        <Image
            src={logo} // Path to the image from the `public` folder
            alt="My Image"
            width={180} // Set the desired width 
          />
        </Link>
         
        </div>

        <div class="w-75 d-lg-flex d-none justify-content-between links-nav">
          <Link style={{fontWeight:'600'}} href='/'>Home</Link>
          <Link style={{fontWeight:'600'}} href='/Trending'>Trending Developments</Link>
          <Link style={{fontWeight:'600'}} href='/financingcalculators'>Tools</Link>
          <Link style={{fontWeight:'600'}} href='/blog'>Blog</Link>
          <Link style={{fontWeight:'600'}} href='/Trending'> Company</Link> 
          <Login/>

          <Button style={naviBtn} variant="contained"><WhatsAppIcon/> &zwnj;  MAKE A CALL</Button>
        </div>

        <div className='d-lg-none d-flex  align-items-center'> 
        <MobileMenu/>
        </div>
      </div>
      </div>

    </AppBar>
  );
}


export default Header