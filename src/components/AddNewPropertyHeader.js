import React from 'react';
import {Typography} from '@mui/material';  
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function AddNewPropertyHeader() {
     
    return (
        <>

<div className='mt-md-0 mt-5'>

<div>
    <Typography variant='h4' fontWeight={'600'}>Add new property</Typography>
    <Typography fontSize={'20px'} color={'var(--neutral-600, #4B5563)'} fontWeight={'500'}>You ll change/ update details later,</Typography>
</div>

<div className='d-flex mt-5' style={{flexWrap:'wrap'}}>
    <div className='d-flex'>
        <Typography mr={2}><CheckCircleIcon/></Typography>


        <Link style={{fontWeight:'600', color:'var(--black-500, #6D6D6D)', fontSize:'16px', textDecoration:'none'}} href='/AdminAddNewProperty'>Property info</Link>

        <ChevronRightIcon/>
    </div>

    <div className='d-flex'>
        <Typography mr={2}><CheckCircleIcon/></Typography>

        <Link style={{fontWeight:'600', color:'var(--black-500, #6D6D6D)', fontSize:'16px', textDecoration:'none'}} href='/AdminDeveoperFinanceForm'>Developer financing info</Link>

        <ChevronRightIcon/>
    </div>

    <div className='d-flex'>
        <Typography mr={2}><CheckCircleIcon/></Typography>

        <Link style={{fontWeight:'600', color:'var(--black-500, #6D6D6D)', fontSize:'16px', textDecoration:'none'}} href='/AdminAddNewPhotosVideos'>Photos </Link>

        <ChevronRightIcon/>
    </div>

    <div className='d-flex'>
        <Typography mr={2}><CheckCircleIcon/></Typography>

        <Link style={{fontWeight:'600', color:'var(--black-500, #6D6D6D)', fontSize:'16px', textDecoration:'none'}} href='/AdminAddNewPublish'>Publish</Link>

        <ChevronRightIcon/>
    </div>
</div>

</div>

        </>
    );
}



