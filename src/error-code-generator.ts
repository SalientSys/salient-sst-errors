import { routeMap } from './routes-map';
import { Middleware, RouteName, Service } from './enums';

const generateErrorCode = (
  route: number,
  middleware: Middleware,
  service: Service,
) => {
  return parseInt(`${route}${middleware}${service}`);
};

const generateErrorOriginCode = (route: RouteName) => routeMap[route];

export { generateErrorCode, generateErrorOriginCode };
