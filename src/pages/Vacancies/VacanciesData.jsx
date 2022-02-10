import React, { useEffect, useState } from 'react';
import { Card, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useAuth0 } from '@auth0/auth0-react';
import { deleteVacancy, getVacancies } from '../../modules/vacancies/vacancy.request';

const VacanciesData = ({ selectVacancy }) => {
    const [vacancies, setVacancies] = useState([]);
    const { getAccessTokenSilently, user } = useAuth0();
    console.log(user);
    useEffect(() => {
        const getVacanciesData = async () => {
            const token = await getAccessTokenSilently();
            const currentVacancies = await getVacancies(token);
            setVacancies(currentVacancies);
        };
        getVacanciesData();
    }, []);

    const deleteVacancyAction = async (selectedVacancy) => {
        try {
            console.log(user);
            const token = await getAccessTokenSilently();
            await deleteVacancy(1, selectedVacancy.id, token);
            const currentVacancies = vacancies.filter((vacancy) => vacancy.id !== selectedVacancy.id);
            setVacancies(currentVacancies);
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
                        <IconButton
                            onClick={() => {
                                selectVacancy(cellValues.row);
                            }}
                        >
                            <EditIcon />
                        </IconButton>
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
                    components={{
                        Toolbar: GridToolbar,
                    }}
                />
            </div>
        </Card>
    );
};

export default VacanciesData;
