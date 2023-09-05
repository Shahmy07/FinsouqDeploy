import React from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import 'swiper/css'

export default function PropertyCount() {
    return (
        <>

            <div class="container-fluid py-5">

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/Apartment.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Apartment
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/Villla.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Villa
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/Townhouse.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Townhouse
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/penthouse.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Penthouse
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/R-plot.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>
                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Residential Plot
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-2 mt-md-0 mt-4'>
                            <div class="px-3 py-3" style={{ width: '100%' }}>
                                <div className='px-md-0 px-5'>
                                    <Image
                                        src={'/Duplex-Apartment.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>

                                <div className='text-center my-3'>
                                    <Typography variant="h4" fontSize={14} fontWeight={600} mb={1}>
                                        Duplex Apartment
                                    </Typography>

                                    <Typography variant="h4" fontSize={14} fontWeight={600} color={'red'}>
                                        565+
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



