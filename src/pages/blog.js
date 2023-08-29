import React from 'react'
import CardComponBlogg from '@/components/CardComponBlog'
import { Typography } from '@mui/material'
import CardHomeLastt from '@/components/CardHomeLast';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function blogPage() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Blog of <span style={{ color: '#E76D8A' }}>finsouq</span>
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <CardComponBlogg />
                        </div>

                        <div className='col-md-4'>
                            <CardComponBlogg />
                        </div>

                        <div className='col-md-4'>
                            <CardComponBlogg />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <CardComponBlogg />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <CardComponBlogg />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <CardComponBlogg />
                        </div>
                    </div>

                    <Stack spacing={2} mt={5}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>

            </div>


            <CardHomeLastt />

        </>
    );
}



