export interface IParsedError {
  route: {
    name: string;
    code: number;
  };
  middleware: {
    name: string;
    code: number;
  };
  service: {
    name: string;
    code: number;
  };
  errorReason: {
    name: string;
    code: number;
  };
}
