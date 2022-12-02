import {
  Services,
  Middlewares,
  generateErrorCode,
  HttpStatusCode,
  ErrorReasons,
} from '../shared';
import { HttpException } from '../shared/exceptions';

/**
 * Hades was the king of the dead and brother to Zeus and Poseidon.
 * In Greek, Hades means “unseen,” and he wasn’t exactly known for being a fun guy.  //  * Now he spends his time handling errors and making sure the end user knows how bad their inputs are.
 */
export class Hades {
  constructor(private errorOrigin: number, public middleware: number) {}

  /**
   *
   * @param service The service the error originated from(e.g UsersService) Uses Services Enum
   * @param status The Status Code of the Error: Uses HttpStatusCodes Enum
   * @param reason The Reason behind the error: Uses ErrorReasons Enum
   * @param middleware The Middleware that the error originated from. By default you initialize this with the constructor but it's here optionally for extensibility
   * @returns HttpException class with the correct arguments ready to be passed into a next function
   */
  err(
    service: Services,
    status: HttpStatusCode,
    reason: ErrorReasons | string,
    middleware: Middlewares = this.middleware,
  ) {
    const errorCode = generateErrorCode(
      this.errorOrigin,
      middleware ?? this.middleware,
      service,
    );
    return new HttpException(status, errorCode, reason);
  }
}
