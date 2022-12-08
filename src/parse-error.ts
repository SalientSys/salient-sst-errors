import { routeMap, Middleware, Service, indexMap } from '.';
import { IParsedError } from './interfaces/parsed-error.interface';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH_END = 3;
const MIDDLEWARE_LENGTH_END = 8;
const SERVICE_LENGTH_END = FULL_CODE_LENGTH;

export function parseErrorCode(code: number): IParsedError {
  const stringified = code.toString();
  if (stringified.length !== FULL_CODE_LENGTH) {
    return {
      route: { name: '', code: -1 },
      middleware: { name: '', code: -1 },
      service: { name: '', code: -1 },
    };
  }

  const routeCode = parseInt(stringified.substring(0, ROUTE_CODE_LENGTH_END));
  const middlewareCode = parseInt(
    stringified.substring(ROUTE_CODE_LENGTH_END, MIDDLEWARE_LENGTH_END),
  );
  const serviceCode = parseInt(
    stringified.substring(MIDDLEWARE_LENGTH_END, SERVICE_LENGTH_END),
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
