import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Link from 'next/link'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CardBlogsOfFinsouqq() {
    return (
        <>

            <div class="container-fluid py-5">

                <div className='LayoutCardOuter'>
                <div>
                    <Typography variant="h4" fontWeight={600} mb={4}>
                    Blog of <span style={{color:'#E76D8A'}}>finsouq</span> 
                    </Typography>
                </div>

                <Swiper
                    spaceBetween={25}
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
                                        src={'/Frame 19s8 (1).png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>  
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                    Breaking Boundaries: Empowering B......
                                    </Typography>
                                    <div className='d-md-flex justify-content-between'>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarTodayIcon/> 5 July 2023
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <PersonIcon/> By admin
                                    </Typography>
                                    </div>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                    <Button className='seeMoreCards' href='/blogsingle' variant="text">Go to blog page <ChevronRightIcon/></Button>
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
                                        src={'/b2.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>  
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                    Your Path to Property Ownership.............
                                    </Typography>
                                    <div className='d-md-flex justify-content-between'>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarTodayIcon/> 5 July 2023
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <PersonIcon/> By admin
                                    </Typography>
                                    </div>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                        <Button className='seeMoreCards' href='/blogsingle' variant="text">Go to blog page <ChevronRightIcon/></Button>
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
                                        src={'/b3.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>  
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                    The Future of Real Estate: Exploring......
                                    </Typography>
                                    <div className='d-md-flex justify-content-between'>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarTodayIcon/> 5 July 2023
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <PersonIcon/> By admin
                                    </Typography>
                                    </div>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                    <Button className='seeMoreCards' href='/blogsingle' variant="text">Go to blog page <ChevronRightIcon/></Button>
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
                                        src={'/Frame 19s8 (1).png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>  
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                    Breaking Boundaries: Empowering B......
                                    </Typography>
                                    <div className='d-md-flex justify-content-between'>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarTodayIcon/> 5 July 2023
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <PersonIcon/> By admin
                                    </Typography>
                                    </div>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                    <Button className='seeMoreCards' href='/blogsingle' variant="text">Go to blog page <ChevronRightIcon/></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <Button variant="text" href='/blog' className='seeMoreCards mt-5 p-0'>Go to blog page <ChevronRightIcon/></Button>
                </Swiper>
                </div>

            </div>

        </>
    );
}



