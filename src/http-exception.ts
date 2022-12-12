import {
  generateErrorCode,
  HttpStatusCode,
  DefaultErrorInfo,
  IErrorContext,
  generateErrorOriginCode,
  generateErrorReasonCode,
  ErrorReason,
  parseErrorCode,
  errorReasonMap,
  friendlyMessages,
} from '.';

class HttpException {
  code: number;
  status: HttpStatusCode;
  reason: ErrorReason;

  constructor(
    status: HttpStatusCode,
    reason: ErrorReason,
    context: IErrorContext,
  ) {
    this.status = status;
    this.reason = reason;

    const routeCode = generateErrorOriginCode(context.route);
    const errorReasonCode = generateErrorReasonCode(reason);
    console.log(
      '🚀 ~ file: http-exception.ts:29 ~ HttpException ~ reason',
      reason,
    );
    console.log('error reason', errorReasonMap);
    console.log(
      '🚀 ~ file: http-exception.ts:29 ~ HttpException ~ errorReasonCode',
      errorReasonCode,
    );

    const code = generateErrorCode(
      routeCode ?? DefaultErrorInfo.DefaultRoute,
      context.middleware,
      context.service,
      errorReasonCode,
    );

    this.code = code;
    const translated = parseErrorCode(code);
    console.log(
      '🚀 ~ file: http-exception.ts:39 ~ HttpException ~ translated',
      translated,
    );
    if (typeof translated === 'string') return;

    const reasonCode = translated.errorReason.code;
    console.log(
      '🚀 ~ file: http-exception.ts:40 ~ HttpException ~ errorReason',
      translated.errorReason,
    );
    const friendlyMessage = friendlyMessages[translated.errorReason.name];
    console.log(
      '🚀 ~ file: http-exception.ts:61 ~ HttpException ~ friendlyMessage',
      friendlyMessage,
    );
  }
}

export { HttpException };
