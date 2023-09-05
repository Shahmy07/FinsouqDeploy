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
import ApartmentIcon from '@mui/icons-material/Apartment';
import SettingsIcon from '@mui/icons-material/Settings';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DateRangeIcon from '@mui/icons-material/DateRange';

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
                                            src={'/t3.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Radisson Hotel Dubai DAMAC Hills
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
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
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Morocco by Damac Lagoons
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
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
                                            src={'/t1.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Harbour lights by damac
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
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
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Radisson Hotel Dubai DAMAC Hills
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
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



