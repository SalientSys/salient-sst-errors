import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const recordersErrorDetailsMap: IDetailsMap = {
  [Details.RecordersMissingFromLocals]: {
    friendlyMessage: 'Recorders missing from locals',
    technichalReason: 'The recorders were not found in the response.locals ',
  },
};
