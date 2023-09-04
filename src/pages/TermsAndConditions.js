import React from 'react'
import { Typography } from '@mui/material'

export default function TermsAndConditions() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#ffff' }}>

                <div className='LayoutCardOuterMain d-flex justify-content-center'>
                    <div style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }} className='py-5 px-md-5 px-3 w-75'>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Terms and conditions
                        </Typography>

                        <Typography fontSize={'19px'} fontWeight={400} >
                            Welcome to FINSOUQ, a developer financing based in Dubai, UAE. By using our services, you
                            agree to comply with and be bound by the following terms and conditions.  <br /> <br />
                            Services Offered <br />
                            We offer a range of real estate services, including property buying, selling, leasing, property
                            management, and related consulting services.
                            <br /><br />
                            Clients agree to provide accurate and complete information regarding their property
                            requirements or listings. Clients are responsible for verifying the accuracy of information
                            provided by us.
                            We reserve the right to determine the methods and platforms for marketing properties. Property
                            <br /><br />
                            listings and marketing materials may be subject to editing for clarity, compliance, and
                            effectiveness. <br /><br />
                            Our fees and commissions are as agreed upon in a separate agreement between the client and
                            Finsouq. Fees and commissions are due upon successful completion of a transaction.
                            We will treat all client information as confidential and will not disclose it to third parties without
                            consent, except where required by law. <br /><br />
                            We are not liable for any losses, damages, or liabilities arising from the use of our services,
                            including but not limited to misinformation, errors, omissions, or any actions taken based on our
                            advice. <br /><br />
                            We reserve the right to terminate our services to any client at our discretion. Clients also have
                            the right to terminate our services by providing written notice.
                            All content and materials on our website and marketing materials are protected by intellectual
                            property laws and may not be used without our permission.
                            These terms and conditions are governed by the laws of the United Arab Emirates. Any
                            disputes arising from these terms will be subject to the exclusive jurisdiction of the courts of
                            Dubai. <br /><br />
                            We reserve the right to modify these terms and conditions at any time. Any changes will be
                            posted on our website, and continued use of our services constitutes acceptance of the
                            modified terms.
                        </Typography>
                    </div>


                </div>

            </div>

        </>
    );
}



