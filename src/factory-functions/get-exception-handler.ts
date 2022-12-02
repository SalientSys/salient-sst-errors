import { BaseExceptions } from '../services/base-exceptions';
import { Exceptions } from '../services/exception-handler';
import { Hades } from '../services/hades';
import { OrganizationExceptions } from '../services/organization-exceptions';
import { UserExceptions } from '../services/user-exceptions';
import { Middlewares } from '../shared';

export const getExceptionHandler = (
  middleware: Middlewares,
  errorOrigin: number,
  next: (...args: unknown[]) => void,
) => {
  const hades = new Hades(errorOrigin, middleware);
  const baseExceptions = new BaseExceptions(hades, next);
  const userExceptions = new UserExceptions(hades, next);
  const organizationExceptions = new OrganizationExceptions(hades, next);

  return new Exceptions(
    baseExceptions,
    userExceptions,
    organizationExceptions,
    hades,
    next,
  );
};
