import React from 'react';
import { Button, Card, Typography } from '@mui/material'; 
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';

export default function admindashboard() {
    return (
        <>

            <div class="container-fluid py-5 mb-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-md-3'>
                             <LeftSideBarAdmin/>
                        </div>

                        <div className='col-md-9'>
                            <div className='row'>
                                <div className='col-md-6 pt-md-0 pt-4'>
                                    <Card>
                                        <div className='p-4'>
                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '20px'}}>Listed properties</Typography>

                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '36px'}}>99</Typography>
                                        </div>
                                    </Card>
                                </div>

                                <div className='col-md-6 pt-md-0 pt-4'>
                                    <Card>
                                        <div className='p-4'>
                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '20px'}}>Listed properties</Typography>

                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '36px'}}>99</Typography>
                                        </div>
                                    </Card>
                                </div>

                                <div className='col-md-6 pt-4'>
                                    <Card>
                                        <div className='p-4'>
                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '20px'}}>Listed properties</Typography>

                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '36px'}}>99</Typography>
                                        </div>
                                    </Card>
                                </div>

                                <div className='col-md-6 pt-4'>
                                    <Card>
                                        <div className='p-4'>
                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '20px'}}>Listed properties</Typography>

                                            <Typography style={{ fontWeight: '600', color: '#000', fontSize: '36px'}}>99</Typography>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



