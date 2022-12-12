import { errorReasonMap, routeMap } from './maps';
import { ErrorReason, Middleware, RouteName, Service } from './enums';

/**
 *         Route Middleware Service
 * @returns 100  10000      10000   // 13 digit error code that can be parsed using the parseErrorCode function in this package
 *
 */
const generateErrorCode = (
  route: number,
  middleware: Middleware,
  service: Service,
  reason: number,
) => {
  return parseInt(`${route}${middleware}${service}${reason}`);
};

const generateErrorOriginCode = (route: RouteName) => routeMap[route];
const generateErrorReasonCode = (reason: ErrorReason) =>
  errorReasonMap[ErrorReason[reason]];
export { generateErrorCode, generateErrorOriginCode, generateErrorReasonCode };
