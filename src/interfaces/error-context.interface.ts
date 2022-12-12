import { Middleware, RouteName, Service } from '../enums';

export interface IErrorContext {
  route: RouteName;
  middleware: Middleware;
  service?: Service;
}
