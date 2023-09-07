import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' 

// import required modules
import { Mousewheel } from 'swiper/modules';

export default function ClientExperienceTestimoniall() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>
                    <Typography variant="h4" fontWeight={600} mb={4}>
                        Client Experiences and <br />Recommendations
                    </Typography>
                </div>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    mousewheel={true}  
                    modules={[Mousewheel]}
                    breakpoints={{
                        // When screen width is less than 768px (typical mobile width)
                        1050: {
                            slidesPerView: 2.2, // Show only one slide per frame
                        },
                    }}
                >



                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <div>&zwnj; </div>
                </Swiper>


                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    initialSlide={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    mousewheel={true}  
                    modules={[Mousewheel]}
                    breakpoints={{
                        // When screen width is less than 768px (typical mobile width)
                        1050: {
                            slidesPerView: 2.2, // Show only one slide per frame
                        },
                    }}
                >



                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Card>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" fontSize="20px" component="div">
                                        I had been looking for a reliable platform to purchase property on financing, and Finsouq proved to be the perfect solution. The website is user-friendly, the search tool helped me find my dream home quickly, and the inquiry form made it convenient to get all the necessary information. I highly recommend Finsouq for anyone looking to buy property in the UAE.
                                    </Typography>

                                    <div className='d-flex mt-4'>
                                        <Image
                                            src={'/Frame 313.png'}
                                            width={31}
                                            height={31}
                                        />

                                        <Typography gutterBottom variant="h5" fontSize="20px" fontWeight={600} component="div" ml={2}>
                                            - Sarah H.
                                        </Typography>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </SwiperSlide>
                    <div>&zwnj; </div>
                </Swiper>
            </div>

        </>
    );
}



