import { Services, HttpStatusCode, ErrorReasons } from '../shared';
import { InServiceException } from '../shared';
export class ServiceExceptions {
  deploymentNotFound = () => {
    return new InServiceException(
      Services.NotificationService,
      HttpStatusCode.NotFound,
      `Deployment not found`,
    );
  };

  organizationNotFound() {
    return new InServiceException(
      Services.OrganizationService,
      HttpStatusCode.NotFound,
      `Organization not found`,
    );
  }

  invitationInProgress() {
    return new InServiceException(
      Services.CacheService,
      HttpStatusCode.Conflict,
      `Invitation is already in progress!`,
    );
  }

  serverFailureException() {
    return new InServiceException(
      Services.ResponseLocals,
      HttpStatusCode.InternalServerError,
      ErrorReasons.InternalServerFailure,
    );
  }

  emailDeliveryFailed() {
    return new InServiceException(
      Services.EmailService,
      HttpStatusCode.InternalServerError,
      ErrorReasons.EmailDeliveryFailed,
    );
  }

  deploymentAlreadyAssociated() {
    return new InServiceException(
      Services.NotificationService,
      HttpStatusCode.Conflict,
      ErrorReasons.DeploymentsAlreadyAssociated,
    );
  }

  // REQUESTED ORG
  recipientAssociatedWithRequestedOrg() {
    return new InServiceException(
      Services.NotificationService,
      HttpStatusCode.Conflict,
      ErrorReasons.RecipientAssociatedWithRequestorOrg,
    );
  }

  // REQUESTOR ORG
  recipientAssociatedWithRequestorOrg() {
    return new InServiceException(
      Services.NotificationService,
      HttpStatusCode.Conflict,
      ErrorReasons.RecipientAssociatedWithRequestorOrg,
    );
  }

  organizationAlreadyAssociated() {
    return new InServiceException(
      Services.NotificationService,
      HttpStatusCode.Conflict,
      ErrorReasons.OrganizationsAlreadyAssociated,
    );
  }

  duplicate(entity: string, service: Services) {
    return new InServiceException(
      service,
      HttpStatusCode.Conflict,
      ErrorReasons.Duplicate,
    );
  }

  notFound(entity: string, service: Services) {
    return new InServiceException(
      service,
      HttpStatusCode.NotFound,
      `${entity} was not found!`,
    );
  }

  emailLimitExceeded() {
    return new InServiceException(
      Services.EmailService,
      HttpStatusCode.TooManyRequests,
      ErrorReasons.EmailLimitExceeded,
    );
  }

  suspiciousRequestor() {
    return new InServiceException(
      Services.EmailService,
      HttpStatusCode.Forbidden,
      ErrorReasons.SuspiciousRequestor,
    );
  }

  userNotInOrganization() {
    return new InServiceException(
      Services.UsersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.UserNotInOrganization,
    );
  }

  unknownExposableException(err: unknown) {
    return err instanceof InServiceException
      ? err
      : this.serverFailureException();
  }
}
