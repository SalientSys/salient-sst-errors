import { routeMap, Middleware, indexMap } from '.';
import { detailsMap } from './details-map';
import { IParsedError } from './interfaces/parsed-error.interface';

const FULL_CODE_LENGTH = 13;
const ROUTE_CODE_LENGTH = 3;
const MIDDLEWARE_LENGTH = 5;
const DETAILS_LENGTH = 5;

const NOT_FOUND_ERROR = `Name not found` as const;

const PARSING_ERROR =
  `Invalid error code. Error code must be a number with ${FULL_CODE_LENGTH} digits. For example: 0010010010011.` as const;
const INVALID_CODE_ERROR =
  `Invalid error code. Error code must be a number that is included in the related enums.` as const;

function parseErrorCode(
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

  const detailsCode = parseInt(
    stringified.substring(index, index + DETAILS_LENGTH),
  );

  const routeName = Object.keys(routeMap).find(
    (key) => indexMap(routeMap, key) === routeCode,
  );
  const middlewareName = Object.keys(Middleware).find(
    (key: keyof typeof Middleware) =>
      indexMap(Middleware, key) === middlewareCode,
  );
  const details = detailsMap[detailsCode];
  // if (!routeName || !middlewareName || !serviceName) return ;
  return {
    route: { name: routeName ?? NOT_FOUND_ERROR, code: routeCode },
    middleware: {
      name: middlewareName ?? NOT_FOUND_ERROR,
      code: middlewareCode,
    },
    details: {
      code: detailsCode,
      data: details ?? {
        friendlyMessage: null,
        technichalReason: null,
      },
    },
  };
}
export {
  parseErrorCode,
  FULL_CODE_LENGTH,
  ROUTE_CODE_LENGTH,
  MIDDLEWARE_LENGTH,
  DETAILS_LENGTH,
};
