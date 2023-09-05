import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { Typography, Button } from '@mui/material'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function footer() {

    const telNum = {
        fontSize: '32px',
        fontWeight: 'bold',
    };


    return (
        <>
            <div class="container-fluid">
                <div className='LayoutCardOuterMain'>
                    <div class="row py-3">
                        <div class="col-md-4">
                            <Image
                                src={logo} // Path to the image from the `public` folder
                                alt="My Image"
                                width={194} // Set the desired width 
                            />

                            <Typography mt={4} style={telNum} gutterBottom>
                            04 295 7589
                            </Typography>

                            <Typography style={{ color: '#6D6D6D', fontSize: '20px', fontWeight:'500' }}>
                            Bluebay Financial Services  <br/>LLC, Oud Metha offices, <br/>Oud Metha, Dubai
                            </Typography>

                            <div className='mt-4'>
                            <Link style={{ fontWeight: '600', color:'#6D6D6D', marginRight:'15px' }} href='/blog'><FacebookIcon/></Link>

                            <Link style={{ fontWeight: '600', color:'#6D6D6D', marginRight:'15px' }} href='/blog'><LinkedInIcon/></Link>

                            <Link style={{ fontWeight: '600', color:'#6D6D6D' }} href='/blog'><InstagramIcon/></Link>
                            </div>
                        </div>
                        <div class="col-md-8 mt-md-0 mt-4">
                            <div class="d-lg-flex d-block justify-content-xl-between links-nav" style={{flexWrap:'wrap'}}>
                                
                                <div>
                                <Link style={{ fontWeight: '600' }} href='/HowFinsouqWorks'>How Finsouq Works?</Link>
                                </div>
                                
                                <div className='mx-xl-2 mx-lg-3'>
                                <Link style={{ fontWeight: '600' }} href='/blog'>Blog</Link>
                                </div> 
                                
                                <div className='mx-xl-2 mx-lg-3'>
                                <Link style={{ fontWeight: '600' }} href='/Trending'>Trending Developments</Link>
                                </div>
                               
                                <div className='mx-xl-2 mx-lg-3'>
                                <Link style={{ fontWeight: '600' }} href='/faq'>FAQ s</Link>
                                </div>
                               
                                <div className='mx-xl-2 mx-lg-3'>
                                <Link style={{ fontWeight: '600' }} href='/TermsAndConditions'>Terms & conditions</Link>
                                </div>
                               
                                <div>
                                <Link style={{ fontWeight: '600' }} href='/PrivacyPolicy'>Privacy policy</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ background: '#EB4869' }} class="text-center py-3">
                <Typography style={{ fontSize: '16px', color: 'white' }}>© Finsouq Properties - All rights reserved</Typography>
            </div>
        </>
    );
}



