import { RouteNames } from './enums';

/**
 * {[RouteNames]: number}
 */
const routesMap = Object.values(RouteNames).reduce((acc, val, i) => {
  acc[val] = i + 100;
  return acc;
}, {} as Record<string, number>);

export { routesMap };
