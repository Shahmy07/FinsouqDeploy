import React from 'react';
import { Button, Typography, Card,  CardContent, InputLabel } from '@mui/material';
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import AddNewPropertyHeader from '@/components/AddNewPropertyHeader';
import Link from 'next/link'; 
import Image from 'next/image'  


export default function AdminAddNewPublish() {
 
    return (
        <>

            <div class="container-fluid py-5 mb-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-md-3'>
                            <LeftSideBarAdmin />
                        </div>

                        <div className='col-md-9'>
                            <div>

                                <AddNewPropertyHeader />

                            </div>

                            <div className='pt-5'>

                                
                            <Card style={{maxWidth:'500px'}}>
                                <div class="px-3 pt-3">
                                    <Image
                                        src={'/dddddddddddd.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>
                                    <Button className='Price-Card px-3'>AED15,000/mo</Button>
                                    <Image
                                        src={'/Frame 379.png'}
                                        width={81}
                                        height={81}
                                        style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '999' }}
                                    />
                                    <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                        Renovated Luxury Apartment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <i>i</i> Apartment 1502, Marina Heights.....
                                    </Typography>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                        <Button variant="text">More details <i>i</i></Button>
                                    </div>
                                </CardContent>
                            </Card>


                                <div className='d-flex justify-content-between  align-items-center mt-5'>
                                    <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px' }} href='/blogsingle'>Go back</Link>

                                    <Button className='fullWidthPinkButton px-5' variant="contained">Publish</Button>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



