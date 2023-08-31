import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import FormPropertySearchHome from './FormPropertySearchHome'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function OurProperty() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Explore Dubai’s most  <br />desired communities
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <Card style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div class="px-3 py-3" style={{ width: '100%' }}>
                                    <Image
                                        src={'/p3.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4'>
                            <Card style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div class="px-3 py-3" style={{ width: '100%' }}>
                                    <Image
                                        src={'/p2.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4'>
                            <Card style={{ height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div class="px-3 py-3" style={{ width: '100%' }}>
                                    <Image
                                        src={'/p1.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



