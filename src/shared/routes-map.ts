import { RouteNames } from './enums';

export const routesMap = Object.values(RouteNames).reduce((acc, val, i) => {
  acc[val] = i + 100;
  return acc;
}, {} as Record<string, number>);
