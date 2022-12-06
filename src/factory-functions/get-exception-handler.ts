import { BaseExceptions } from '../services/base-exceptions';
import { Exceptions } from '../services/exception-handler';
import { OrganizationExceptions } from '../services/organization-exceptions';
import { UserExceptions } from '../services/user-exceptions';
const baseExceptions = new BaseExceptions();
const userExceptions = new UserExceptions();
const organizationExceptions = new OrganizationExceptions();
/**
 * The Global Exception Handler, Connecting all the services into one neatly packaged object.
 */
export const exH = new Exceptions(
  baseExceptions,
  userExceptions,
  organizationExceptions,
);
