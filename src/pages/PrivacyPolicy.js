import React from 'react'
import { Typography } from '@mui/material'

export default function PrivacyPolicy() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: '#ffff' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Privacy Policy
                        </Typography>

                        <Typography fontSize={'19px'} fontWeight={400} >
                            Finsouq is dedicated to ensuring the privacy and security of your personal information. This
                            Privacy Policy describes how we collect, use, disclose, and protect your information when you
                            visit our website or use any of our linked services (collectively, the  Services). Please read this
                            Privacy Policy carefully to understand our information practices. You agree to the terms of this
                            Privacy Policy by accessing or using our Services.
                        </Typography>

                        <Typography fontSize={'19px'} fontWeight={400} mt={4}>
                            The data we gather
                        </Typography>

                        <ul>
                            <li>
                                We may gather personal information about you, such as your name, email address,
                                phone number, and any other information you willingly supply. This information is
                                gathered when you create an account, contact us, subscribe to our newsletters, or
                                engage in any other Services-related activity.
                            </li>
                            <li>
                                Cookies and Log Data: We may collect information sent by your browser whenever you
                                visit our website ( Log Data ). Your computer s Internet Protocol (IP) address, browser
                                type, browser version, the sites you view, the time and date of your visit, the time spent
                                on those pages, and other information may be included in this Log Data. Cookies and
                                similar tracking technologies may also be used to improve your user experience and
                                analyze trends.
                            </li>
                        </ul>

                        <Typography fontSize={'19px'} fontWeight={400} mt={4}>
                            How we use them
                        </Typography>

                        <ul>
                            <li>
                                We use the information we collect to offer and enhance our Services, such as
                                processing transactions, delivering tailored content, responding to enquiries, and
                                enhancing user experience.
                            </li>
                            <li>
                                We may use your information to contact with you, send you updates, emails, and
                                marketing materials, and react to your requests or queries. You may opt out of receiving
                                these notifications at any time.
                            </li>
                            <li>
                                Security and Fraud Prevention: We take reasonable precautions to safeguard your
                                information and prevent unauthorized access, use, or disclosure. Your information may
                                also be used to detect and prevent fraud, unlawful activity, and other abuses of our
                                Services.
                            </li>
                            <li>
                                Legal Compliance: Your information may be used and disclosed to comply with relevant
                                laws, rules, legal procedures, or governmental requirements. We may also assert our
                                legal rights, file or defend legal claims, and protect Bluebay Financial, our users, or
                                others  rights, property, or safety.
                            </li>
                        </ul>

                        <Typography fontSize={'19px'} fontWeight={400} mt={4}>
                            Exchange of Information
                        </Typography>

                        <Typography fontSize={'19px'} fontWeight={400} mt={4}>

                            We will never sell, rent, or transfer your personal information to a third party for marketing
                            reasons. However, under the following conditions, we may disclose your information:
                        </Typography>

                        <ul>
                            <li>
                                Service Providers: We may work with third-party service providers to help us offer and
                                improve our Services. These service providers are only permitted to access your
                                information to execute particular tasks on our behalf and are not permitted to disclose or
                                use it for any other reason.
                            </li>
                            <li>
                                Business Transfers: If Bluebay Financial merges, acquires, or sells all or a portion of its
                                assets, your information may be transferred as part of such transaction. Any change in
                                ownership or usage of your personal information will be communicated to you by email
                                and/or a conspicuous notice on our website.
                            </li>
                            <li>
                                Legal Requirements: Your information may be disclosed to comply with relevant laws,
                                rules, legal procedures, or governmental requests.
                            </li>
                        </ul>
                    </div>


                </div>

            </div>

        </>
    );
}



