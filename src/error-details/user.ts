import { Details, IDetailsMap } from '..';

export const usersErrorDetailsMap: IDetailsMap = {
  [Details.UserIdMissingFromLocals]: {
    friendlyMessage: 'User Id was not found',
    technichalReason: 'The userId was missing from the res.locals[userId]',
  },

  [Details.UserByIdNotFoundInDb]: {
    friendlyMessage: 'The user was not found in our system',
    technichalReason: 'The user was not found in the database',
  },

  [Details.UserMissingFromLocals]: {
    friendlyMessage: 'User was not found',
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

  [Details.UserNotVerified]: {
    friendlyMessage: 'User is not verified',
    technichalReason:
      'The user.registration.isEmailVerified was false or user.registration.activeRegistration exists',
  },
  [Details.UserPendingVerification]: {
    friendlyMessage: 'User has an active registration',
    technichalReason:
      'The user.registration.activeRegistration exists in the database',
  },

  [Details.InvalidPassword]: {
    friendlyMessage: 'Invalid password',
    technichalReason:
      'The password did not match the password in the database after bcrypt.compare()',
  },

  [Details.FailedToSaveUser]: {
    friendlyMessage: 'Failed to save user',
    technichalReason: 'The user.save() method threw an error!',
  },

  [Details.UserPasswordResetNotFoundInDb]: {
    friendlyMessage: 'Invalid user',
    technichalReason:
      'The user.passwordReset field was not found in the database, this should almost never happen with a valid user',
  },

  [Details.InvalidPasswordResetAccessCode]: {
    friendlyMessage: 'Invalid access code',
    technichalReason:
      'The access code did not match the access code in the database',
  },

  [Details.PasswordResetAccessTokenExpired]: {
    friendlyMessage: 'Password reset access token expired',
    technichalReason: 'The password reset access token has expired',
  },

  [Details.FailedToGenerateHashedPassword]: {
    friendlyMessage: 'Failed to generate hashed password',
    technichalReason:
      'The bcrypt.hash() method threw an error, this should almost never happen',
  },

  [Details.UserAlreadyVerified]: {
    friendlyMessage: 'User is already verified',
    technichalReason: 'The user.registration.isEmailVerified was true',
  },

  [Details.InvalidRegistrationAccessCode]: {
    friendlyMessage: 'Invalid access code',
    technichalReason:
      'The access code did not match the access code in the database',
  },

  [Details.RegistrationAccessCodeExpired]: {
    friendlyMessage: 'Registration access code expired',
    technichalReason: 'The registration access code has expired',
  },

  [Details.UserActiveRegistrationMissing]: {
    friendlyMessage: 'User is not in active registration',
    technichalReason:
      'The user.registration.activeRegistration was not found in the database',
  },

  [Details.UserNotInRequestedOrganization]: {
    friendlyMessage: 'User is not in your organization',
    technichalReason: 'The user does not belong to the requested organization',
  },

  [Details.UserRegistrationVerificationAlreadyInProgress]: {
    friendlyMessage: 'Recipient email in memory cache',
    technichalReason: 'The recipient email was found in the memory cache',
  },

  [Details.UserNotIntegratorNorEndUser]: {
    friendlyMessage: 'You must be either an integrator or an end user',
    technichalReason:
      'The user organization type is neither integrator nor end user',
  },

  [Details.UserNotIntegrator]: {
    friendlyMessage: 'You must be an integrator',
    technichalReason: 'The user organization type is not integrator',
  },

  [Details.UserNotEndUser]: {
    friendlyMessage: 'You must be an end user',
    technichalReason: 'The user organization type is not end user',
  },
};
