import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, TextField, Link } from '@mui/material'
import FormRequestInquiry from './FormRequestInquiry';
import FormPropertySearch from './FormPropertySearch';
import SingleCardTrendingDevelopment from './SingleCardTrendingDevelopment';
import Image from 'next/image';



export default function WelcomeToFinsouqee() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'> 
                            <div>
                                <Typography fontSize={40} fontWeight={600} color={'#000'}>
                                Unlock Exclusive Developer Financing Options, with 
                                </Typography>
                            </div>
                            <div className='mb-4'>
                                <Typography fontSize={32} color={'var(--brink-pink-600, #D72752)'} fontWeight={'600'}>
                                <span style={{ fontSize:'55px' }}>Just 1%</span>   Down Payment <br/><span style={{ color: '#000' }}>in the UAE  </span>
                                </Typography>
                            </div>

                            <FormPropertySearch />



                            <FormRequestInquiry />

                            <div className='text-center'>
                                <Link fontSize={16} fontWeight={600} color={'#000'} href='/financingcalculators'>Try free calculators</Link>
                            </div>
                        </div>

                        <div className='col-md-6 pt-3 heroCardContain' style={{ backgroundImage: 'url("/Ellipse 1.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center' }}>
                            <div className='heroCard1'>
                                <SingleCardTrendingDevelopment />
                            </div>

                            <div className='heroCard2'>
                                <SingleCardTrendingDevelopment />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}



