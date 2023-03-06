import { routeMap } from './routes-map';
import { Middleware, RouteName } from './enums';

/**
 * @returns Route: XXX  Middlware: XXXXX  Details:XXXXX
 *   Can be parsed using the parseErrorCode function
 */
const generateErrorCode = (
  route: number,
  middleware: Middleware,
  details: number,
) => {
  return parseInt(`${route}${middleware}${details}`);
};

const generateErrorOriginCode = (route: RouteName) => routeMap[route];
export { generateErrorCode, generateErrorOriginCode };
