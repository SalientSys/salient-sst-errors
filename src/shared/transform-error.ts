import { routesMap, Middlewares, Services, indexMap } from '.';

/**
 *
 * @param code The 13 digit error code to transform into digestible data
 */
export function transformError(code: number): {
  route: { name: string; code: number };
  middleware: { name: string; code: number };
  service: { name: string; code: number };
} {
  const stringified = code.toString().split('');
  // Early exit if the code is incomplete;
  if (stringified.length < 13) return;
  let route = '';
  let middleware = '';
  let service = '';
  stringified.forEach((val, i) => {
    // The first 3 digits -> Route
    if (i <= 2) {
      route += val;
    }
    // The 5 digits after those three digits -> Middleware
    if (i > 2 && i < 8) {
      middleware += val;
    }
    // The 5 digits after those five digits -> Service
    if (i > 7 && i < 13) {
      service += val;
    }
  });

  const routeCode = parseInt(route);
  const middlewareCode = parseInt(middleware);
  const serviceCode = parseInt(service);

  const routeName = Object.keys(routesMap).find(
    (key) => indexMap(routesMap, key) === parseInt(route),
  );
  const middlewareName = Object.keys(Middlewares).find(
    (key) => indexMap(Middlewares, key) === parseInt(middleware),
  );
  const serviceName = Object.keys(Services).find(
    (key) => indexMap(Services, key) === parseInt(service),
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
