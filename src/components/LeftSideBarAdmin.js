import React from 'react';
import { Button, Card, Typography } from '@mui/material';
import Link from 'next/link';  
import AddCreateButtonOverlay from './AddCreateButtonOverlay';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import EmailIcon from '@mui/icons-material/Email';
import ArticleIcon from '@mui/icons-material/Article';
import PeopleIcon from '@mui/icons-material/People';
 




export default function LeftSideBarAdmin() {
    return (
        <>
 
                        <div>
                            <div>
                               
                        <AddCreateButtonOverlay/>
                            </div>

                            <div className='d-flex px-4 mt-4'>
                                <Typography mr={2}><DashboardIcon/></Typography>

                                <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px', textDecoration: 'none' }} href='/admindashboard'>Dashboard</Link>
                            </div>

                            <div className='d-flex px-4 mt-4'>
                                <Typography mr={2}><HomeWorkIcon/></Typography>

                                <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px', textDecoration: 'none' }} href='/AdminAddNewProperty'>Properties</Link>
                            </div>

                            <div className='d-flex px-4 mt-4'>
                                <Typography mr={2}><EmailIcon/></Typography>

                                <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px', textDecoration: 'none' }} href='/AdminDashInquiries'>Inquires</Link>
                            </div>

                            <div className='d-flex px-4 mt-4'>
                                <Typography mr={2}><ArticleIcon/></Typography>

                                <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px', textDecoration: 'none' }} href='/blog'>Blogs</Link>
                            </div>

                            <div className='d-flex px-4 mt-4'>
                                <Typography mr={2}><PeopleIcon/></Typography>

                                <Link style={{ fontWeight: '600', color: '#000', fontSize: '16px', textDecoration: 'none' }} href='/adminvendorsmanagment'>Vendors</Link>
                            </div>
                        </div> 
                     
        </>
    );
}



