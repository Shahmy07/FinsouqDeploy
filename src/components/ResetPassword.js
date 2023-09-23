import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material'; 
import Login from './Login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)', 
    bgcolor: 'background.paper',
    border: '', 
    boxShadow: 24,
    borderRadius: '15px'
    // p: 4,
};

export default function ResetPassword() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button style={{ fontWeight: '600', color: '#000', fontSize: '16px', textTransform: 'none', padding: '0', textDecoration: 'underline' }} onClick={handleOpen}>Reset password</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                    Reset password
                    </div>

                    <div className='p-4'>
                        <div>
                            <Typography fontWeight={'bold'}>
                            Email address
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth label="Email" variant="outlined" />
                        </div> 



                        



                        <Button className='fullWidthPinkButton mt-4' variant="contained" fullWidth>Send link</Button>
 

                        <div className='text-center mt-3'>
                           <Login/>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}