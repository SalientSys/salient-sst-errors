import { Details } from '..';
import { IDetailsMap } from '../interfaces';
export const sharedErrorDetailsMap: IDetailsMap = {
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

  [Details.ValidationError]: {
    friendlyMessage: 'An issue with validating the submitted data has occurred',
    technichalReason:
      'Validation did not pass through the validation middlware given the DTO, response.body should have a details property with the errors',
  },

  [Details.UndefinedParam]: {
    friendlyMessage: 'Invalid parameter',
    technichalReason:
      'The parameter passed in the url is undefined or invalid for getParamByUrlParam',
  },

  [Details.InvalidSubsetSelection]: {
    friendlyMessage:
      'parameter you are trying to access is not valid subset of object',
    technichalReason: 'validateParamPath returned a falsy value.',
  },

  [Details.ParamQueryNull]: {
    friendlyMessage: 'param query returned null',
    technichalReason:
      'The query returned null from findByIdService.findByIdPartial or findByIdService.findDocumentById',
  },

  [Details.ParamQueryError]: {
    friendlyMessage: 'param query error',
    technichalReason:
      'The query returned an error from findByIdService.findByIdPartial or findByIdService.findDocumentById',
  },

  [Details.SubParamNotFound]: {
    friendlyMessage: 'sub param not found',
    technichalReason:
      'The sub param was not found in the object passed to getParamByUrlParam',
  },

  [Details.EmailDeliveryFailure]: {
    friendlyMessage: 'Email delivery failed',
    technichalReason:
      'The tryCatch in sendEmail in the EmailController threw an error',
  },

  [Details.ReadNotPermitted]: {
    friendlyMessage: 'You do not have permission to view this resource',
    technichalReason:
      'The user does not have read permissions for the requested resource and the strict flag is set to true',
  },

  [Details.DeleteNotPermitted]: {
    friendlyMessage: 'You do not have permission to delete this resource',
    technichalReason:
      'The user does not have delete permissions for the requested resource and the strict flag is set to true',
  },

  [Details.UpdateNotPermitted]: {
    friendlyMessage: 'You do not have permission to update this resource',
    technichalReason:
      'The user does not have update permissions for the requested resource and the strict flag is set to true',
  },

  [Details.CreateNotPermitted]: {
    friendlyMessage: 'You do not have permission to create this resource',
    technichalReason:
      'The user does not have create permissions for the requested resource and the strict flag is set to true',
  },

  [Details.UpdateQueryResultUndefined]: {
    friendlyMessage: 'Update query result was not found',
    technichalReason:
      'The updateService.updateById returned undefined when trying to update the object',
  },

  [Details.RecipientMissingFromLocals]: {
    friendlyMessage: 'Recipient missing from locals',
    technichalReason:
      'The recipient was not found in the response.locals object, unless you have your middlewares set up incorrectly this should never happen',
  },

  [Details.RecipientEmailInMemoryCache]: {
    friendlyMessage: 'Recipient email in memory cache',
    technichalReason: 'The recipient email was found in the memory cache',
  },

  [Details.RecipientEmailMissingFromLocals]: {
    friendlyMessage: 'Recipient email missing from locals',
    technichalReason:
      'The recipient email was not found in the response.locals object, unless you have your middlewares set up incorrectly this should never happen',
  },

  [Details.SuspiciousRequestor]: {
    friendlyMessage: 'Suspicious requestor',
    technichalReason: 'The requestor is engaging in suspicious behavior',
  },

  [Details.FailedToUpdateObject]: {
    friendlyMessage: 'Failed to update object',
    technichalReason:
      'The updateService.updateById threw an error when trying to update the object',
  },
};
