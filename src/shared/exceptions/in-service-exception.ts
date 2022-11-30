import { Services, HttpStatusCode, ErrorReasons } from '../enums';
export class InServiceException {
  constructor(
    public service: Services,
    public status: HttpStatusCode,
    public reason: ErrorReasons | string,
  ) {}
}
