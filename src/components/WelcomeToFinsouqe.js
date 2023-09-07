import React from 'react'
import Typography from '@mui/material/Typography' 
import FormRequestInquiry from './FormRequestInquiry';
import SingleCardTrendingDevelopment from './SingleCardTrendingDevelopment';
import Image from 'next/image'; 
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// import required modules
import { Mousewheel } from 'swiper/modules';

export default function WelcomeToFinsouqee() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain wFinsouq'>
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



                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                mousewheel={true}  
                                modules={[Mousewheel]}
                                breakpoints={{
                                    // When screen width is less than 768px (typical mobile width)
                                    1050: {
                                        slidesPerView: 2.8, // Show only one slide per frame
                                    },
                                }}
                            >



                                <SwiperSlide>
                                    <div>
                                        <div className='p-3 rounded mx-2 d-flex align-items-center' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)'}}>
                                            <Image
                                                src={'/image 18.png'}
                                                width={30}
                                                height={30}
                                            />
                                            <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>24x7 security </Typography>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div className='p-3 rounded mx-2 d-flex align-items-center' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)'}}>
                                            <Image
                                                src={'/image 19.png'}
                                                width={30}
                                                height={30}
                                            />
                                            <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Swimming </Typography>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div className='p-3 rounded mx-2 d-flex align-items-center' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)'}}>
                                            <Image
                                                src={'/image 20.png'}
                                                width={30}
                                                height={30}
                                            />
                                            <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Multipurpose halls </Typography>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div>
                                        <div className='p-3 rounded mx-2 d-flex align-items-center' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)'}}>
                                            <Image
                                                src={'/image 18.png'}
                                                width={30}
                                                height={30}
                                            />
                                            <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Bar</Typography>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <div>&zwnj; </div>
                            </Swiper>



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
                                style={{ position: 'absolute', top: '120%', left: '50%' }}
                                className='d-xl-block d-none'
                            />
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}



