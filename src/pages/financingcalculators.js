import React from 'react'
import Card from '@mui/material/Card' 
import Typography from '@mui/material/Typography'  
import Link from 'next/link'
import BasicModal from '@/components/ModalFixedRate';
import BasicModalResults from '@/components/ModalFixedRateResults';

export default function financingcalculatorss() {
    return (
        <>

            <div class="container-fluid py-5 mb-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='mb-4'>
                        <Typography variant="h4" fontWeight={600} mb={1}>
                            Financing Calculators
                        </Typography>
                            
                        <Typography fontSize={20} color={'#4F4F4F'}>
                            Calculate Your Financial Options with <br />Financing Calculators
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Fixed-Rate Mortgage</Typography> 
                                    
                                    <BasicModal/>
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Adjustable-Rate Mortgage (ARM)</Typography>

                                    <BasicModalResults/>
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Interest-Only Mortgage </Typography>

                                    <Link style={{fontWeight:'600', color:'#D72752', fontSize:'16px'}} href='/blogsingle'>Try now</Link>
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Balloon Mortgage</Typography>

                                    <Link style={{fontWeight:'600', color:'#D72752', fontSize:'16px'}} href='/blogsingle'>Try now</Link>
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Amortizing Mortgage </Typography>

                                    <Link style={{fontWeight:'600', color:'#D72752', fontSize:'16px'}} href='/blogsingle'>Try now</Link>
                                </div>
                            </Card>
                        </div>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div className='d-flex justify-content-between py-3 px-3'>
                                    <Typography fontWeight={600} color={'var(--black-950, #000)'} fontSize={16}>Down Payment Options </Typography>

                                    <Link style={{fontWeight:'600', color:'#D72752', fontSize:'16px'}} href='/blogsingle'>Try now</Link>
                                </div>
                            </Card>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



