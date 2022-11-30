export class HttpException {
  status: number;
  errorCode: number;
  reason: string;
  constructor(status: number, errorCode: number, reason: string) {
    this.status = status;
    this.errorCode = errorCode;
    this.reason = reason;
  }
}
