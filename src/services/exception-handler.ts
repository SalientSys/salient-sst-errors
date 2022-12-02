import { UserExceptions } from './user-exceptions';
import { BaseExceptions } from './base-exceptions';
import { OrganizationExceptions } from './organization-exceptions';
import { Hades } from './hades';

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
    public hades: Hades,
    public next: NextFunction,
  ) {}

  /** Base Errors Start **/
  /**
   * Service: @param service
   * Reason: @param entity was not found
   * Status: 404
   */
  notFound = this.baseExceptions.notFound;
  /**
   * Service: CacheService
   * Reason: @param entity is already in use
   * Status: 409
   */
  duplicateException = this.baseExceptions.duplicateException;
  /**
   * Service: Server
   * Reason: Internal Server Failure
   * Status: 500
   */
  serverFailureException = this.baseExceptions.serverFailureException;
  /**
   * This method can be used in the catch block of a try/catch statement
   * to handle any exception that is thrown using the throw errorHandler.{exception} methods;
   */
  unknownExposableException = this.baseExceptions.unknownExposableException;
  /**
   * The default validation error is thrown when the validation service errors out in prod
   */
  defaultValidationError = this.baseExceptions.defaultValidationError;
  /**
   * Validation error when validation fails in dev
   */
  validationError = this.baseExceptions.validationError;
  /**
   * Service: RequestHeadersService
   * Reason: SecretTokenNotFound
   * Status: 403
   */
  secretTokenNotFound = this.baseExceptions.secretTokenNotFound;
  /**
   * Service: RequestHeadersService
   * Reason: BadSecretToken
   * Status: 403
   */
  badSecretToken = this.baseExceptions.badSecretToken;

  /** Base Errors End **/

  /** User Errors Start **/
  /**
   * Service: AuthUtils
   * Reason: NoToken
   * Status: 401
   */
  noToken = this.userExceptions.noToken;
  /**
   * Service: Bcrypt
   * Reason: BadToken
   * Status: 403
   */
  badToken = this.userExceptions.badToken;
  /**
   * Service: UsersService
   * Reason: UserNotVerified
   * Status: 401
   */
  userNotVerified = this.userExceptions.userNotVerified;

  /**
   * Service: UsersService
   * Reason: NotCurrentUser
   * Status: 403
   */
  notCurrentUser = this.userExceptions.notCurrentUser;
  /**
   * Service: UsersService
   * Reason: UserNotAdmin
   * Status: 403
   */
  userNotAnAdmin = this.userExceptions.userNotAnAdmin;
  /**
   * Service: UsersService
   * Reason: IncorrectPassword
   * Status: 401
   */
  incorrectPassword = this.userExceptions.incorrectPassword;
  /**
   * Service: UsersService
   * Reason: UserNotFound
   * Status: 404
   */
  userNotFound = this.userExceptions.userNotFound;
  /**
   * Service: UsersService
   * Reason: UserNotInOrganization
   * Status: 403
   */
  userNotInOrganization = this.userExceptions.userNotInOrganization;
  /**
   * Service: UsersService
   * Reason: UserAlreadyVerified
   * Status: 409
   */
  userAlreadyVerified = this.userExceptions.userAlreadyVerified;
  /**
   * Service: UsersService
   * Reason: NotPermittedTo
   * Status: 403
   */
  notPermittedTo = this.userExceptions.notPermittedTo;

  /**
   * Service: UsersService
   * Reason: InvalidAccessCode
   * Status: 401
   */
  invalidAccessCode = this.userExceptions.invalidAccessCode;
  /**
   * Service: UsersService
   * Reason: ResetPasswordExpired
   * Status: 403
   */
  resetPasswordExpired = this.userExceptions.resetPasswordExpired;
  /**
   * Service: UsersService
   * Reason: RegistrationExpired
   * Status: 403
   */
  registrationExpired = this.userExceptions.registrationExpired;
  /**
   * Service: UsersService
   * Reason: SelfInvite
   * Status: 409
   */
  selfInvite = this.userExceptions.selfInvite;
  /**
   * Service: UsersService
   * Reason: NotificationDoesNotBelongToUser
   * Status: 403
   */
  notificationDoesNotBelongToUser =
    this.userExceptions.notificationDoesNotBelongToUser;
  /**
   * Service: UsersService
   * Reason: RecipientAlreadyInOrg
   * Status: 409
   */
  recipientAlreadyInOrg = this.userExceptions.recipientAlreadyInOrg;
  /** User Errors End **/

  /** Organization Errors Start **/

  /**
   * Service: OrganizationService
   * Reason: OrganizationNotIntegratorNorEndUser
   * Status: 403
   */
  userNotIntegratorNorEndUser =
    this.organizationExceptions.userNotIntegratorNorEndUser;
  /**
   * Service: OrganizationService
   * Reason: NotAssociatedWithDeployment
   * Status: 409
   */
  notAssociatedWithDeployment =
    this.organizationExceptions.notAssociatedWithDeployment;

  /**
   * Service: OrganizationService
   * Reason: EndUserNotAssociatedWithIntegrator
   * Status: 409
   */
  endUserNotAssociatedWithIntegrator =
    this.organizationExceptions.endUserNotAssociatedWithIntegrator;

  /**
   * Service: OrganizationService
   * Reason: OrganizationHasNoDeployments
   * Status: 403
   */
  organizationHasNoDeployments =
    this.organizationExceptions.organizationHasNoDeployments;

  /**
   * Service: OrganizationService
   * Reason: RecipientNot(@param entity)
   * Status: 403
   */
  recipientNotEntity = this.organizationExceptions.recipientNotEntity;

  /**
   * Service: OrganizationService
   * Reason: OrgMustBe(@param expectedOrg)
   * Status: 403
   */
  orgNotExpectedType = this.organizationExceptions.orgNotExpectedType;
  /**
   * Service: OrganizationService
   * Reason: SelfDisassociationNotAllowed
   * Status: 405 (method not allowed)
   */

  selfDisassociateNotAllowed =
    this.organizationExceptions.selfDisassociateNotAllowed;
  /**
   * Service: OrganizationService
   * Reason: OrganizationNotAssociated
   * Status: 404
   */
  organizationsNotAssociated =
    this.organizationExceptions.organizationsNotAssociated;

  /**
   * Service: OrganizationService
   * Reason: AdminMinimumRequirement
   * Status: 403
   */
  adminMinimumRequirement = this.organizationExceptions.adminMinimumRequirement;
  /**
   * Service: OrganizationService
   * Reason: OrganizationsAlreadyAssociated
   * Status: 409
   */
  organizationAlreadyAssociated =
    this.organizationExceptions.organizationAlreadyAssociated;
  /** Organization Errors End **/
}

export { OrganizationType, Exceptions };
