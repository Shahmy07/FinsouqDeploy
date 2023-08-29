import React from 'react';
import { Button, Typography, TextField, Select, MenuItem } from '@mui/material';
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import AddNewPropertyHeader from '@/components/AddNewPropertyHeader';
import Link from 'next/link';

export default function AdminDeveoperFinanceForm() {
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

                                <AddNewPropertyHeader />

                            </div>

                            <div className='pt-5'>
                                <div>
                                    <Typography fontWeight={'bold'}>
                                    Scheme Selection
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
                                    Down Payment
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="AED 5,000" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                    Interest Rates
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="8%" variant="outlined" />
                                </div>

                                <div className='mt-4'>
                                    <Typography fontWeight={'bold'}>
                                    Loan Tenure/Repayment Period
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
                                    Additional Information
                                    </Typography>

                                    <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Write addition infomation here....." multiline rows={4} variant="outlined" />
                                </div>


                                <div className='d-flex justify-content-between  align-items-center mt-5'>
                                    <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px' }} href='/blogsingle'>Go back</Link>

                                    <Button className='fullWidthPinkButton px-5' variant="contained">Next</Button>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



