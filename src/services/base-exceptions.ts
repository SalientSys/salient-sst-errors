import { Hades } from './hades';
import {
  Next,
  Services,
  HttpStatusCode,
  ErrorReasons,
  InServiceException,
} from '../shared';

export class BaseExceptions<NextFunction> {
  constructor(public hades: Hades, public next: NextFunction) {}

  @Next
  notFound(entity: string, service: Services) {
    return this.hades.err(
      service,
      HttpStatusCode.NotFound,
      `${entity} was not found!`,
    );
  }

  @Next
  duplicateException(entity: string) {
    return this.hades.err(
      Services.CacheService,
      HttpStatusCode.Conflict,
      `${entity} is already in use`,
    );
  }

  @Next
  serverFailureException() {
    return this.hades.err(
      Services.Server,
      HttpStatusCode.InternalServerError,
      ErrorReasons.InternalServerFailure,
    );
  }

  @Next
  unknownExposableException(err: unknown) {
    return err instanceof InServiceException
      ? this.hades.err(err.service, err.status, err.reason)
      : this.serverFailureException();
  }

  @Next
  defaultValidationError() {
    return this.hades.err(
      Services.ValidationService,
      HttpStatusCode.InternalServerError,
      ErrorReasons.DefaultValidationError,
    );
  }

  @Next
  validationError(errors: string) {
    return this.hades.err(
      Services.ValidationService,
      HttpStatusCode.BadRequest,
      errors,
    );
  }

  @Next
  secretTokenNotFound() {
    return this.hades.err(
      Services.RequestHeadersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.SecretTokenNotFound,
    );
  }

  @Next
  badSecretToken() {
    return this.hades.err(
      Services.RequestHeadersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.BadSecretToken,
    );
  }
}
