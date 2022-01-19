import getAxiosRequest from "../../utils/network/request";
import SystemException from "../../utils/SystemException";

const buildVacancyURL =(userId, vacantId ) => {
  return `/job-vacancies/${userId}/${vacantId}`
}

const host = `${process.env.SERVER_HOST}/api`;
const endPoints = {
  getVacancies: { url: "/job-vacancies", method: "GET" },
  getVacancy: { url: buildVacancyURL, method: "GET" },
  createVacancy: { url: "/job-vacancies", method: "POST" },
  deleteVacancy: { url: buildVacancyURL, method: "DELETE" },
};

async function postVacancy(vacancy) {
  let response = null;
  const { url, method } = endPoints.createVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url}`,
    data: vacancy
  });
  const { data } = response;
  if (!data) throw SystemException("Error creating vacancy", "error");
  return data;
}

async function getVacancies() {
  let response = null;
  const { url, method } = endPoints.getVacancies;
  response = await getAxiosRequest({
    method,
    url: `${host}${url}`,
  });
  const { data } = response;
  if (!data) throw SystemException("Error getting vacancies", "error");  
  return data.job_vacants;
}

async function getVacancy(userId, vacantId) {
  let response = null;
  const { url, method } = endPoints.getVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url(userId, vacantId)}`,
  });
  const { data } = response;
  if (!data) throw SystemException("Error getting vacancy", "error");  
  return data.job_vacants;
}

async function deleteVacancy(userId, vacantId) {
  let response = null;
  const {  url, method } = endPoints.deleteVacancy;
  response = await getAxiosRequest({
    method,
    url: `${host}${url(userId, vacantId)}`,
  });
  const { data } = response;
  if (!data) throw SystemException("Error deleting vacancy", "error");
  return true;
}

export { postVacancy, getVacancies , deleteVacancy, getVacancy  };
