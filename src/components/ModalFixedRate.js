import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Link from 'next/link';
import BasicModalResults from './ModalFixedRateResults';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius:'15px'
    // p: 4,
};

export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button style={{ fontWeight: '500', color: '#D72752', fontSize: '16px', textTransform: 'none', padding: '0', textDecoration: 'underline' }} onClick={handleOpen}>Try now</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                        Fixed-Rate Mortgage <br/>Calculator
                    </div>

                    <div className='p-4'>
                        <div>
                            <Typography fontWeight={'bold'}>
                                Loan Amount
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="AED 500,000" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Interest Rate
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="4%" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Repayment Term
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="30 years" variant="outlined" />
                        </div>


                        <div className='d-flex justify-content-between px-4 py-3 mt-5'  style={{fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }}>
                            <div className='d-flex'>
                                <span style={{marginRight:'20px'}}><ReportGmailerrorredIcon/></span>

                                <Typography fontWeight={'bold'}>
                                How Fixed-Rate Mortgage works ?
                                </Typography>
                            </div>


                            <div>
                            <Link style={{fontWeight:'600', color:'#000000', fontSize:'16px'}} href='/blogsingle'>Read more</Link>
                            </div>
                        </div>


                        <Button className='fullWidthPinkButton mt-4' variant="contained" fullWidth>Calculate now</Button>

                        <BasicModalResults/>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}