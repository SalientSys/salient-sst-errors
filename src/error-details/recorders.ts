import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const recordersErrorDetailsMap: IDetailsMap = {
  [Details.RecordersMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. No recorders found. Please contact support.',
    technichalReason:
      'The recorders were not found in the response.locals object',
  },

  [Details.RecorderDoesNotBelongToDeployment]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason: 'The recorder does not belong to the deployment',
  },
};
