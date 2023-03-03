import { Details, IDetailsMap } from '..';

export const usersErrorDetailsMap: IDetailsMap = {
  [Details.UserIdMissingFromLocals]: {
    friendlyMessage: 'Bad token',
    technichalReason: 'The userId was missing from the res.locals[userId]',
  },

  [Details.UserByIdNotFoundInDb]: {
    friendlyMessage: 'Bad token',
    technichalReason: 'The user was not found in the database',
  },

  [Details.UserMissingFromLocals]: {
    friendlyMessage: 'Server Failure',
    technichalReason:
      'The user was missing from the res.locals[user], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },
  [Details.UserNotAdmin]: {
    friendlyMessage:
      'You are not authorized to perform this action, you must be an admin',
    technichalReason: 'The user.permissions.role was not UserRoles.Admin',
  },
  [Details.UserHasNoOrgUpdateNotPermitted]: {
    friendlyMessage:
      'You are not authorized to perform this action, you must have an organization',
    technichalReason: 'organizationService.findByUserId returned a falsy value',
  },

  [Details.UserNotSalient]: {
    friendlyMessage: 'You are not authorized to perform this action',
    technichalReason: "The user's organization was not salient",
  },

  [Details.OrganizationByDeploymentIdNotFoundInDb]: {
    friendlyMessage: 'Organization was not found for deployment',
    technichalReason:
      'The organization was not found in the database with that deployment Id',
  },

  [Details.UserByEmailNotFoundInDb]: {
    friendlyMessage: 'User was not found',
    technichalReason:
      'getByEmail returned a falsy value for user with that email',
  },

  [Details.UserDoesNotBelongToCurrentOrganization]: {
    friendlyMessage: 'User does not belong to current organization',
    technichalReason:
      'The userId does not belong to the organization in the request',
  },
};
