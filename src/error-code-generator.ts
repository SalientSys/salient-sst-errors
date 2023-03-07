import { routeMap } from './routes-map';
import { DefaultErrorInfo, Details, Middleware, RouteName } from './enums';
import { IErrorContext } from './interfaces';

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

function getErrorCodeFromContext(context: IErrorContext) {
  const routeCode = routeMap[context.route];
  const detailsCode = Details[context.details];

  const code = generateErrorCode(
    routeCode ?? DefaultErrorInfo.DefaultRoute,
    context.middleware,
    detailsCode,
  );

  return code;
}
export { generateErrorCode, generateErrorOriginCode, getErrorCodeFromContext };
