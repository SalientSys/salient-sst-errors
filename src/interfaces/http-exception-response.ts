import { HttpStatusCode } from '../enums';

export interface IHttpErrorResponse {
  code: number;
  reason: string;
  status: HttpStatusCode;
}
