import { routesMap, Middlewares, Services, indexMap } from '.';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH_END = 3;
const MIDDLEWARE_LENGTH_END = 8;

const getErrorMessage = (code: string): string =>
  code.length < ROUTE_CODE_LENGTH_END
    ? 'Route code is missing.'
    : code.length < MIDDLEWARE_LENGTH_END
    ? 'Middleware code is missing.'
    : code.length < FULL_CODE_LENGTH
    ? 'Service code is missing.'
    : '';

export function parseErrorCode(code: number): {
  route: { name: string; code: number };
  middleware: { name: string; code: number };
  service: { name: string; code: number };
  error: string;
} {
  const stringified = code.toString();
  if (stringified.length !== FULL_CODE_LENGTH) {
    return {
      route: { name: '', code: -1 },
      middleware: { name: '', code: -1 },
      service: { name: '', code: -1 },
      error: getErrorMessage(stringified),
    };
  }

  const routeCode = parseInt(stringified.substring(0, ROUTE_CODE_LENGTH_END));
  const middlewareCode = parseInt(
    stringified.substring(ROUTE_CODE_LENGTH_END, MIDDLEWARE_LENGTH_END),
  );
  const serviceCode = parseInt(
    stringified.substring(MIDDLEWARE_LENGTH_END, FULL_CODE_LENGTH),
  );

  const routeName = Object.keys(routesMap).find(
    (key) => indexMap(routesMap, key) === routeCode,
  );
  const middlewareName = Object.keys(Middlewares).find(
    (key: keyof typeof Middlewares) =>
      indexMap(Middlewares, key) === middlewareCode,
  );
  const serviceName = Object.keys(Services).find(
    (key: keyof typeof Services) => indexMap(Services, key) === serviceCode,
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
    error: '',
  };
}
