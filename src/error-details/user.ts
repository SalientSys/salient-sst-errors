import { Details, IDetailsMap } from '..';

export const usersErrorDetailsMap: IDetailsMap = {
  [Details.UserIdMissingFromLocals]: {
    friendlyMessage: "Could not validate the user's session. No user id found.",
    technichalReason: 'The userId was missing from the res.locals[userId]',
  },

  [Details.UserByIdNotFoundInDb]: {
    friendlyMessage:
      "Could not validate the users's session. No user found with that id.", // AUTH ISSUE
    technichalReason: 'The user was not found in the database',
  },

  [Details.UserMissingFromLocals]: {
    friendlyMessage:
      'The request could not be completed because the user was not found in our system.',
    technichalReason:
      'The user was missing from the res.locals[user], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.UserNotAdmin]: {
    friendlyMessage: 'This action requires you to be an organization admin.',
    technichalReason: 'The user.permissions.role was not UserRoles.Admin',
  },

  [Details.UserHasNoOrgUpdateNotPermitted]: {
    friendlyMessage:
      'This action requires you to be a member of an organization. Either create an organization or join one to enable this action', // PERMISSION ERROR
    technichalReason: 'organizationService.findByUserId returned a falsy value',
  },

  [Details.UserNotSalient]: {
    friendlyMessage: 'The action requires you to be an SCS admin.',
    technichalReason: "The user's organization was not salient",
  },

  [Details.UserByEmailNotFoundInDb]: {
    friendlyMessage:
      'Unable to validate the user has an existing Salient Cloud Services account.',
    technichalReason:
      'getByEmail returned a falsy value for user with that email',
  },

  [Details.UserDoesNotBelongToCurrentOrganization]: {
    friendlyMessage:
      'This action requires the user to be a part of your organization. Invite them to your organization to enable it.',
    technichalReason:
      'The userId does not belong to the organization in the request, this should almost never happen from the client side.',
  },

  [Details.UserNotVerified]: {
    friendlyMessage:
      'Could not login. Please verify your email before trying again.', // mention how to verify email.
    technichalReason:
      'The user.registration.isEmailVerified was false or user.registration.activeRegistration exists',
  },

  [Details.UserPendingVerification]: {
    friendlyMessage:
      'Could not login. Please complete your registration before trying again.',
    technichalReason:
      'The user.registration.activeRegistration exists in the database',
  },

  [Details.InvalidPassword]: {
    friendlyMessage:
      'Invalid email or password. Please try again or reset password.',
    technichalReason:
      'The password did not match the password in the database after bcrypt.compare()',
  },

  [Details.FailedToSaveUser]: {
    friendlyMessage:
      'A Critical Server error has occurred. Please contact support',
    technichalReason: 'The user.save() method threw an error!',
  },

  [Details.UserPasswordResetNotFoundInDb]: {
    friendlyMessage:
      'The password reset request was not found in our system. Please try again and if the problem persists, contact support.',
    technichalReason:
      'The user.passwordReset field was not found in the database.',
  },

  [Details.InvalidPasswordResetAccessCode]: {
    friendlyMessage:
      'There was an error processing your request. Please Contact support for assitance.',
    technichalReason:
      'The access code did not match the access code in the database',
  },

  [Details.PasswordResetAccessTokenExpired]: {
    friendlyMessage:
      'Sorry, it seems like the link you used to reset your password has expired. Please request a new link to reset your password.',
    technichalReason: 'The password reset access token has expired',
  },

  [Details.FailedToGenerateHashedPassword]: {
    friendlyMessage:
      'A Critical Server error has occurred. Please contact support.',
    technichalReason:
      'The bcrypt.hash() method threw an error, this should almost never happen',
  },

  [Details.UserAlreadyVerified]: {
    friendlyMessage:
      'Sorry, it seems like this email address is already registered and verified in our system. Please try logging in or use a different email address to create a new account.',
    technichalReason: 'The user.registration.isEmailVerified was true',
  },

  [Details.InvalidRegistrationAccessCode]: {
    friendlyMessage:
      'There was an error processing your request. Please Contact support for assitance.',
    technichalReason:
      'The access code did not match the access code in the database',
  },

  [Details.RegistrationAccessCodeExpired]: {
    friendlyMessage:
      'The registration link you are accessing expired. Please complete the registration process again.',
    technichalReason: 'The registration access code has expired',
  },

  [Details.UserActiveRegistrationMissing]: {
    friendlyMessage:
      'The account associated with this activation link does not exist. Please complete the registration process again.',
    technichalReason:
      'The user.registration.activeRegistration was not found in the database',
  },

  [Details.UserNotInRequestedOrganization]: {
    friendlyMessage: 'You do not have permissions to perform this action.',
    technichalReason:
      "User's organization does not match organization you are trying to modify. This may be malicious.",
  },

  [Details.UserRegistrationVerificationAlreadyInProgress]: {
    friendlyMessage: 'A verification email has already been sent to this email',
    technichalReason: 'The recipient email was found in the memory cache',
  },

  [Details.UserNotIntegratorNorEndUser]: {
    friendlyMessage:
      'A Critical Server error has occurred. Please contact support',
    technichalReason:
      'The user organization type is neither integrator nor end user, if a customer is facing this, they most likely have an invalid organization type',
  },

  [Details.UserNotIntegrator]: {
    friendlyMessage:
      'The action requires you to be a member of an Integrator organization.',
    technichalReason: 'The user organization type is not integrator',
  },

  [Details.UserNotEndUser]: {
    friendlyMessage:
      'The action requires you to be a member of an End User organization.',
    technichalReason: 'The user organization type is not end user',
  },

  [Details.UserIdParamMissing]: {
    friendlyMessage:
      'There was an error processing the request. Verify the url is correct or contact support.',
    technichalReason: 'The userId was missing from the req.params[userId]',
  },

  [Details.UserIdIsNotCurrentUser]: {
    friendlyMessage:
      'There was an error processing the request. Verify the url is correct or contact support.',
    technichalReason: 'The userId in the params is not the current user',
  },
};
