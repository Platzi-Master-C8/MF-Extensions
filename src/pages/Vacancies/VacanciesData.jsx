import { Link, Card } from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import VacanciesTable from 'Components/templates/DataTable';

const VacanciesData = () => {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts';

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'company', headerName: 'Company' },
        { field: 'salary', headerName: 'Salary' },
        { field: 'date_application', headerName: 'Date' },
        {
            field: 'Actions',
            renderCell: (cellValues) => {
                return (
                    <Link
                        href={`#${cellValues.row.url}`}
                        key={cellValues.row.id}
                        to={`/vacancies/${cellValues.row.id}`}
                    >
                        {' '}
                        <EditIcon />{' '}
                    </Link>
                );
            },
        },
    ];

    return (
        <Card>
            <VacanciesTable columns={columns} endpoint={endpoint} />
        </Card>
    );
};

export default VacanciesData;
