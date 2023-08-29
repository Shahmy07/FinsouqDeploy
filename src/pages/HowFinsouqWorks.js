import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import CardHomeLastt from '@/components/CardHomeLast'

export default function HowFinsouqWorks() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Explaining the Process <br />of Developer Financing <br />on <span style={{ color: '#E76D8A' }}>finsouq</span>
                        </Typography>
                    </div>
 

                    <div className='row'>
                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>01</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Explore Properties</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                        Browse through our collection of properties based on your preferences.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>02</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Inquiry Form</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Fill out the inquiry form to get more information or assistance.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>03</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Developer Financing Options</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Discover attractive financing options tailored to your needs.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>04</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Property Details</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Review detailed information, including specifications and amenities.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>05</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Purchase on Finance Basis</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Buy the property on a finance basis, making homeownership accessible.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>06</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Simplified Assistance</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Use our chatbot or click the WhatsApp button for personalized support.
                                    </Typography>
                                </div>
                            </Card>
                        </div>

                        <div className='col-md-4 pt-4'>
                            <Card style={{ borderRadius: '0' }}>
                                <div className='py-4 px-3'>
                                    <div className='d-flex'>
                                        <Typography mr={2} fontWeight={'600'} fontSize={'20px'}>07</Typography>

                                        <Typography fontWeight={'600'} fontSize={'20px'}>Transparent Transactions</Typography>
                                    </div>

                                    <Typography mt={1} fontSize={'20px'} color={'var(--black-900, #3D3D3D)'}>
                                    Benefit from transparent and hassle-free transactions.
                                    </Typography>
                                </div>
                            </Card>
                        </div>
                    </div>


                    <Button className='fullWidthPinkButton mt-5' variant="contained" >Request inquiry</Button>
                </div>

            </div>


            <CardHomeLastt/>

        </>
    );
}



