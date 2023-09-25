import React from 'react'
import { Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SingleCardTrendingDevelopment from '@/components/SingleCardTrendingDevelopment';
import Button from '@mui/material/Button';
import Image from 'next/image';

export default function PropertySearchResults() {
    return (
        <>

            <div className='LayoutCardOuterMain'>
                <div className='container-fluid py-5'>

                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Select Premium Amenities <br />for Your Ideal Property
                        </Typography>
                    </div>

                    <div>

                        <Button className='p-3 mx-2 hero-amenities-select mt-2'>
                            <Typography ml={1} fontSize={'20px'} fontWeight={'600'}>Trending Developments  </Typography>
                        </Button>

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

                    <Button className='mt-4 mx-2' style={{ fontWeight: '600', color: '#D72752', fontSize: '16px', textTransform: 'none', padding: '0', textDecoration: 'underline' }} >Clear all selections</Button>
                </div>
            </div>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>


                    <div className='row'>
                        <div className='col-md-4'>
                            <SingleCardTrendingDevelopment />
                        </div>

                        <div className='col-md-4'>
                            <SingleCardTrendingDevelopment />
                        </div>

                        <div className='col-md-4'>
                            <SingleCardTrendingDevelopment />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment />
                        </div>
                    </div>

                    <Stack spacing={2} mt={5}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>

            </div>


        </>
    );
}



