import React from 'react' 
import { Typography } from '@mui/material' 
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SingleCardTrendingDevelopment from '@/components/SingleCardTrendingDevelopment';
import FormPropertySearch from '@/components/FormPropertySearch';

export default function PropertySearchResults() {
    return (
        <>

       <div className='text-center'>
       <FormPropertySearch/>
       </div>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                        Your property search results
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                             <SingleCardTrendingDevelopment/>
                        </div>

                        <div className='col-md-4'>
                            <SingleCardTrendingDevelopment/>
                        </div>

                        <div className='col-md-4'>
                            <SingleCardTrendingDevelopment/>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment/>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment/>
                        </div>

                        <div className='col-md-4 mt-4'>
                            <SingleCardTrendingDevelopment/>
                        </div>
                    </div>

                    <Stack spacing={2} mt={5}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>

            </div>
 

        </>
    );
}



