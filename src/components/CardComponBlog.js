import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Image from 'next/image' 
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function CardComponBlogg() {
    return (
        <>

            <div>
            <Card>
                                <div class="px-3 pt-3">
                                    <Image
                                        src={'/Frame 19s8 (1).png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>  
                                    <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
                                    Breaking Boundaries: Empowering B......
                                    </Typography>
                                    <div className='d-md-flex justify-content-between'>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarMonthOutlinedIcon/> 5 July 2023
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">
                                        <PersonIcon/> By admin
                                    </Typography>
                                    </div>

                                    <div class="bottom-card text-center mt-3 pt-3">
                                        <Button variant="text">Go to blog page <ChevronRightIcon/></Button>
                                    </div>
                                </CardContent>
                            </Card>
            </div>

        </>
    );
}



