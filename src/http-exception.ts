import {
  generateErrorCode,
  HttpStatusCode,
  ErrorReason,
  DefaultErrorInfo,
  IErrorContext,
  routeMap,
  Details,
} from '.';

class HttpException {
  code: number;
  status: HttpStatusCode;
  reason: ErrorReason | string;
  details?: string;

  constructor(
    status: HttpStatusCode,
    context: IErrorContext,
    details?: string,
  ) {
    this.status = status;
    const routeCode = routeMap[context.route];
    const detailsCode = Details[context.details];

    const code = generateErrorCode(
      routeCode ?? DefaultErrorInfo.DefaultRoute,
      context.middleware,
      detailsCode,
    );

    this.code = code;
    this.details = details;
  }
}

export { HttpException };
