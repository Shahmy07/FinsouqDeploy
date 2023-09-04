import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Button from '@mui/material/Button'

export default function AboutUs() {
    return (
        <>

            <div class="container-fluid py-5"  style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row align-items-center '>
                        <div className='col-md-6'>
                            <div>
                                <Typography variant="h4" fontWeight={600} mb={4}>
                                    About <span style={{color:'#eb4869'}}>finsouq</span>
                                </Typography>

                                <Typography fontSize={'20px'} fontWeight={400} >
                                    Finsouq is a financial marketplace for in-house/ developer financed properties in the UAE.
                                    Finsouq is a wing of Bluebay Financial Services LLC, a boutique financial services and deal
                                    advisory firm serving the MENAT region in corporate & investment banking, assets
                                    management, placements, trade finance and advisory.
                                    <br/> <br/>
                                    Finsouq mainly focuses on developer financing to make it easy for our trustable clients to own
                                    their dream house in easier steps and with no bank commitments.
                                    With its streamlined interface and user-friendly features, Finsouq makes it easy for their clients
                                    to own their own home with no pressure. Finsouq provides a wide range of options tailored to
                                    your unique requirements.
                                </Typography>

                                <Button className='py-3 fullWidthPinkButton px-5 mt-5' style={{ color: '#fff', fontSize: '20px' }} variant="text">Request inquiry</Button>
                            </div>

                        </div>
                        <div className='col-md-6 p-md-5'>
                            <Image
                                src={'/mockuper (2) 1.png'}
                                width={547}
                                height={327}
                                layout="responsive"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



