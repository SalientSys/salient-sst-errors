import {
  deploymentsErrorDetailsMap,
  usersErrorDetailsMap,
  organizationDetailsMap,
  sharedErrorDetailsMap,
  recordersErrorDetailsMap,
} from './error-details';
import { gatewayErrorDetailsMap } from './error-details/gateway';
import { IDetailsMap } from './interfaces';

export const detailsMap: IDetailsMap = {
  ...sharedErrorDetailsMap,
  ...organizationDetailsMap,
  ...usersErrorDetailsMap,
  ...deploymentsErrorDetailsMap,
  ...recordersErrorDetailsMap,
  ...gatewayErrorDetailsMap,
};
