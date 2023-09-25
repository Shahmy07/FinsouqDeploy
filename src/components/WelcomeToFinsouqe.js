import React from 'react'
import Typography from '@mui/material/Typography'
import FormRequestInquiry from './FormRequestInquiry';
import SingleCardTrendingDevelopment from './SingleCardTrendingDevelopment';
import Image from 'next/image';
import Button from '@mui/material/Button';
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
 


                            <FormRequestInquiry />
                        </div>

                        <div className='col-lg-6 pt-3 heroCardContain' style={{}}>
                            {/* <div className='heroCard1'>
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
                            /> */}

                            <div className='d-flex justify-content-end'>
                                <div>
                                <div className='px-3 py-2' style={{background:'#fae5ea', borderRadius:'50px'}}>
                                <Typography fontSize={'16px'} fontWeight={'500'}>Select Premium <b>Amenities</b> <br/>for Your Ideal Property </Typography>
                                </div>

                                <Image
                                src={'/Arrow 03.png'}
                                width={101}
                                height={123}
                                style={{ float:'right' }} 
                            />
                                </div>
                            </div>

                            <div>
                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 18.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>24x7 security </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                            <Image
                                                src={'/image 19.png'}
                                                width={30}
                                                height={30}
                                            />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Swimming  </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                            <Image
                                                src={'/image 20.png'}
                                                width={30}
                                                height={30}
                                            />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Multipurpose halls  </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/massage 1.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Sauna/ spa </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 21.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Shops /eateries </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 22.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Basketball  </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 23.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Tennis  </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 24.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Running /jogging trails  </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                                <Image
                                    src={'/image 25.png'}
                                    width={30}
                                    height={30}
                                />
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Pool </Typography>
                            </Button>

                            <Button className='p-3 mx-2 hero-amenities-select mt-2'> 
                                <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>More 12+ </Typography>
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}



