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

export default function CardExploreDubaii() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuter'>
                <div>
                    <Typography variant="h4" fontWeight={600} mb={4}>
                    Explore Dubai’s most  <br />desired communities
                    </Typography>
                </div>

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={{
                        // When screen width is less than 768px (typical mobile width)
                        1050: {
                            slidesPerView: 3.5, // Show only one slide per frame
                        },
                    }}
                >



                    <SwiperSlide>
                        <div>
                            <Card>
                                <div class="px-3 pt-3">
                                    <Image
                                        src={'/image 1.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                        style={{borderRadius:'10px'}}
                                    />
                                </div>


                                <CardContent className='d-md-flex justify-content-between'>
                                    <Typography variant="h6" fontWeight={600} color="text.primary">
                                        Palm Jumeirah
                                    </Typography>

                                    <Link href={'PropertySingleView'} style={{color:'black', fontSize:'20px', textDecoration:'none', fontWeight:'500'}}>
                                    Read more <KeyboardArrowRightIcon/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card>
                                <div class="px-3 pt-3">
                                <Image
                                        src={'/image 1.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                        style={{borderRadius:'10px'}}
                                    />
                                </div>


                                <CardContent className='d-md-flex justify-content-between'>
                                    <Typography variant="h6" fontWeight={600} color="text.primary">
                                        Palm Jumeirah
                                    </Typography>

                                    <Link href={'PropertySingleView'} style={{color:'black', fontSize:'20px', textDecoration:'none', fontWeight:'500'}}>
                                    Read more <KeyboardArrowRightIcon/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card>
                                <div class="px-3 pt-3">
                                <Image
                                        src={'/image 1.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                        style={{borderRadius:'10px'}}
                                    />
                                </div>


                                <CardContent className='d-md-flex justify-content-between'>
                                    <Typography variant="h6" fontWeight={600} color="text.primary">
                                        Palm Jumeirah
                                    </Typography>

                                    <Link href={'PropertySingleView'} style={{color:'black', fontSize:'20px', textDecoration:'none', fontWeight:'500'}}>
                                    Read more <KeyboardArrowRightIcon/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div>
                            <Card>
                                <div class="px-3 pt-3">
                                <Image
                                        src={'/image 1.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                        style={{borderRadius:'10px'}}
                                    />
                                </div>


                                <CardContent className='d-md-flex justify-content-between'>
                                    <Typography variant="h6" fontWeight={600} color="text.primary">
                                        Palm Jumeirah
                                    </Typography>

                                    <Link href={'PropertySingleView'} style={{color:'black', fontSize:'20px', textDecoration:'none', fontWeight:'500'}}>
                                    Read more <KeyboardArrowRightIcon/>
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide> 

                    <FormPropertySearchHome/>
                </Swiper>
                </div>

            </div>

        </>
    );
}



