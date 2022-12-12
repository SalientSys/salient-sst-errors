import { ErrorReason, RouteName } from './enums';
import { mapEnumToNumericalValues } from './utils/enum-mapper';

// create constants for the prefix values of each enum
const ROUTE_PREFIX = 100;
const ERROR_REASON_PREFIX = 100;

/**
 * {[RouteNames]: number}
 */
const routeMap = mapEnumToNumericalValues(RouteName, ROUTE_PREFIX);
// default 999 route for errors that happen before we reach a setErrorOrigin middleware
routeMap['default-error-origin'] = 999;

/**
 * {[ErrorReason.Value]: number}
 */
const errorReasonMap = Object.keys(ErrorReason)
  .filter((key) => isNaN(Number(key)))
  .reduce((acc, val, i) => {
    acc[val] = i + ERROR_REASON_PREFIX;
    return acc;
  }, {} as Record<string, number>);

const friendlyMessages: {
  [key in ErrorReason]: string;
} = {
  [ErrorReason.DefaultValidationError]:
    'Errors occurred during response body validation',
  [ErrorReason.UserNotFound]: 'User does not exist!',
  [ErrorReason.UserNotVerified]: 'User is not verified!',
  [ErrorReason.NotCurrentUser]: `userId is not the current user's Id`,
  [ErrorReason.IncorrectPassword]: 'Incorrect password',
  [ErrorReason.InternalServerFailure]: 'Internal Server Failure',
  [ErrorReason.InvalidAccessCode]: 'Invalid Access Code',
  [ErrorReason.ResetPasswordExpired]: 'Reset password expired',
  [ErrorReason.UserNotAdmin]: 'User must be an admin for this action',
  [ErrorReason.BadToken]: 'Bad Auth Data',
  [ErrorReason.NoToken]: 'No Auth Data',
  [ErrorReason.UserAlreadyVerified]:
    'User with requested email has already been verified',
  [ErrorReason.RegistrationExpired]: 'Registration expired',
  [ErrorReason.UserNotInOrganization]:
    'User does not belong to an organization',
  [ErrorReason.SelfInvite]: 'Invite to self cannot be done',
  [ErrorReason.UserNotIntegratorNorEndUser]:
    'User is not an integrator nor an end-user!',
  [ErrorReason.NotificationDoesNotBelongToUser]: `Notification doesn't belong to this user`,
  [ErrorReason.RecipientAlreadyInOrg]: `User is already in an organization`,
  [ErrorReason.OrganizationHasNoDeployments]: `Organization has no deployment.`,
  [ErrorReason.RecipientNotIntegrator]: `Recipient is not an integrator`,
  [ErrorReason.RecipientNotEndUser]: `Recipient is not an end-user`,
  [ErrorReason.RecipientNotSalientAdmin]: `Recipient is not a salient admin`,
  [ErrorReason.DeploymentsAlreadyAssociated]: `Deployments are already associated`,
  [ErrorReason.RecipientAssociatedWithRequestorOrg]: `Recipient is already associated with requestor's organization.`,
  [ErrorReason.RecipientAssociatedWithRequestedOrg]: `Recipient is already associated with requested organization.`,
  [ErrorReason.OrganizationsAlreadyAssociated]:
    'These organizations are already associated with each other.',
  [ErrorReason.SecretTokenNotFound]: 'Secret token not found',
  [ErrorReason.BadSecretToken]: 'Secret token is incorrectly formatted',
  [ErrorReason.OrgMustBeEndUser]:
    'Organization must be an end-user organization',
  [ErrorReason.OrgMustBeIntegrator]:
    'Organization must be an integrator organization',
  [ErrorReason.OrgMustBeSalient]: 'Organization must be a salient organization',
  [ErrorReason.NotAssociatedWithDeployment]:
    'User organization is not associated with requested deployment instance.',
  [ErrorReason.SelfDisassociationNotAllowed]: `Disassociation from your own organization is not allowed. Use PATCH /organization/:id instead`,
  [ErrorReason.OrgsNotAssociated]:
    'Two organizations are not associated with each other.',
  [ErrorReason.AdminMinimumRequirement]: `Organization requires at least one Admin.`,
  [ErrorReason.EmailDeliveryFailed]: `Email could not be delivered!`,
  [ErrorReason.EmailLimitExceeded]: `Email limit is exceeded`,
  [ErrorReason.SuspiciousRequestor]: 'Requestor is marked as suspicious!',
  [ErrorReason.UserNotInSalient]: 'User is not in Salient organization',
  [ErrorReason.BadLogin]: 'Incorrect username or password',
  [ErrorReason.DuplicateOrganizationName]: 'Organization name already exists..',
  [ErrorReason.DuplicateUnknown]: 'Unknown already exists',
};

/**
 * {
 *  ['100']: Errors occurred during response body validation
 *  ['101']: second error value
 * }
 */
/**
 * {[CustomErrorReason]: number}
 */

export { routeMap, errorReasonMap, friendlyMessages };
