import { routesMap, Middlewares, Services, indexMap } from '.';

/**
 *
 * @param code The 13 digit error code to translate
 * @returns A string that describes where the error code originated from e.g.: Route: /authentication/login | Middleware: LoginHandler | Service: BcryptService
 */
export function transformError(code: number) {
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

  const routeName = Object.keys(routesMap).find(
    (key) => indexMap(routesMap, key) === parseInt(route),
  );
  const middlewareName = Object.keys(Middlewares).find(
    (key) => indexMap(Middlewares, key) === parseInt(middleware),
  );
  const serviceName = Object.keys(Services).find(
    (key) => indexMap(Services, key) === parseInt(service),
  );
  return `Route: ${routeName} | Middleware: ${middlewareName} | Service: ${serviceName} `;
}
