import { Services, Middlewares, generateErrorCode } from '../shared';
import { HttpException } from '../shared/exceptions';

/**
 * Hades was the king of the dead and brother to Zeus and Poseidon.
 * In Greek, Hades means “unseen,” and he wasn’t exactly known for being a fun guy.
 * Now he spends his time handling errors and making sure the end user knows how bad their inputs are.
 */
export class Hades {
  constructor(private errorOrigin: number, public middleware: number) {}

  //TODO:docs
  err(
    service: Services,
    status: number,
    reason: string,
    middleware: Middlewares = this.middleware,
  ) {
    const errorCode = generateErrorCode(
      this.errorOrigin,
      middleware ?? this.middleware,
      service,
    );
    //TODO: Transform the error code into a string based on the values in the enums; And Log it.
    return new HttpException(status, errorCode, reason);
  }
}
