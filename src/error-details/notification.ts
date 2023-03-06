import { Details } from '..';
import { IDetailsMap } from '../interfaces';

export const notificationDetailsMap: IDetailsMap = {
  [Details.NotificationMissingFromLocals]: {
    friendlyMessage: 'Notification missing from locals',
    technichalReason:
      'The notification was missing from the res.locals[notification], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.NotificationRequestorIdMissing]: {
    friendlyMessage: "The Notification's requestor is invalid",
    technichalReason:
      'The notification.requestorId was missing from the res.locals[notification], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.FailedToDeleteAdminNotification]: {
    friendlyMessage: 'Failed to delete notification',
    technichalReason: 'the deleteAdminNotifications function threw an error',
  },

  [Details.FailedToSaveNotification]: {
    friendlyMessage: 'Failed to save notification',
    technichalReason: 'the notification.save() function threw an error',
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
    friendlyMessage: 'Recipient email missing',
    technichalReason:
      'The recipient email was not found in the response.locals object, unless you have your middlewares set up incorrectly this should never happen',
  },

  [Details.SelfInviteNotAllowed]: {
    friendlyMessage: 'Self invite not allowed',
    technichalReason: 'The requestor and recipient are the same user',
  },

  [Details.RecipientOrganizationMissingFromLocals]: {
    friendlyMessage: 'Recipient organization missing',
    technichalReason:
      'The recipient organization was not found in the response.locals object',
  },

  [Details.NotificationAlreadyExists]: {
    friendlyMessage: 'Notification already exists',
    technichalReason:
      'The notification already exists in the database, this is a duplicate',
  },
};
