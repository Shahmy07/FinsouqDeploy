import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; 
import Modal from '@mui/material/Modal';
import Link from 'next/link';
import AddNewVendorOverlay from './AddNewVendorOverlay';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork'; 
import ArticleIcon from '@mui/icons-material/Article';

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

export default function AddCreateButtonOverlay() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div className='text-center'>
                

                <Button className='fullWidthPinkButton py-3' variant="contained" onClick={handleOpen} fullWidth>+ Add</Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='formModalPropSearch'>
                    <div style={{ fontSize: '20px', fontWeight: 'bold', background: '#F6F6F6', borderRadius: '15px' }} className='p-4'>
                    Add/Create
                    </div>

                    <div className='p-4'>

                        <div> 

                            <div className='mt-3 d-flex buttonWhiteBgShadow'>
                                <Button variant="contained"> <MapsHomeWorkIcon/>  <Link href={'/AdminAddNewProperty'} style={{color:'#000', textDecoration:'none', marginLeft:'10px'}}>Property</Link></Button>
                               
                                <AddNewVendorOverlay/>  
                                <Button variant="contained"> <ArticleIcon/> &zwnj; &zwnj; &zwnj;  Blog property</Button> 
                            </div>
                        </div> 
                    </div>
                </Box>
            </Modal>




        </div>
    );
}