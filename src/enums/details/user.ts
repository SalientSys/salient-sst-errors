export const User = [
  'UserIdMissingFromLocals',
  'UserByIdNotFoundInDb',
  'UserMissingFromLocals',
  'UserNotAdmin',
  'UserHasNoOrgUpdateNotPermitted',
  'UserNotSalient',
  'UserByEmailNotFoundInDb',
  'UserDoesNotBelongToCurrentOrganization',
  'UserAlreadyVerified',
  'UserActiveRegistrationMissing',
  'InvalidRegistrationAccessCode',
  'RegistrationAccessCodeExpired',
  'UserNotVerified',
  'InvalidPassword',
  'FailedToSaveUser',
  'UserPasswordResetNotFoundInDb',
  'InvalidPasswordResetAccessCode',
  'PasswordResetAccessTokenExpired',
  'FailedToGenerateHashedPassword',
  'UserPendingVerification',
  'UserNotInRequestedOrganization',
  'UserRegistrationVerificationAlreadyInProgress',
  'UserNotIntegratorNorEndUser',
  'UserNotIntegrator',
  'UserNotEndUser',
  'UserIdParamMissing',
  'UserIdIsNotCurrentUser',
  'CommercialEmailFlagAccessCodeInvalid',
] as const;
