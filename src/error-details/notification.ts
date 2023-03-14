import { Details } from '..';
import { IDetailsMap } from '../interfaces';

export const notificationDetailsMap: IDetailsMap = {
  [Details.NotificationMissingFromLocals]: {
    friendlyMessage:
      'The request could not be completed because the notification was not found in our system.',
    technichalReason:
      'The notification was missing from the res.locals[notification], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.NotificationRequestorIdMissing]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The notification.requestorId was missing from the res.locals[notification], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.FailedToDeleteAdminNotification]: {
    friendlyMessage: 'Unable to process request. Please contact support.',
    technichalReason: 'the deleteAdminNotifications function threw an error',
  },

  [Details.FailedToSaveNotification]: {
    friendlyMessage: 'Unable to process request. Please contact support.',
    technichalReason: 'the notification.save() function threw an error',
  },

  [Details.SelfInviteNotAllowed]: {
    friendlyMessage: 'Unable to process request. You cannot invite yourself.',
    technichalReason: 'The requestor and recipient are the same user',
  },

  [Details.RecipientOrganizationMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The recipient organization was not found in the response.locals object',
  },

  [Details.NotificationAlreadyExists]: {
    friendlyMessage:
      'The invitation is already in progress. Please wait before sending another notification.',
    technichalReason:
      'The notification already exists in the database, this is a duplicate',
  },
  [Details.NotificationByIdNotFoundInDb]: {
    friendlyMessage: 'Unable to process request. Notification was not found.',
    technichalReason:
      'The notification by that id was not found in the database',
  },

  [Details.NotificationRequestorOrganizationIdMissingFromLocals]: {
    friendlyMessage:
      'You need to be a member of an organization to perform this action. Either create an organization or join one.',
    technichalReason:
      'The notification requestor organization id was not found in the response.locals object',
  },

  [Details.NotificationRequestorIdMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The notification requestor id was not found in the response.locals object',
  },
  [Details.NotificationAlreadyDeleted]: {
    friendlyMessage:
      'The notification you are trying to delete has already been deleted. No further action is necessary.',
    technichalReason:
      'The notification has already been deleted, and cannot be deleted again',
  },

  [Details.NotificationAlreadyInProgress]: {
    friendlyMessage:
      'The notification you are trying to send is already in progress. Please wait for the notification to complete before sending it again.',
    technichalReason:
      'The notification has already been sent, and cannot be sent again',
  },

  [Details.AccessCodeMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The access code was not found in the response.locals object. Cannot send email!',
  },

  [Details.FailedToSendPasswordResetEmail]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The email failed to send. This is a server error, and should never happen. Check logs for more information.',
  },

  [Details.FailedToSendOrganizationAdminInviteEmail]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The email failed to send. This is a server error, and should never happen. Check logs for more information.',
  },

  [Details.FailedToSendUserRegistrationVerificationEmail]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The email failed to send. This is a server error, and should almost never happen. Check logs for more information.',
  },

  [Details.FailedToSendUserRegistrationReverificationEmail]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The email failed to send. This is a server error, and should almost never happen. Check logs for more information.',
  },
};
