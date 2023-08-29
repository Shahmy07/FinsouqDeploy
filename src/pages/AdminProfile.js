import React from 'react';
import { Button, Typography, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import Image from 'next/image';
import add from '../assets/Frame 287.png'

export default function AdminProfile() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>

            <div class="container-fluid py-5 mb-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-md-3'>
                            <LeftSideBarAdmin />
                        </div>

                        <div className='col-md-9'>

                            <div className='text-center'>
                                <Typography variant='h4' fontWeight={'600'}>Admin Profile</Typography>

                                <Button variant="contained" className='py-3 mt-4' style={{ backgroundColor: '#E7E7E7', borderRadius:'50px' }}>
                                    <Image
                                        src={add} // Path to the image from the `public` folder
                                        alt="My Image"
                                        width={48} // Set the desired width 
                                    />
                                </Button>
                            </div>


                            <div className='pt-5'>
                                <div>
                                    <Typography fontWeight={'bold'}>
                                        Development name
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Al-Falah" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Last name
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Heights" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Email address
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Falah@gmail.com" variant="outlined" />
                                </div>


                                <Button className='fullWidthPinkButton mt-5' variant="contained" fullWidth>Update changes</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



