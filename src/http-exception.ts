import {
  generateErrorCode,
  HttpStatusCode,
  ErrorReason,
  DefaultErrorInfo,
  IErrorContext,
  generateErrorOriginCode,
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
    const routeCode = generateErrorOriginCode(context.route);

    const code = generateErrorCode(
      routeCode ?? DefaultErrorInfo.DefaultRoute,
      context.middleware,
      context.service,
    );
    this.code = code;
  }
}

export { HttpException };
