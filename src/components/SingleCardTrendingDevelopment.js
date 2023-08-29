import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image'  
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function SingleCardTrendingDevelopment() {
    return (
        <>

            <div>
            <Card>
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
                                        style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                    />
                                    <Typography gutterBottom variant="h5" mt={1} fontWeight="bold" component="div">
                                        Renovated Luxury Apartment
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <FmdGoodIcon/> Apartment 1502, Marina Heights.....
                                    </Typography>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                        <Button variant="text">More details <ChevronRightIcon/></Button>
                                    </div>
                                </CardContent>
                            </Card>
            </div>

        </>
    );
}



