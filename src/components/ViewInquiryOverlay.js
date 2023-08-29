import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField} from '@mui/material';
import Link from 'next/link';

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

export default function ViewInquiryOverlay() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
             <Button style={{ fontWeight: '500', color: '#D72752', fontSize: '16px', textTransform: 'none', padding: '0', textDecoration: 'underline' }} onClick={handleOpen}>View</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}  className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                    View Inquiry
                    </div>

                    <div className='p-4'>

                        <div>
                            <Typography variant='h5' mb={2} fontWeight={'600'}>Personal </Typography>
                        </div>

                        <div>
                            <Typography fontWeight={'bold'}>
                            Full name
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Ali Abbas" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Email
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="aliabbas@mail.com" variant="outlined" />
                        </div>

                        <div className='mt-4 mb-5'>
                            <Typography fontWeight={'bold'}>
                            WhatsApp number
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="+971 50 123 4567" variant="outlined" />
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

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="AED 10M" variant="outlined" />
                        </div>

                        <div className='mt-4 mb-5'>
                            <Typography fontWeight={'bold'}>
                            Additional note
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="The master bedroom is a true retreat, complete with a walk-in closet and a luxurious ensuite bathroom. The additional bedrooms are generously sized and offer plenty of natural light. The property also includes a versatile [additional room], which can be used as a home office, gym, or playroom." multiline rows={4} variant="outlined" />
                        </div> 


                        <Button className='fullWidthPinkButton mt-0' variant="contained" fullWidth>Close</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}