import { detailCodeNames, Middleware, RouteName } from '../enums';

export interface IErrorContext {
  route?: RouteName;
  middleware?: Middleware;
  details?: detailCodeNames;
}
