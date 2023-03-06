import { IDetails } from './details.interface';

export interface IParsedError {
  route: {
    name: string;
    code: number;
  };
  middleware: {
    name: string;
    code: number;
  };
  details: {
    code: number;
    details: IDetails;
  };
}
