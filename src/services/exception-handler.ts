import { UserExceptions } from './user-exceptions';
import { BaseExceptions } from './base-exceptions';
import { OrganizationExceptions } from './organization-exceptions';

enum OrganizationType {
  Integrator = 'integrator',
  EndUser = 'end-user',
  Other = 'other',
}

class Exceptions<NextFunction> {
  constructor(
    private baseExceptions: BaseExceptions<NextFunction>,
    private userExceptions: UserExceptions<NextFunction>,
    private organizationExceptions: OrganizationExceptions<NextFunction>,
  ) {}

  /** Base Errors Start **/
  notFound = this.baseExceptions.notFound;
  duplicateException = this.baseExceptions.duplicateException;
  serverFailureException = this.baseExceptions.serverFailureException;
  unknownExposableException = this.baseExceptions.unknownExposableException;
  defaultValidationError = this.baseExceptions.defaultValidationError;
  validationError = this.baseExceptions.validationError;
  secretTokenNotFound = this.baseExceptions.secretTokenNotFound;
  badSecretToken = this.baseExceptions.badSecretToken;
  /** Base Errors End **/

  /** User Errors Start **/
  noToken = this.userExceptions.noToken;
  badToken = this.userExceptions.badToken;
  userNotVerified = this.userExceptions.userNotVerified;
  notCurrentUser = this.userExceptions.notCurrentUser;
  userNotAnAdmin = this.userExceptions.userNotAnAdmin;
  incorrectPassword = this.userExceptions.incorrectPassword;
  userNotFound = this.userExceptions.userNotFound;
  userNotInOrganization = this.userExceptions.userNotInOrganization;
  userAlreadyVerified = this.userExceptions.userAlreadyVerified;
  notPermittedTo = this.userExceptions.notPermittedTo;
  userNotIntegratorNorEndUser = this.userExceptions.userNotIntegratorNorEndUser;
  invalidAccessCode = this.userExceptions.invalidAccessCode;
  resetPasswordExpired = this.userExceptions.resetPasswordExpired;
  registrationExpired = this.userExceptions.registrationExpired;
  selfInvite = this.userExceptions.selfInvite;
  notificationDoesNotBelongToUser =
    this.userExceptions.notificationDoesNotBelongToUser;
  recipientAlreadyInOrg = this.userExceptions.recipientAlreadyInOrg;
  /** User Errors End **/

  /** Organization Errors Start **/
  notAssociatedWithDeployment =
    this.organizationExceptions.notAssociatedWithDeployment;
  endUserNotAssociatedWithIntegrator =
    this.organizationExceptions.endUserNotAssociatedWithIntegrator;
  organizationHasNoDeployments =
    this.organizationExceptions.organizationHasNoDeployments;
  recipientNotEntity = this.organizationExceptions.recipientNotEntity;
  orgNotExpectedType = this.organizationExceptions.orgNotExpectedType;
  selfDisassociateNotAllowed =
    this.organizationExceptions.selfDisassociateNotAllowed;
  organizationsNotAssociated =
    this.organizationExceptions.organizationsNotAssociated;
  adminMinimumRequirement = this.organizationExceptions.adminMinimumRequirement;
  organizationAlreadyAssociated =
    this.organizationExceptions.organizationAlreadyAssociated;
  /** Organization Errors End **/
}

export { OrganizationType, Exceptions };
