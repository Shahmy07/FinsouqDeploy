import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius: '15px',
    overflowY: 'auto',
    maxHeight: '90vh',
    // p: 4,
};

export default function FormPropertySearch() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className='text-center'>
                <Button className='px-3  my-4 py-3 shadow' style={{ fontWeight: '500', color: '#000', fontSize: '20px', textTransform: 'none', padding: '0', border: ' 2px solid var(--black-300, #B0B0B0)', borderRadius: '15px' }} onClick={handleOpen}>
                    <div className='d-flex'>
                        <SearchIcon />
                        <div className='text-start'>
                            <Typography ml={2} fontSize={16} color={'#000'} fontWeight={'600'}>Property search</Typography>
                            <Typography ml={2} fontSize={14} color={'#6D6D6D'}>Including developer financing</Typography>
                        </div>
                    </div>

                    <Box color={'#000'} ml={5}>
                        <div>
                            <OpenInNewIcon />
                        </div>
                    </Box>


                </Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='formModalPropSearch'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                        Property search
                    </div>

                    <div className='p-4'>

                        <div>
                            <Typography fontSize={'16px'} fontWeight={'500'}>Looking for</Typography>

                            <div className='buttonWhiteBgShadow'>
                                <Button className='mt-3' variant="contained"> <HomeOutlinedIcon /> House</Button>
                                <Button className='mt-3' variant="contained"> <BusinessOutlinedIcon /> Apartment</Button>
                                <Button className='mt-3' variant="contained"> <LocationCityOutlinedIcon /> Commercial property</Button>
                                <Button className='mt-3' variant="contained"> <VillaOutlinedIcon /> Villa</Button>
                            </div>
                        </div>


                        <div className='mt-4'>
                            <Typography fontSize={'16px'} fontWeight={'500'}>Location</Typography>

                            <div className='buttonWhiteBgShadow'>
                                <Button className='mt-3' variant="contained"> Palm Jumeirah</Button>
                                <Button className='mt-3' variant="contained"> Downtown Dubai</Button>
                                <Button className='mt-3' variant="contained"> Emirates Hills</Button>
                                <Button className='mt-3' variant="contained"> Arabian Ranches</Button>
                                <Button className='mt-3' variant="contained"> Jumeirah</Button>
                            </div>
                        </div>


                        <div className='mt-4'>
                            <Typography fontSize={'16px'} fontWeight={'500'}>Bedrooms</Typography>

                            <div className='buttonWhiteBgShadow'>
                                <Button className='py-3 mt-3' variant="contained">Any</Button>
                                <Button className='py-3 mt-3' variant="contained">1</Button>
                                <Button className='py-3 mt-3' variant="contained">2</Button>
                                <Button className='py-3 mt-3' variant="contained">3</Button>
                                <Button className='py-3 mt-3' variant="contained">4</Button>
                                <Button className='py-3 mt-3' variant="contained">5</Button>
                            </div>
                        </div>

                        <div className='mt-4 mb-5'>
                            <Typography fontSize={'16px'} fontWeight={'500'}>Bathrooms</Typography>

                            <div className='buttonWhiteBgShadow'>
                                <Button className='mt-3 py-3' variant="contained">Any</Button>
                                <Button className='mt-3 py-3' variant="contained">1</Button>
                                <Button className='mt-3 py-3' variant="contained">2</Button>
                                <Button className='mt-3 py-3' variant="contained">3</Button>
                                <Button className='mt-3 py-3' variant="contained">4</Button>
                                <Button className='mt-3 py-3' variant="contained">5</Button>
                            </div>
                        </div>

                        <hr />


                        <div className='px-4 py-3 mt-5' style={{ fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px', border: '1px solid var(--black-200, #D1D1D1)' }}>
                            <div>
                                <Typography fontSize={'16px'} fontWeight={'500'} color={'var(--brink-pink-500, #EB4869)'}>If you an investor,</Typography>
                                <Typography fontSize={'16px'} fontWeight={'500'}>Return on investment (ROI)</Typography>

                                <div className='buttonWhiteBgShadow'>
                                    <Button className='mt-3' variant="contained"> 4%</Button>
                                    <Button className='mt-3' variant="contained"> 6%</Button>
                                    <Button className='mt-3' variant="contained"> 8%</Button>
                                    <Button className='mt-3' variant="contained"> 12%</Button>
                                    <Button className='mt-3' variant="contained"> 16%</Button>
                                </div>
                            </div>
                        </div>



                        <div className='d-md-flex justify-content-between px-4 py-3 mt-5' style={{ fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }}>
                            <div className='d-flex'>
                                <span style={{ marginRight: '20px' }}><ReportGmailerrorredOutlinedIcon /></span>

                                <Typography fontWeight={'bold'}>
                                    Try financial options calculators
                                </Typography>
                            </div>


                            <div className='mt-md-0 mt-4'>
                                <Link style={{ fontWeight: '600', color: '#000000', fontSize: '16px' }} href='/blogsingle'>Chat with WhatsApp AI agent </Link>
                            </div>
                        </div>


                        <div className='d-flex justify-content-between mt-5 align-items-center' >
                            <div>
                                <Link style={{ fontWeight: '600', color: '#000000', fontSize: '16px' }} href='/blogsingle'>Reset all</Link>
                            </div>


                            <Button className='fullWidthPinkButton py-3' variant="contained">Submit inquiry</Button>
                        </div>

                        <Link style={{ fontWeight: '600', color: 'red', fontSize: '16px' }} href='/PropertySearchResults'>Test Results Page Link</Link>

                    </div>
                </Box>
            </Modal>




        </div>
    );
}