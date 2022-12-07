import { Middleware, Service } from '../enums';

export interface IErrorContext {
  route: number;
  middleware: Middleware;
  service?: Service;
}
