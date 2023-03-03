import {
  deploymentsErrorDetailsMap,
  usersErrorDetailsMap,
  organizationDetailsMap,
  sharedErrorDetailsMap,
  recordersErrorDetailsMap,
} from './error-details';
import { authErrorDetails } from './error-details/auth';
import { gatewayErrorDetailsMap } from './error-details/gateway';
import { IDetailsMap } from './interfaces';

export const detailsMap: IDetailsMap = {
  ...sharedErrorDetailsMap,
  ...authErrorDetails,
  ...organizationDetailsMap,
  ...usersErrorDetailsMap,
  ...deploymentsErrorDetailsMap,
  ...recordersErrorDetailsMap,
  ...gatewayErrorDetailsMap,
};
