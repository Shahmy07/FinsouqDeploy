import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image' 

export default function AboutUs() {
    return (
        <>

            <div class="container-fluid py-5">

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='text-center'>
                            <div>
                                <Typography variant="h2" fontWeight={600} mb={4}>
                                    <span style={{ color: '#eb4869' }}>Congratulations</span>
                                </Typography>

                                <Typography fontSize={'25px'} fontWeight={600} >
                                    Your verification link is on the way to you!
                                </Typography>

                                <Typography fontSize={'20px'} my={4} fontWeight={400} >
                                    Check your spam folder
                                </Typography>

                                <Image
                                    src={'/undraw_mail_sent_re_0ofv 1.png'}
                                    width={213}
                                    height={191} 
                                />

                                {/* <Typography fontSize={'20px'} mt={4} fontWeight={400} >
                                    Finsouq is a financial marketplace for in-house/ developer financed properties in the UAE.
                                </Typography> */}
                            </div> 

                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



