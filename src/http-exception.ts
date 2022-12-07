import {
  generateErrorCode,
  HttpStatusCode,
  ErrorReason,
  DefaultErrorInfo,
  IErrorContext,
} from '.';

class HttpException {
  code: number;
  status: HttpStatusCode;
  reason: ErrorReason | string;

  constructor(
    status: HttpStatusCode,
    reason: ErrorReason | string,
    context: IErrorContext,
  ) {
    this.status = status;
    this.reason = reason;

    const code = generateErrorCode(
      context.route ?? DefaultErrorInfo.DefaultRoute,
      context.middleware,
      context.service,
    );
    this.code = code;
  }
}

export { HttpException };
