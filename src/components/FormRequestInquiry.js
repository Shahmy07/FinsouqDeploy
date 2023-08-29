import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import Link from 'next/link';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius: '15px',
    overflowY: 'auto',
    maxHeight: '90vh',
    // p: 4,
};

export default function FormRequestInquiry() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className='Price-Card px-3 w-100 mb-4 py-3' style={{ fontWeight: '500', color: '#fff', fontSize: '20px', textTransform: 'none', padding: '0' }} onClick={handleOpen}>Request Inquiry </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                        Request Inquiry
                    </div>

                    <div className='p-4'>

                        <div>
                            <Typography variant='h5' mb={2} fontWeight={'600'}>Personal </Typography>
                        </div>

                        <div>
                            <Typography fontWeight={'bold'}>
                            Full name
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Eg: Ali Abbas" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Email
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Eg: aliabbas@mail.com" variant="outlined" />
                        </div>

                        <div className='mt-4 mb-5'>
                            <Typography fontWeight={'bold'}>
                            WhatsApp number
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Eg: +971 4 XXX XXXX" variant="outlined" />
                        </div>


                        <hr />

                        <div>
                            <Typography variant='h5' mb={2} fontWeight={'600'}>Property </Typography>
                        </div>

                        <div>
                            <Typography fontWeight={'bold'}>
                            Property type
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Villa" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Max price
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Eg: AED 10M" variant="outlined" />
                        </div>

                        <div className='mt-4 mb-5'>
                            <Typography fontWeight={'bold'}>
                            Additional note
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Type here......." variant="outlined" />
                        </div>


                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="By submitting this form, you agree to our privacy policy and the processing of your personal data in accordance with the General Data Protection Regulation (GDPR)." /> 
                        </FormGroup>


                        <Button className='fullWidthPinkButton mt-4' variant="contained" fullWidth>Submit inquiry</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}