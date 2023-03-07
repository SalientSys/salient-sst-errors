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
  [Details.NotificationByIdNotFoundInDb]: {
    friendlyMessage: 'Notification was not found',
    technichalReason:
      'The notification by that id was not found in the database',
  },

  [Details.NotificationDoesNotBelongToUser]: {
    friendlyMessage: 'Notification does not belong to user',
    technichalReason: 'The notification does not belong to the user',
  },

  [Details.NotificationRequestorOrganizationIdMissingFromLocals]: {
    friendlyMessage: 'Notification requestor organization id missing',
    technichalReason:
      'The notification requestor organization id was not found in the response.locals object',
  },

  [Details.NotificationRequestorIdMissingFromLocals]: {
    friendlyMessage: 'Notification requestor id missing',
    technichalReason:
      'The notification requestor id was not found in the response.locals object',
  },
  [Details.NotificationAlreadyDeleted]: {
    friendlyMessage: 'Notification has already been deleted',
    technichalReason:
      'The notification has already been deleted, and cannot be deleted again',
  },
};
