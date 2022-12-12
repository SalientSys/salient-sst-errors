import { routeMap } from './routes-map';
import { Middleware, RouteName, Service } from './enums';

/**
 *         Route Middleware Service
 * @returns 100  10000      10000   // 13 digit error code that can be parsed using the parseErrorCode function in this package
 *
 */
const generateErrorCode = (
  route: number,
  middleware: Middleware,
  service: Service,
) => {
  return parseInt(`${route}${middleware}${service}`);
};

const generateErrorOriginCode = (route: RouteName) => routeMap[route];

export { generateErrorCode, generateErrorOriginCode };
