import { Hades } from '../../services/hades';

export interface IExceptionService<NextFunction> {
  hades: Hades;
  next: NextFunction;
}
