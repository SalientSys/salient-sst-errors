import { ServiceExceptions } from '../services/service-exceptions';

const getErrorHandler = () => {
  const serviceExceptions = new ServiceExceptions();
  return serviceExceptions;
};

export const errorHandler = getErrorHandler();
