import Axios from 'axios';
import SystemException from '../SystemException';

function handle404Error(error) {
  if (Number(error.code) === 404 || error.request?.status === 0) {
    throw SystemException('Trying request was not found', 'error', 404);
  }
}

function handleGenericError(error) {
  if (error.response) {
    const errorData = error.response.data;
    if (errorData.code) {
      if (errorData.details?.length === 0) {
        throw SystemException(`${errorData.code}: ${errorData.message}`, 'error', error.response.status);
      } else {
        throw SystemException(
          `${errorData.code}: ${errorData.message} ${`/ ${  errorData.details}`}`,
          'error',
          error.response.status,
        );
      }
    }
  }
}

function catchException(error, errorHandler) {
  handle404Error(error);
  if (errorHandler) {
    throw errorHandler(error);
  }
  handleGenericError(error);
  throw SystemException(error.message, 'error', error.response?.status);
}


async function getAxiosRequest(
  config,
  errorHandler,
  token,
){
  try {
    if (token) {
      return await Axios.request({
        ...config,
        headers: {
          ...(config.headers ?? {}),
          Authorization: `Bearer ${token}`,
        },
      });
    }
    
    return await Axios.request(config);
  } catch (error) {
    throw catchException(error, errorHandler);
  }
}

export default getAxiosRequest;
