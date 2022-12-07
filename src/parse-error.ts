import { routeMap, Middleware, Service, indexMap } from '.';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH_END = 3;
const MIDDLEWARE_LENGTH_END = 8;

export function parseErrorCode(code: number): {
  route: { name: string; code: number };
  middleware: { name: string; code: number };
  service: { name: string; code: number };
} {
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
    stringified.substring(MIDDLEWARE_LENGTH_END, FULL_CODE_LENGTH),
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
