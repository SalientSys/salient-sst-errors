import { RouteName } from './enums';

/**
 * {[RouteNames]: number}
 */
const routeMap = Object.values(RouteName).reduce((acc, val, i) => {
  acc[val] = i + 100;
  return acc;
}, {} as Record<string, number>);

export { routeMap };
