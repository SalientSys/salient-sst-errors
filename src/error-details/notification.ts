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
};
