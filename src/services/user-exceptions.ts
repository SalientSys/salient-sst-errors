import { Hades } from './hades';
import { Next, Services, HttpStatusCode, ErrorReasons } from '../shared';

export class UserExceptions<NextFunction> {
  constructor(public hades: Hades, public next: NextFunction) {}

  @Next
  noToken() {
    return this.hades.err(
      Services.AuthUtils,
      HttpStatusCode.Unauthorized,
      ErrorReasons.NoToken,
    );
  }

  @Next
  badToken() {
    return this.hades.err(
      Services.Bcrypt,
      HttpStatusCode.Forbidden,
      ErrorReasons.BadToken,
    );
  }

  @Next
  userNotVerified() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Unauthorized,
      ErrorReasons.UserNotVerified,
    );
  }

  @Next
  notCurrentUser() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.NotCurrentUser,
    );
  }

  @Next
  userNotAnAdmin() {
    return this.hades.err(
      Services.UsersService, // Probably a permissions service when we have one!.
      HttpStatusCode.Forbidden,
      ErrorReasons.UserNotAdmin,
    );
  }

  @Next
  incorrectPassword() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Unauthorized,
      ErrorReasons.IncorrectPassword,
    );
  }

  @Next
  userNotFound() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.NotFound,
      ErrorReasons.UserNotFound,
    );
  }

  @Next
  userNotInOrganization() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.UserNotInOrganization,
    );
  }

  @Next
  userAlreadyVerified() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Conflict,
      ErrorReasons.UserAlreadyVerified,
    );
  }

  @Next
  notPermittedTo(action: 'create' | 'update' = 'create', objectType: string) {
    return this.hades.err(
      Services.UsersService, // Permissions service at some point
      HttpStatusCode.Forbidden,
      `Not permitted to ${action} ${objectType}`,
    );
  }

  @Next
  userNotIntegratorNorEndUser() {
    return this.hades.err(
      Services.OrganizationService,
      HttpStatusCode.Forbidden,
      ErrorReasons.UserNotIntegratorNorEndUser,
    );
  }

  @Next
  invalidAccessCode(message?: string) {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Unauthorized,
      ErrorReasons.InvalidAccessCode,
    );
  }

  @Next
  resetPasswordExpired() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.ResetPasswordExpired,
    );
  }

  @Next
  registrationExpired() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Forbidden,
      ErrorReasons.RegistrationExpired,
    );
  }

  @Next
  selfInvite() {
    return this.hades.err(
      Services.UsersService,
      HttpStatusCode.Conflict,
      ErrorReasons.SelfInvite,
    );
  }

  @Next
  notificationDoesNotBelongToUser() {
    return this.hades.err(
      Services.UsersService, // the id comparison would probably happen in the user service
      HttpStatusCode.Forbidden,
      ErrorReasons.NotificationDoesNotBelongToUser,
    );
  }

  @Next
  recipientAlreadyInOrg() {
    return this.hades.err(
      Services.UsersService, // again don't know what this would be
      HttpStatusCode.Conflict,
      ErrorReasons.RecipientAlreadyInOrg,
    );
  }
}
