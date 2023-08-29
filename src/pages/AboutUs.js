import React from 'react' 
import { Typography } from '@mui/material' 

export default function AboutUs() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#ffff' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            About Us
                        </Typography>

                        <Typography fontSize={'19px'} fontWeight={400} >
                            Finsouq is a financial marketplace for in-house/ developer financed properties in the UAE.
                            Finsouq is a wing of Bluebay Financial Services LLC, a boutique financial services and deal
                            advisory firm serving the MENAT region in corporate & investment banking, assets
                            management, placements, trade finance and advisory.
                            Finsouq mainly focuses on developer financing to make it easy for our trustable clients to own
                            their dream house in easier steps and with no bank commitments.
                            With its streamlined interface and user-friendly features, Finsouq makes it easy for their clients
                            to own their own home with no pressure. Finsouq provides a wide range of options tailored to
                            your unique requirements.
                        </Typography>
                    </div>


                </div>

            </div> 

        </>
    );
}



