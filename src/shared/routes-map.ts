import { DefaultErrorCodes, RouteNames } from './enums';

const routesMap = Object.values(RouteNames).reduce((acc, val, i) => {
  acc[val] = i + 100;
  return acc;
}, {} as Record<string, number>);

routesMap['/default-error-code-route'] = DefaultErrorCodes.ErrorOrigin;

export { routesMap };
