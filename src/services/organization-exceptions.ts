import { Hades } from './hades';
import { OrganizationType } from './exception-handler';
import { Next, Services, HttpStatusCode, ErrorReasons } from '../shared';

export class OrganizationExceptions<NextFunction> {
  constructor(public hades: Hades, public next: NextFunction) {}

  @Next
  notAssociatedWithDeployment() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Conflict,
      ErrorReasons.NotAssociatedWithDeployment,
    );
  }

  @Next
  endUserNotAssociatedWithIntegrator() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Conflict,
      ErrorReasons.EndUserNotAssociatedWithIntegrator,
    );
  }

  @Next
  organizationHasNoDeployments() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      ErrorReasons.OrganizationHasNoDeployments,
    );
  }

  @Next
  recipientNotEntity(entity: OrganizationType) {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      entity === OrganizationType.EndUser
        ? ErrorReasons.RecipientNotEndUser
        : entity === OrganizationType.Integrator
        ? ErrorReasons.RecipientNotIntegrator
        : ErrorReasons.RecipientNotSalientAdmin,
    );
  }

  @Next
  orgNotExpectedType(expectedOrg: OrganizationType) {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      expectedOrg === OrganizationType.EndUser
        ? ErrorReasons.OrgMustBeEndUser
        : expectedOrg === OrganizationType.Integrator
        ? ErrorReasons.OrgMustBeIntegrator
        : ErrorReasons.OrgMustBeSalient,
    );
  }

  @Next
  selfDisassociateNotAllowed() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.MethodNotAllowed,
      ErrorReasons.SelfDisassociationNotAllowed,
    );
  }

  @Next
  organizationsNotAssociated() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.NotFound,
      ErrorReasons.OrgsNotAssociated,
    );
  }

  @Next
  adminMinimumRequirement() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      ErrorReasons.AdminMinimumRequirement,
    );
  }

  @Next
  organizationAlreadyAssociated() {
    return this.hades.err(
      Services.NotificationService,
      HttpStatusCode.Conflict,
      ErrorReasons.OrganizationsAlreadyAssociated,
    );
  }

  /**
   * Service: OrganizationService
   * Reason: OrganizationNotIntegratorNorEndUser
   * Status: 403
   */
  @Next
  userNotIntegratorNorEndUser() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      ErrorReasons.UserNotIntegratorNorEndUser,
    );
  }
}
