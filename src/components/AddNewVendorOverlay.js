import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Link from 'next/link';
import GroupIcon from '@mui/icons-material/Group';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius:'15px',
    overflowY: 'auto',
    maxHeight: '90vh',
    // p: 4,
};

export default function AddNewVendorOverlay() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div> 
            <Button className='fullWidthPinkButton py-2' variant="contained"  onClick={handleOpen}> <i style={{ marginRight: '10px', fontSize: '23px' }} ><GroupIcon/></i> VENDOR</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                    Add a new vendor
                    </div>

                    <div className='p-4'>
                        <div>
                            <Typography fontWeight={'bold'}>
                               First name
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="John" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Last name
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Smith" variant="outlined" />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Email address
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="john@mail.com" variant="outlined" />
                        </div> 

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Create password
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="**************" variant="outlined" />
                        </div> 

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                            Confirm password
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="**************" variant="outlined" />
                        </div> 


                        <Button className='fullWidthPinkButton mt-4' variant="contained" fullWidth>Save changes</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}