import React, { useEffect, useState } from 'react';
import { Card, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { deleteVacancy, getVacancies } from '../../modules/vacancies/vacancy.request';

const VacanciesData = () => {
    const [vacancies, setVacancies] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        const getVacanciesData = async () => {
            setIsloading(true);
            const token = await getAccessTokenSilently();
            const currentVacancies = await getVacancies(token);
            setVacancies(currentVacancies);
            setIsloading(false);
        };
        getVacanciesData();
    }, [getAccessTokenSilently]);

    const deleteVacancyAction = async (selectedVacancy) => {
        try {
            setIsloading(true);
            const token = await getAccessTokenSilently();
            await deleteVacancy(selectedVacancy.id, token);
            const currentVacancies = vacancies.filter((vacancy) => vacancy.id !== selectedVacancy.id);
            setVacancies(currentVacancies);
            setIsloading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'title', headerName: 'Title' },
        { field: 'company', headerName: 'Company' },
        { field: 'link', headerName: 'Link' },
        { field: 'salary', headerName: 'Salary' },
        { field: 'notes', headerName: 'Notes' },
        { field: 'date_application', headerName: 'Date' },
        {
            field: 'Actions',
            renderCell: (cellValues) => {
                return (
                    <React.Fragment>
                        <Link
                            href={`/vacancies/${cellValues.row.id}`}
                            key={cellValues.row.id}
                            to={`/vacancies/${cellValues.row.id}`}
                        >
                            <EditIcon />
                        </Link>
                        <IconButton
                            onClick={() => {
                                deleteVacancyAction(cellValues.row);
                            }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </React.Fragment>
                );
            },
        },
    ];

    const handleCellClick = (param, event) => {
        event.stopPropagation();
    };

    const handleRowClick = (param, event) => {
        event.stopPropagation();
    };

    return (
        <Card>
            <div style={{ height: 700, width: '100%' }}>
                <DataGrid
                    rows={vacancies}
                    columns={columns}
                    checkboxSelection
                    onCellClick={handleCellClick}
                    onRowClick={handleRowClick}
                    loading={isLoading}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </Card>
    );
};

export default VacanciesData;
