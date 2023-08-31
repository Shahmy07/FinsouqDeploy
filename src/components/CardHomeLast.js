import React from 'react'
import Typography from '@mui/material/Typography'
import { Link } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function CardHomeLastt() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>
                <div className='row'>
                    <div className='col-md-4 px-3'>
                        <div className='px-3 py-4 h-100' style={{ backgroundColor: '#F6F6F6' }}>
                        <div>
                            <Typography variant="h6" fontWeight={600}>
                                Browse Properties By Dubai Areas
                            </Typography>
                        </div>

                        <div>
                            <List component="nav">
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Palm Jumeirah" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Downtown Dubai" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Emirates Hills" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Arabian Ranches" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Jumeirah" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Jumeirah Lakes Towers (JLT)" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="The Springs" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Downtown Jebel Ali" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Dubai Hills Estate" />
                                </ListItem>
                            </List>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-4 px-3'>
                        <div className='px-3 py-4 h-100' style={{ backgroundColor: '#F6F6F6' }}>
                        <div>
                            <Typography variant="h6" fontWeight={600}>
                            Amenities
                            </Typography>
                        </div>

                        <div>
                            <List component="nav">
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Bar" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Spa" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Fitness center" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Parking" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="EV Charging Stations" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Laundry service" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Kids’ Club" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Meeting" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="On-site dining and much more" />
                                </ListItem>
                            </List>
                        </div>
                        </div>
                    </div>

                    <div className='col-md-4 px-3'>
                        <div className='px-3 py-4 h-100' style={{ backgroundColor: '#F6F6F6' }}>
                        <div>
                            <Typography variant="h6" fontWeight={600}>
                            Useful links
                            </Typography>
                        </div>

                        <div>
                            <List component="nav">
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="How developer financing works?" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Why Finsouq?" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Finsouq terms and conditions" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Finsouq privacy policy" />
                                </ListItem>
                                <ListItem className='px-0 py-1'>
                                 <Typography mr={2}><ArrowRightAltIcon/></Typography>   <ListItemText primary="Services" />
                                </ListItem> 
                            </List>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

            </div>

        </>
    );
}



