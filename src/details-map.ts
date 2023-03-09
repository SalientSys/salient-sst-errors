import {
  deploymentsErrorDetailsMap,
  usersErrorDetailsMap,
  organizationDetailsMap,
  sharedErrorDetailsMap,
  recordersErrorDetailsMap,
} from './error-details';
import { authErrorDetails } from './error-details/auth';
import { gatewayErrorDetailsMap } from './error-details/gateway';
import { notificationDetailsMap } from './error-details/notification';
import { IDetailsMap } from './interfaces';

export const detailsMap: IDetailsMap = {
  ...sharedErrorDetailsMap, //DONE
  ...authErrorDetails, //DONE
  ...organizationDetailsMap, //DONE
  ...usersErrorDetailsMap, //DONE
  ...deploymentsErrorDetailsMap, //DONE
  ...recordersErrorDetailsMap, // DONE
  ...gatewayErrorDetailsMap,
  ...notificationDetailsMap,
};
