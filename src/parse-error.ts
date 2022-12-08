import { routeMap, Middleware, Service, indexMap } from '.';
import { IParsedError } from './interfaces/parsed-error.interface';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH = 3;
const MIDDLEWARE_LENGTH = 5;
const SERVICE_LENGTH = 5;

export function parseErrorCode(code: number): IParsedError {
  const stringified = code.toString();
  if (stringified.length !== FULL_CODE_LENGTH) {
    return {
      route: { name: '', code: -1 },
      middleware: { name: '', code: -1 },
      service: { name: '', code: -1 },
    };
  }

  let index = 0;

  const routeCode = parseInt(stringified.substring(0, ROUTE_CODE_LENGTH));
  index += ROUTE_CODE_LENGTH;

  const middlewareCode = parseInt(
    stringified.substring(index, MIDDLEWARE_LENGTH),
  );
  index += MIDDLEWARE_LENGTH;

  const serviceCode = parseInt(
    stringified.substring(MIDDLEWARE_LENGTH, SERVICE_LENGTH),
  );

  const routeName = Object.keys(routeMap).find(
    (key) => indexMap(routeMap, key) === routeCode,
  );
  const middlewareName = Object.keys(Middleware).find(
    (key: keyof typeof Middleware) =>
      indexMap(Middleware, key) === middlewareCode,
  );
  const serviceName = Object.keys(Service).find(
    (key: keyof typeof Service) => indexMap(Service, key) === serviceCode,
  );
  return {
    route: { name: routeName, code: routeCode },
    middleware: {
      name: middlewareName,
      code: middlewareCode,
    },
    service: {
      name: serviceName,
      code: serviceCode,
    },
  };
}
