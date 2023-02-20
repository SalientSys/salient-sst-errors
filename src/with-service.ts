import { Service } from "./enums";
import { IErrorContext } from "./interfaces";

// Returns the error context with the provided service
export const withService = (context: IErrorContext, serviceName: Service) => {
  context.service = serviceName;
  return context;
}
