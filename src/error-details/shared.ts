import { Details } from '..';
import { IDetailsMap } from '../interfaces';
export const sharedErrorDetailsMap: IDetailsMap = {
  [Details.ValidationError]: {
    friendlyMessage:
      'The data submitted was invalid. Please fix errors or contact support.',
    technichalReason:
      'Validation did not pass through the validation middlware given the DTO, response.body should have a details property with the errors',
  },

  [Details.UndefinedParam]: {
    friendlyMessage: 'The request submitted is missing a route parameter.',
    technichalReason:
      'The parameter passed in the url is undefined or invalid for getParamByUrlParam',
  },

  [Details.InvalidSubsetSelection]: {
    friendlyMessage: 'Invalid route request. Verify the url is correct.',
    technichalReason: 'validateParamPath returned a falsy value.',
  },

  [Details.ParamQueryNull]: {
    friendlyMessage:
      'Invalid route request. The object requested may not exist. Verify the url is correct.',
    technichalReason:
      'The query returned null from findByIdService.findByIdPartial or findByIdService.findDocumentById',
  },

  [Details.ParamQueryError]: {
    friendlyMessage:
      'There was an error retrieving the requested object. Verify the url is correct or contact support.',
    technichalReason:
      'The query returned an error from findByIdService.findByIdPartial or findByIdService.findDocumentById',
  },

  [Details.SubParamNotFound]: {
    friendlyMessage:
      'Invalid route request. The object requested may not exist. Verify the url is correct.',
    technichalReason:
      'The sub param was not found in the object passed to getParamByUrlParam',
  },

  [Details.EmailDeliveryFailure]: {
    friendlyMessage:
      'An email could not be submitted for the requested action. Please contact support for assistance.',
    technichalReason:
      'The tryCatch in sendEmail in the EmailController threw an error',
  },

  [Details.ReadNotPermitted]: {
    friendlyMessage: 'You do not have permission to view this resource.',
    technichalReason:
      'The user does not have read permissions for the requested resource and the strict flag is set to true',
  },

  [Details.DeleteNotPermitted]: {
    friendlyMessage: 'You do not have permission to delete this resource.',
    technichalReason:
      'The user does not have delete permissions for the requested resource and the strict flag is set to true',
  },

  [Details.UpdateNotPermitted]: {
    friendlyMessage: 'You do not have permission to update this resource.',
    technichalReason:
      'The user does not have update permissions for the requested resource and the strict flag is set to true',
  },

  [Details.CreateNotPermitted]: {
    friendlyMessage: 'You do not have permission to create this resource.',
    technichalReason:
      'The user does not have create permissions for the requested resource and the strict flag is set to true',
  },

  [Details.UpdateQueryResultUndefined]: {
    friendlyMessage:
      'There was an error updating the requested object. Verify the url is correct or contact support.',
    technichalReason:
      'The updateService.updateById returned undefined when trying to update the object',
  },

  [Details.RecipientMissingFromLocals]: {
    friendlyMessage:
      'Unable to validate the user has an existing Salient Cloud Services account.',
    technichalReason:
      'The recipient was not found in the response.locals object, Can be thrown if an email is not found in our database.',
  },

  [Details.RecipientEmailInMemoryCache]: {
    friendlyMessage: 'A pending invitation was found for this email address.',
    technichalReason:
      'The recipient email was found in the memory cache, this is often caused by duplicate requests.',
  },

  [Details.RecipientEmailMissingFromLocals]: {
    friendlyMessage:
      'Unable to validate the user has an existing Salient Cloud Services account.',
    technichalReason:
      'The recipient email was not found in the response.locals object, Can be thrown if an email is not found in our database.',
  },

  [Details.SuspiciousRequestor]: {
    friendlyMessage:
      'You have reached the maximum number of requests. Please wait 24 hours before trying again or contact support.',
    technichalReason: 'The requestor is engaging in suspicious behavior',
  },

  [Details.FailedToUpdateObject]: {
    friendlyMessage:
      'A critical server error occurred when updating the object. Please try again or contact support if the problem persists.',
    technichalReason:
      'The updateService.updateById returned undefined when trying to update the object',
  },
};
