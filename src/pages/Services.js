import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import Button from '@mui/material/Button'

export default function services() {
    return (
        <>

            <div class="container-fluid py-5"  style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row align-items-center '>
                        <div className='col-md-6'>
                            <div>
                                <Typography variant="h4" fontWeight={600} mb={4}>
                                Services
                                </Typography>

                                <Typography fontSize={'20px'} fontWeight={400} color={'#000'}>
                                <span style={{color:'#eb4869'}}>  FinSOUQ </span> <span style={{color:'#000', fontWeight:'600', fontSize:'24px'}}>is designed exclusively to promote inHouse/Developer financed real estate projects in the UAE.</span>
                                    <br/> <br/>
                                    Our team of experts are fully committed to make your purchase seamless and hold-hand with you beyond the initial purchase!
                                    <br/> <br/>
                                    Our commitment includes regular follow ups with the developers on the project status, payment updates and property management assistances (as required)
                                    <br/> <br/>
                                    With its innovative platform, finsouq provides a wide range of financing options tailored to meet the diverse needs of its clients.
                                    <br/> <br/>
                                    By eliminating the need for traditional bank commitments, this marketplace offers a streamlined and hassle-free experience, enabling users to buy their home with easier steps.
                                </Typography>

                                <Button className='py-3 fullWidthPinkButton px-5 mt-5' style={{ color: '#fff', fontSize: '20px' }} variant="text">Request inquiry</Button>
                            </div>

                        </div>
                        <div className='col-md-6 p-md-5'>
                            <Image
                                src={'/Frame 1000002025.png'}
                                width={500}
                                height={500}
                                layout="responsive"
                            />
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



