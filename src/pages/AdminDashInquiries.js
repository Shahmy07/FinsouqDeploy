import React from 'react';
import { Button, Card, Typography } from '@mui/material';
import Link from 'next/link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import LeftSideBarAdmin from '@/components/LeftSideBarAdmin';
import ViewInquiryOverlay from '@/components/ViewInquiryOverlay';





function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }
  
  const rows = [
    createData('Zahra Al-Fahim', 159, 6.0, <ViewInquiryOverlay/>),
    createData('Fatima Al-Hassan', 237, 9.0, <ViewInquiryOverlay/>),
    createData('Omar Abdullah', 262, 16.0, <ViewInquiryOverlay/>),
    createData('Mariam Al-Mansoori', 305, 3.7, <ViewInquiryOverlay/>),
    createData('Khalid Al-Saeed', 356, 16.0, <ViewInquiryOverlay/>),
  ];




export default function AdminDashInquiries() {
    return (
        <>

            <div class="container-fluid py-5 mb-5" style={{ backgroundColor: '#fff' }}>

                <div className='LayoutCardOuterMain'>

                    <div className='row'>
                        <div className='col-md-3'>
                            <LeftSideBarAdmin/>
                        </div>

                        <div className='col-md-9'>
                            <TableContainer>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Full name</TableCell>
                                            <TableCell align="left" fontWeight="600">Email address</TableCell>
                                            <TableCell align="left" fontWeight="600">Joined date</TableCell>
                                            <TableCell align="left" fontWeight="600">Action</TableCell> 
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="left">{row.calories}</TableCell>
                                                <TableCell align="left">{row.fat}</TableCell>
                                                <TableCell align="left">{row.carbs}</TableCell> 
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}



