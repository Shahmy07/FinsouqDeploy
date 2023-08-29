import React from 'react';
import { Button, Typography, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import AddNewPropertyHeader from '@/components/AddNewPropertyHeader';

export default function AdminAddNewProperty() {
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
                            <div>

                               <AddNewPropertyHeader/>

                            </div>

                            <div className='pt-5'>
                                <div>
                                    <Typography fontWeight={'bold'}>
                                        Development name
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Palm Jumeirah Residences" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Location
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Palm Jumeirah, Dubai" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Description
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Write short description here....." multiline rows={4} variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Property type
                                    </Typography>

                                     
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Area
                                    </Typography>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Vendor
                                    </Typography>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                        Bedrooms
                                    </Typography>

                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                        fullWidth
                                        sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </div>


                                <Button className='fullWidthPinkButton mt-5' variant="contained" fullWidth>Save changes</Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



