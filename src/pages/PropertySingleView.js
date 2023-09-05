import React from 'react';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Link } from '@mui/material' 
import SingleCardTrendingDevelopment from '@/components/SingleCardTrendingDevelopment'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaceIcon from '@mui/icons-material/Place';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function PropertySingleView() {
    return (
        <>


            <div class="container-fluid py-5">
                <div className='LayoutCardOuterMain'>
                    <div className='d-flex' >
                        <ArrowBackIcon />    <Typography fontSize={'24px'} fontWeight={'600'} ml={2}>Palm Jumeirah Residences</Typography>
                    </div>

                    <div className='d-flex pt-2 pb-4' >
                        <PlaceIcon />    <Typography fontSize={'16px'} fontWeight={'400'} color={'#454545'} ml={2}>Palm Jumeirah, Dubai</Typography>
                    </div>

                    <ImageList
                        sx={{ borderRadius: '10px' }}
                        variant="quilted"
                        cols={4}
                        rowHeight={250}
                    >
                        {itemData.map((item) => (
                            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    {...srcset(item.img, 121, item.rows, item.cols)}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>



            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div>
                                <Typography fontSize={24} fontWeight={600} color={'#000'}>
                                    Property details
                                </Typography>
                            </div>

                            <div>
                                <Typography mt={1} fontSize={20} fontWeight={400} color={'#454545'} my={4}>
                                    Your Premier Destination for Exclusive Developer Financing Options in the UAE
                                </Typography>
                            </div>

                            <Link fontSize={16} fontWeight={600} color={'#000'} style={{ textDecoration: 'none' }} href='/Trending'>Show more <ChevronRightIcon /></Link>
                        </div>

                        <div className='col-md-6 text-center'>
                            <Typography fontSize={32} fontWeight={600} color={'#000'}>
                                AED15,000/mo
                            </Typography>

                            <Button className='fullWidthPinkButton my-4' variant="contained" fullWidth>Request inquiry</Button> 
                        </div>
                    </div>
                </div>

            </div>



            <div class="container-fluid py-5">

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Property Type</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>Luxury Apartments</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Downpayment</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>20%</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Bedrooms</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>4 bedrooms</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Payment Plan</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>30/30/40</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Size</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>3,132 to 10,236 Sq Ft</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Developer</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>Omniyat</Typography>
                            </div>
                        </div>

                        <div className='col-sm-6 pt-3'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>
                                <Typography fontSize={'20px'} fontWeight={'600'}>Area</Typography>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--black-900, #3D3D3D)'}>Palm Jumeirah</Typography>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <div class="container-fluid py-5">

                <div className='LayoutCardOuterMain'>
                    <div className='mb-4'>
                        <Typography fontSize={24} fontWeight={600} color={'#000'}>
                            Amenities
                        </Typography>
                    </div>

                    <div className='d-flex' style={{ flexWrap: 'wrap' }}>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Unfurnished</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Balcony</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Barbecue Area</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Built in Wardrobes</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Central A/C</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Children s Play Area</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Children s Pool</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Covered Parking</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Private Garden</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}> Security</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}>Shared Pool</Typography>
                        </div>
                        <div className='p-3 rounded mx-2 mt-2' style={{ backgroundColor: 'var(--black-50, #F6F6F6)', border: '2px solid var(--black-200, #D1D1D1)' }}>
                            <Typography fontSize={'20px'} fontWeight={'600'}> Vastu-compliant</Typography>
                        </div>
                    </div>


                </div>

            </div>




            <div class="container-fluid py-5">

                <div className='LayoutCardOuterMain'>
                    <div className='mb-0'>
                        <Typography fontSize={24} fontWeight={600} color={'#000'}>
                        If you are an investor,
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-6 mt-5'>
                            <div className='d-flex justify-content-between p-3 rounded' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', border: ' 2px solid var(--brink-pink-600, #D72752)', color: 'var(--brink-pink-600, #D72752)' }}>
                                <div className='d-flex'>
                                    <EqualizerOutlinedIcon />
                                    <Typography fontSize={'20px'} fontWeight={'600'} ml={1}>Return on Investment (ROI)</Typography>
                                </div>

                                <Typography fontSize={'20px'} fontWeight={'400'} color={'var(--brink-pink-600, #D72752)'}>4%</Typography>
                            </div>
                        </div>
                        <div className='col-md-6 mt-5'>

                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Location
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                Our property is strategically located in a thriving neighborhood that offers convenient access to amenities, transportation links, schools, and business districts. This prime location ensures a high rental demand and the potential for substantial capital appreciation.
                            </Typography>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Rental Yield
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                Our property is strategically located in a thriving neighborhood that offers convenient access to amenities, transportation links, schools, and business districts. This prime location ensures a high rental demand and the potential for substantial capital appreciation.
                            </Typography>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Capital Appreciation
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                By investing in our property, you ll benefit from robust economic growth, infrastructure development, and favorable government initiatives that are set to positively impact property values in the long term. This potential for capital appreciation gives you an attractive opportunity to grow your investment.
                            </Typography>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Developer Reputation
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                Rest assured, our property is developed by a reputable developer known for delivering high-quality projects on time. With their excellent track record and commitment to providing exceptional after-sales services, your investment is safeguarded, ensuring enhanced resale value.
                            </Typography>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Property Type
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                Choose from our range of residential, commercial, or mixed-use developments. Each property type offers unique advantages and tailored to meet different investment goals. Our diverse portfolio ensures there s an option that aligns perfectly with your investment strategy.
                            </Typography>
                        </div>
                        <div className='col-md-6 mt-5'>
                            <Typography fontSize={20} fontWeight={600} color={'#000'}>
                                Demand-Supply Dynamics
                            </Typography>

                            <Typography fontSize={16} fontWeight={400} color={'var(--black-800, #454545)'}>
                                Our property is situated in an area with balanced or limited supply relative to demand. This ensures healthy rental yields and substantial capital appreciation potential. Invest with confidence in a market that maintains a favorable supply-demand balance.
                            </Typography>
                        </div>
                    </div>

                </div>

            </div>



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
                            <SingleCardTrendingDevelopment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleCardTrendingDevelopment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleCardTrendingDevelopment />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SingleCardTrendingDevelopment />
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div> 

        </>
    );
}


const itemData = [
    {
        img: 'Frame 220.jpg',
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: 'Frame 221.png',
        title: 'Burger',
    },
    {
        img: 'Frame 223.png',
        title: 'Camera',
    },
    {
        img: 'Frame 224.png',
        title: 'Coffee',
        cols: 1,
    },
    {
        img: 'Frame 221.png',
        title: 'Hats',
        cols: 1,
    },
];
