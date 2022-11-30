import { ServiceExceptions } from '../services/service-exceptions';

export const errorHandler = () => {
  const serviceExceptions = new ServiceExceptions();
  return serviceExceptions;
};
