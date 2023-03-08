import { Details } from '..';
import { IDetailsMap } from '../interfaces';
export const authErrorDetails: IDetailsMap = {
  [Details.NoTokenFound]: {
    friendlyMessage: 'Unable to authenticate request',
    technichalReason:
      'Could not get the token from the req.headers.authorization',
  },

  [Details.NoTokenSecret]: {
    friendlyMessage: 'Unable to authenticate request',
    technichalReason:
      'Could not get the token secret from the process.env.TOKEN_SECRET for token signing',
  },

  [Details.JwtVerifyFailed]: {
    friendlyMessage: 'Unable to authenticate request',
    technichalReason: 'jwt.verify failed to verify the token, and errored out',
  },

  [Details.NoTokenAudience]: {
    friendlyMessage: 'Unable to authenticate request',
    technichalReason: '(in jwt.verify) The token.aud returned a falsy value',
  },
};
