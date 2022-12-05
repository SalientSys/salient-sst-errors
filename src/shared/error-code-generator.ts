import { Middlewares, RouteNames, Services } from './enums';
import { routesMap } from './routes-map';

const generateErrorCode = (
  route: number,
  middleware: Middlewares,
  service: Services,
) => {
  return parseInt(`${route}${middleware}${service}`);
};

const generateErrorOriginCode = (route: RouteNames) => routesMap[route];

export { generateErrorCode, generateErrorOriginCode };
