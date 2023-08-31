import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CardTopTrending() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div class="LayoutCardOuter">
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Top trending developments
                        </Typography>
                    </div>

                    <Swiper
                        spaceBetween={20}
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
                                            src={'/t1.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '999' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                        Radisson Hotel Dubai DAMAC Hills
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <FmdGoodIcon /> Apartment 1502, Marina Heights.....
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded my-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div class="bottom-card text-center mt-3 pt-3">
                                            <Button href={'PropertySingleView'} style={{ color: '#000', textTransform: 'capitalize' }} variant="text">More details <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t2.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '999' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                        PHASE 11 - MOROCCO
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <FmdGoodIcon /> Apartment 1502, Marina Heights.....
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded my-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div class="bottom-card text-center mt-3 pt-3">
                                            <Button href={'PropertySingleView'} style={{ color: '#000', textTransform: 'capitalize' }} variant="text">More details <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t3.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '999' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                        Harbour Lights
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <FmdGoodIcon /> Apartment 1502, Marina Heights.....
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded my-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div class="bottom-card text-center mt-3 pt-3">
                                            <Button href={'PropertySingleView'} style={{ color: '#000', textTransform: 'capitalize' }} variant="text">More details <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/dddddddddddd.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '999' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                            Renovated Luxury Apartment
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <FmdGoodIcon /> Apartment 1502, Marina Heights.....
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded my-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div class="bottom-card text-center mt-3 pt-3">
                                            <Button href={'PropertySingleView'} style={{ color: '#000', textTransform: 'capitalize' }} variant="text">More details <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </SwiperSlide>
                        <Button variant="text" href='/Trending' className='seeMoreCards mt-5 p-0'>Show more <ChevronRightIcon /></Button>
                    </Swiper>
                </div>

            </div>

        </>
    );
}



