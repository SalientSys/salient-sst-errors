/**
 * This enum is used to define a list of services that are used in the application.
 * Which is primarily used to throw errors with the correct context.
 */
export enum Service {
  Server = 10001,
  ValidationService = 10002,
  UsersService = 10003,
  Bcrypt = 10004,
  CacheService = 10005,
  FindByIdService = 10006,
  AuthUtils = 10007,
  UpdaterService = 10008,
  SendLocalParamService = 10009,
  OrganizationService = 10010,
  NotificationService = 10011,
  DeploymentService = 10012,
  ResponseLocals = 10013,
  RequestHeadersService = 10014,
  EmailService = 10015,
  RequestParametersService = 10016,
  RequestBodyService = 10017,
  RecorderService = 10018,
  Env0Service = 10019,
  GatewayService = 10020,
  OrgConnectionService = 10021,
  GoogleApiService = 10022,
}
