import getAxiosRequest from '../../utils/network/request';
import SystemException from '../../utils/SystemException';

const buildVacancyURL = (vacantId) => {
    return `/job-vacancies/${vacantId}`;
};

const host = `${process.env.SERVER_HOST}/api`;
const endPoints = {
    getVacancies: { url: '/job-vacancies', method: 'GET' },
    getVacancy: { url: buildVacancyURL, method: 'GET' },
    createVacancy: { url: '/job-vacancies', method: 'POST' },
    deleteVacancy: { url: buildVacancyURL, method: 'DELETE' },
    updateVacancy: { url: buildVacancyURL, method: 'PATCH' },
};

async function postVacancy(vacancy, token) {
    let response = null;
    const { url, method } = endPoints.createVacancy;
    response = await getAxiosRequest({
        method,
        url: `${host}${url}`,
        data: vacancy,
    }, null, token);
    const { data } = response;
    if (!data) throw SystemException('Error creating vacancy', 'error');
    return data;
}

async function getVacancies(token) {
    let response = null;
    const { url, method } = endPoints.getVacancies;
    response = await getAxiosRequest({
        method,
        url: `${host}${url}`,
    }, null, token);
    const { data } = response;
    if (!data) throw SystemException('Error getting vacancies', 'error');
    return data.job_vacants;
}

async function getVacancy(vacantId, token) {
    let response = null;
    const { url, method } = endPoints.getVacancy;
    response = await getAxiosRequest({
        method,
        url: `${host}${url(vacantId)}`,
    },null, token);
    const { data } = response;
    if (!data) throw SystemException('Error getting vacancy', 'error');
    return data.vacant;
}

async function deleteVacancy(vacantId, token) {
    let response = null;
    const { url, method } = endPoints.deleteVacancy;
    response = await getAxiosRequest({
        method,
        url: `${host}${url(vacantId)}`,
    }, null, token);
    const { data } = response;
    if (!data) throw SystemException('Error deleting vacancy', 'error');
    return true;
}

async function updateVacancy(vacantId,vacancy, token) {
    let response = null;
    const { url, method } = endPoints.updateVacancy;
    response = await getAxiosRequest({
        method,
        url: `${host}${url(vacantId)}`,
        data: vacancy,
    }, null, token);
    const { data } = response;
    if (!data) throw SystemException('Error deleting vacancy', 'error');
    return true;
}

export { postVacancy, getVacancies, deleteVacancy, getVacancy, updateVacancy };
