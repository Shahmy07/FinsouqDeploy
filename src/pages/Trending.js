import React from 'react'
import { Typography, Card, CardContent, Button } from '@mui/material'
import CardHomeLastt from '@/components/CardHomeLast';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import SingleCardTrendingDevelopment from '@/components/SingleCardTrendingDevelopment';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import Image from 'next/image'

export default function Trending() {
    return (
        <>

            <div class="container-fluid py-5" style={{ backgroundColor: 'var(--black-50, #F6F6F6)' }}>

                <div className='LayoutCardOuterMain'>
                    <div>
                        <Typography variant="h4" fontWeight={600} mb={4}>
                            Top trending developments
                        </Typography>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 mt-4'>
                            <Card>
                                <div class="px-3 pt-3">
                                    <Image
                                        src={'/t3.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>
                                    <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                    <Image
                                        src={'/Frame 379.png'}
                                        width={81}
                                        height={81}
                                        style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                    />
                                    <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                        Radisson Hotel Dubai DAMAC Hills
                                    </Typography>

                                    <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                        <div className='d-flex'>
                                            <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                        </div>

                                        <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <Image
                                            src={'/image 8.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Apartment
                                        </Typography>
                                    </div>


                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 9.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Apartment 1502, Marina Heights
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 10.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Property Developer Name
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 11.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            6 & 7 Bedrooms
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 28.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            December - 2025
                                        </Typography>
                                    </div>

                                    <div class="text-center pt-3">
                                        <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className='col-md-4 mt-4'>
                        <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t2.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Morocco by Damac Lagoons
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>

                        <div className='col-md-4 mt-4'>
                        <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t1.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Harbour lights by <br/>damac
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>

                        <div className='col-md-4 mt-4'>
                        <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t2.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Morocco by Damac Lagoons
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>

                        <div className='col-md-4 mt-4'>
                        <Card>
                                    <div class="px-3 pt-3">
                                        <Image
                                            src={'/t1.png'}
                                            width={400}
                                            height={(400 / 4) * 3}
                                            layout="responsive"
                                        />
                                    </div>


                                    <CardContent>
                                        <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                        <Image
                                            src={'/Frame 379.png'}
                                            width={81}
                                            height={81}
                                            style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                        />
                                        <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                            Harbour lights by <br/>damac
                                        </Typography>

                                        <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                            <div className='d-flex'>
                                                <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                            </div>

                                            <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                        </div>

                                        <div className='d-flex align-items-center'>
                                            <Image
                                                src={'/image 8.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment
                                            </Typography>
                                        </div>


                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 9.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Apartment 1502, Marina Heights
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 10.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                Property Developer Name
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 11.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                6 & 7 Bedrooms
                                            </Typography>
                                        </div>

                                        <div className='d-flex align-items-center mt-2'>
                                            <Image
                                                src={'/image 28.png'}
                                                width={24}
                                                height={24}
                                            />
                                            <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                                December - 2025
                                            </Typography>
                                        </div>

                                        <div class="text-center pt-3">
                                            <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                        </div>
                                    </CardContent>
                                </Card>
                        </div>

                        <div className='col-md-4 mt-4'>
                        <Card>
                                <div class="px-3 pt-3">
                                    <Image
                                        src={'/t3.png'}
                                        width={400}
                                        height={(400 / 4) * 3}
                                        layout="responsive"
                                    />
                                </div>


                                <CardContent>
                                    <Button className='Price-Card-btn px-3'>AED15,000/mo</Button>
                                    <Image
                                        src={'/Frame 379.png'}
                                        width={81}
                                        height={81}
                                        style={{ float: 'right', marginTop: '-55px', position: 'relative', zIndex: '99' }}
                                    />
                                    <Typography gutterBottom variant="h5" mt={-4} fontWeight="bold" component="div">
                                        Radisson Hotel Dubai DAMAC Hills
                                    </Typography>

                                    <div className='d-flex justify-content-between p-3 rounded mb-3' style={{ backgroundColor: 'var(--brink-pink-50, #FEF2F3)', color: 'var(--brink-pink-600, #D72752)' }}>
                                        <div className='d-flex'>
                                            <Typography fontSize={'20px'} color={'#000'} fontWeight={'600'} ml={1}>70/30</Typography>
                                        </div>

                                        <Typography fontSize={'20px'} fontWeight={'600'} color={'var(--brink-pink-600, #D72752)'}>Easy Payment Plan</Typography>
                                    </div>

                                    <div className='d-flex align-items-center'>
                                        <Image
                                            src={'/image 8.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Apartment
                                        </Typography>
                                    </div>


                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 9.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Apartment 1502, Marina Heights
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 10.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            Property Developer Name
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 11.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            6 & 7 Bedrooms
                                        </Typography>
                                    </div>

                                    <div className='d-flex align-items-center mt-2'>
                                        <Image
                                            src={'/image 28.png'}
                                            width={24}
                                            height={24}
                                        />
                                        <Typography variant="body2" ml={1} color="text.secondary" fontWeight={500} fontSize={16}>
                                            December - 2025
                                        </Typography>
                                    </div>

                                    <div class="text-center pt-3">
                                        <Button href='/PropertySingleView' className='py-3 fullWidthPinkButton w-100' style={{ color: '#fff', fontSize: '20px' }} variant="text">VIEW DETAILS <ChevronRightIcon /></Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    <Stack spacing={2} mt={5}>
                        <Pagination count={10} shape="rounded" />
                    </Stack>
                </div>

            </div>


            <CardHomeLastt />

        </>
    );
}



