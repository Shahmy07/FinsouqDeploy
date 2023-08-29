import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius: '15px'
    // p: 4,
};

export default function BasicModalResults() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button style={{ fontWeight: '500', color: '#D72752', fontSize: '16px', textTransform: 'none', padding: '0', textDecoration: 'underline' }} onClick={handleOpen}>*</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='GenForms'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                        Fixed-Rate Mortgage <br/>
                        Calculator Results
                    </div>

                    <div className='p-4'>
                        <div>
                            <Typography fontWeight={'bold'}>
                                Loan Amount
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth variant="filled" defaultValue="AED 2,387.08" InputProps={{ readOnly: true, }} />
                        </div>

                        <div className='mt-4'>
                            <Typography fontWeight={'bold'}>
                                Total Interest Paid
                            </Typography>

                            <TextField id="outlined-basic" sx={{ boxShadow: 3, borderRadius: 1, marginTop: 1 }} fullWidth variant="filled" defaultValue="AED 359,149.82" InputProps={{ readOnly: true, }} />
                        </div>


                        <Button className='fullWidthPinkButton mt-5' variant="contained" fullWidth>Calculate now</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}