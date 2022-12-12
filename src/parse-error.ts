import { routeMap, Middleware, Service, indexMap } from '.';
import { IParsedError } from './interfaces/parsed-error.interface';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH = 3;
const MIDDLEWARE_LENGTH = 5;
const SERVICE_LENGTH = 5;

const NOT_FOUND_ERROR = `Name not found` as const;

const PARSING_ERROR =
  `Invalid error code. Error code must be a number with ${FULL_CODE_LENGTH} digits. For example: 0010010010011.` as const;
const INVALID_CODE_ERROR =
  `Invalid error code. Error code must be a number that is included in the related enums.` as const;

export function parseErrorCode(
  code: number,
): IParsedError | typeof PARSING_ERROR | typeof INVALID_CODE_ERROR {
  const stringified = code.toString();
  if (stringified.length !== FULL_CODE_LENGTH) {
    return PARSING_ERROR;
  }

  let index = 0;

  const routeCode = parseInt(stringified.substring(0, ROUTE_CODE_LENGTH));
  index += ROUTE_CODE_LENGTH;

  const middlewareCode = parseInt(
    stringified.substring(index, index + MIDDLEWARE_LENGTH),
  );

  index += MIDDLEWARE_LENGTH;

  const serviceCode = parseInt(
    stringified.substring(index, index + SERVICE_LENGTH),
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
  // if (!routeName || !middlewareName || !serviceName) return ;
  return {
    route: { name: routeName ?? NOT_FOUND_ERROR, code: routeCode },
    middleware: {
      name: middlewareName ?? NOT_FOUND_ERROR,
      code: middlewareCode,
    },
    service: {
      name: serviceName ?? NOT_FOUND_ERROR,
      code: serviceCode,
    },
  };
}
