import { Details } from '..';
import { IDetailsMap } from '../interfaces';
export const authErrorDetails: IDetailsMap = {
  [Details.NoTokenFound]: {
    friendlyMessage: "Could not validate the user's session. No Token Found.",
    technichalReason:
      'Could not get the token from the req.headers.authorization',
  },

  [Details.NoTokenSecret]: {
    friendlyMessage: 'A Critical Server error has occurred.',
    technichalReason:
      'Could not get the token secret from the process.env.TOKEN_SECRET for token signing',
  },

  [Details.JwtVerifyFailed]: {
    friendlyMessage: "Could validate the user's session. No Token Found.",
    technichalReason: 'jwt.verify failed to verify the token, and errored out',
  },

  [Details.NoTokenAudience]: {
    friendlyMessage:
      'A Critical Server error has occurred. No audience on token.',
    technichalReason: '(in jwt.verify) The token.aud returned a falsy value',
  },
};
