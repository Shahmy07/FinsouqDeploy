import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal'; 
import Link from 'next/link';

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

export default function InputAdornments() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>


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
                                <div>
                                <Typography fontWeight={'bold'}>
                                Create a password
                                </Typography> 

                                <FormControl sx={{ width: '100%', boxShadow: 3, borderRadius: 1, marginTop: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                </div>

                                <div className='mt-4'>
                                <Typography fontWeight={'bold'}>
                                Confirm password
                                </Typography> 

                                <FormControl sx={{ width: '100%', boxShadow: 3, borderRadius: 1, marginTop: 1 }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                    />
                                </FormControl>
                                </div>
                            </div>

                            <Button className='fullWidthPinkButton mt-4' variant="contained" fullWidth>Finish now</Button>


                            <div className='text-center my-4'>
                            <Link style={{ fontWeight: '600', color: '#000000', fontSize: '16px', textDecoration:'Underline' }} href='/admindashboard'> Need Support? Write us</Link>
                        </div>
                        </div>
                    </Box>
                </Modal>
            </div> 
        </Box>
    );
}
