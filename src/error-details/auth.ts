import { Details } from '..';
import { IDetailsMap } from '../interfaces';
export const authErrorDetails: IDetailsMap = {
  [Details.NoTokenFound]: {
    friendlyMessage: 'No token found',
    technichalReason:
      'Could not get the token from the req.headers.authorization',
  },

  [Details.NoTokenSecret]: {
    friendlyMessage: 'No token secret found',
    technichalReason:
      'Could not get the token secret from the process.env.TOKEN_SECRET for token signing',
  },

  [Details.JwtVerifyFailed]: {
    friendlyMessage: 'Bad token',
    technichalReason: 'jwt.verify failed to verify the token, and errored out',
  },

  [Details.NoTokenAudience]: {
    friendlyMessage: 'Bad token',
    technichalReason: '(in jwt.verify) The token.aud returned a falsy value',
  },
};
