import React from 'react';
import { Button, Typography, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import AddNewPropertyHeader from '@/components/AddNewPropertyHeader';
import Link from 'next/link';


export default function AdminAddNewPhotosVideos() {
 
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
                                 Images


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



