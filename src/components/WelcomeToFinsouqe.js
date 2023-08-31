import React from 'react'
import Typography from '@mui/material/Typography'
import { Button, TextField, Link } from '@mui/material'
import FormRequestInquiry from './FormRequestInquiry';
import FormPropertySearch from './FormPropertySearch';
import SingleCardTrendingDevelopment from './SingleCardTrendingDevelopment';
import Image from 'next/image';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function WelcomeToFinsouqee() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <div>
                                <Typography fontSize={40} fontWeight={600} color={'#000'}>
                                    Unlock Exclusive Developer Financing Options, with
                                </Typography>
                            </div>
                            <div className='mb-4'>
                                <Typography fontSize={32} color={'var(--brink-pink-600, #D72752)'} fontWeight={'600'}>
                                    <span style={{ fontSize: '55px' }}>Just 1%</span>   Down Payment <br /><span style={{ color: '#000' }}>in the UAE  </span>
                                </Typography>
                            </div>

                            <div className='d-flex mb-4' style={{ flexWrap: 'wrap' }}>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Bar</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Breakfast</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Spa</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Fitness center</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Parking</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Free Wi-Fi</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>EV Charging Stations</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Laundry service</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>Kids’ Club</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}> Meeting facilities</Typography>
                                </div>
                                <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                                    <Typography fontSize={'20px'} fontWeight={'600'}>On-site dining</Typography>
                                </div>

                                <div class="showMore mt-2">
                                    <Button variant="text">Show more <ExpandMoreIcon /></Button>
                                </div>
                            </div>
                            <FormRequestInquiry />
                        </div>

                        <div className='col-lg-6 pt-3 heroCardContain' style={{ backgroundImage: 'url("/Ellipse 1.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'center center' }}>
                            <div className='heroCard1'>
                                <SingleCardTrendingDevelopment />
                            </div>

                            <div className='heroCard2'>
                                <SingleCardTrendingDevelopment />
                            </div>

                            <Image
                            src={'/Arrow 06.png'}
                            width={150}
                            height={150}
                            style={{position:'absolute', top:'120%', left:'50%'}}
                            className='d-xl-block d-none'
                        />
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}



