/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useAuth0 } from '@auth0/auth0-react';
import { Typography, Container, Box, Button, TextField, Snackbar } from '@mui/material';
import { StarRate } from '@mui/icons-material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { getVacancy, updateVacancy } from '../../../modules/vacancies/vacancy.request';
import useStyles from './vacancy.styles';
import SuspenseLoader from '../../../components/atoms/SuspenseLoader';
import { StarRating } from '../../../components/organisms/StarRating/StarRating';

const Vacancy = () => {
    const params = useParams();
    const classes = useStyles();
    const [isLoading, setIsloading] = useState(false);
    const [alert, setAlert] = useState(false);
    const { getAccessTokenSilently } = useAuth0();
    const [vacancy, setVacancy] = useState();
    const [formData, setFormData] = useState({
        title: '',
        link: '',
        company: '',
        salary_from: 0,
        salary_to: 0,
        currency: '',
        date_application: '',
        interest: 0,
        remote: false,
        status: '',
        notes: '',
    });

    useEffect(() => {
        const getVacancyData = async () => {
            setIsloading(true);
            try {
                if (params?.vacancyId) {
                    const token = await getAccessTokenSilently();
                    const currentVacancy = await getVacancy(params.vacancyId, token);
                    setVacancy(currentVacancy);
                    setFormData(currentVacancy);
                    setIsloading(false);
                }
            } catch (error) {
                setAlert(error.message);
            }
            setIsloading(false);
        };
        getVacancyData();
    }, [getAccessTokenSilently, params.vacancyId]);

    const updateVacancyData = async () => {
        setIsloading(true);
        try {
            const token = await getAccessTokenSilently();
            const vacancyToUpdate = { ...vacancy, ...formData, remote: false, status: 'done' };
            const { createdAt, updatedAt, id, user_id, ...curerntVacancy } = vacancyToUpdate;
            await updateVacancy(params.vacancyId, curerntVacancy, token);
        } catch (error) {
            setAlert(error.message);
        }
        setIsloading(false);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(null);
    };

    const handleChange = (event) => {
        event.preventDefault();
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const renderBackButton = () => {
        return (
            <Box
                sx={{
                    float: 'left',
                    margin: '20px 20px',
                }}
            >
                <Link href="/vacancies" to="/vacancies">
                    <ArrowBackIosIcon />
                </Link>
            </Box>
        );
    };

    if (isLoading) {
        return (
            <Container maxWidth="md">
                {renderBackButton()}
                <SuspenseLoader />
            </Container>
        );
    }

    if (vacancy) {
        return (
            <Container maxWidth="md">
                {renderBackButton()}
                <Box>
                    <br />
                    <Typography variant="h1">{vacancy.title}</Typography>
                    <Button variant="text" href={vacancy.link}>
                        {vacancy.link}
                    </Button>
                    <br />
                    <br />
                    <Box className={classes.main}>
                        <form className={classes.form}>
                            <TextField
                                name="title"
                                placeholder="Title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField name="link" placeholder="Link" value={formData.link} onChange={handleChange} />
                            <br />
                            <br />
                            <TextField
                                name="company"
                                placeholder="Company"
                                value={formData.company}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField
                                name="salary_from"
                                placeholder="Salary from"
                                value={formData.salary_from}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField
                                name="salary_to"
                                placeholder="Salary to"
                                value={formData.salary_to}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField
                                name="currency"
                                placeholder="Currency"
                                value={formData.currency}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            <TextField
                                name="notes"
                                placeholder="Notes"
                                value={formData.notes}
                                onChange={handleChange}
                            />
                            <br />
                            <br />
                            {/* <StarRating
                                rating={formData.interest}
                                setRating={() => {
                                    handleChangeName({ target: { name: 'interest', value: formData.interest } });
                                }}
                            /> */}
                        </form>
                        <Box className={classes.section}>
                            <Box className={classes.contact}>
                                <Typography variant="h5">Contact data</Typography>
                            </Box>
                            <Box className={classes.score}>
                                <Typography variant="h5">Score</Typography>
                                {Array.from(Array(vacancy.interest).keys()).map(() => (
                                    <StarRate key={uuidv4()} />
                                ))}
                            </Box>
                        </Box>
                        <Button variant="contained" onClick={updateVacancyData}>
                            Save
                        </Button>
                    </Box>
                </Box>

                <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose} message={alert} />
            </Container>
        );
    }
    return <Typography variant="h4">Select a vacancy</Typography>;
};

export default Vacancy;
