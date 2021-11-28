import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    { name: 'vacancy 1', location: 'here', isRemote: false, notes: 'bla', contact: 'me' },
    { name: 'vacancy 2', location: 'here', isRemote: false, notes: 'bla', contact: 'me' },
    { name: 'vacancy 3', location: 'here', isRemote: false, notes: 'bla', contact: 'me' },
    { name: 'vacancy 4', location: 'here', isRemote: false, notes: 'bla', contact: 'me' },
    { name: 'vacancy 5', location: 'here', isRemote: false, notes: 'bla', contact: 'me' },
];

const VacancyList = () => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {Object.keys(rows[0]).map((key) => (
                            <TableCell>{key}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            {Object.keys(rows[0]).map((key) => (
                                <TableCell>{row[key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VacancyList;
