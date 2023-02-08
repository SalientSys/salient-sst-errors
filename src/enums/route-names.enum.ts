export enum RouteName {
  AuthenticationLogin = '[POST]/authentication/login',
  AuthenticationSendPasswordEmail = '[POST]/authentication/send-password-email',
  AuthenticationVerifyPasswordReset = '[POST]/authentication/password',
  Register = '[POST]/registration/register',
  VerifyRegistration = '[GET]/registration/verify',
  ResendVerification = '[GET]/registration/resend-verification',
  DoNotContact = '[GET]/users/do-not-contact',
  GetUserById = '[GET]/users/:userId',
  PutUserById = '[PUT]/users/:userId',
  GetOrganizationById = '[GET]/organizations/:organizationId',
  GetCurrentUserOrganizationId = '[GET]/organizations',
  PostOrganizations = '[POST]/organizations',
  PutOrganizationById = '[PUT]/organizations/:organizationId',
  OrganizationDisassociate = '[PUT]/organizations/:organizationId/disassociate',
  GetNotifications = '[GET]/notifications',
  PutNotificationById = '[PUT]/notifications/:notificationId',
  PostInvites = '[POST]/invites',
  GetDeploymentInstancesByIdRoot = '[GET]/deployment-instances/:deploymentId/*',
  GetDeploymentInstancesById = '[GET]/deployment-instances/:deploymentId',
  GetDeploymentInstancesByIdParam1 = '[GET]/deployment-instances/:deploymentId/:param1',
  GetDeploymentInstancesByIdParam2 = '[GET]/deployment-instances/:deploymentId/:param1/:param2',
  GetDeploymentInstancesByIdParam3 = '[GET]/deployment-instances/:deploymentId/:param1/:param2/:param3',
  PostDeploymentRegister = '[POST]/deployment-instances/register',
  PutDeploymentById = '[PUT]/deployment-instances/:deploymentId',
  PutDeploymentByIdGatewayDeploy = '[PUT]/deployment-instances/:deploymentId/gateway/deploy',
  PutDeploymentByIdGatewayReDeploy = '[PUT]/deployment-instances/:deploymentId/gateway/redeploy',
  PutDeploymentByIdUpdateSecret = '[PUT]/deployment-instances/:deploymentId/gateway/update-secret',
  PutDeploymentByIdGatewayStart = '[PUT]/deployment-instances/:deploymentId/gateway/start',
  PutDeploymentByIdGatewayStop = '[PUT]/deployment-instances/:deploymentId/gateway/stop',
  PutDeploymentByIdDisassociate = '[PUT]/deployment-instances/:deploymentId/disassociate',
  DeleteOrgConnectionEndUser = '[DELETE]/org-connections/end-user/:organizationId',
  DeleteOrgConnectionIntegrator = '[DELETE]/org-connections/integrator/:organizationId',
  GetOrgConnectionsById = '[GET]/org-connections/:organizationId',
  GetOrgConnections = '[GET]/org-connections/',
  PostOrgConnections = '[POST]/org-connections/',
  PatchOrgConnections = '[PATCH]/organization/:organizationId',
  PatchUsersById = '[PATCH]/users/:userId',
  DeleteRecorderById = '[DELETE]/deployment-instances/:deploymentId/recorders/:recorderId',
  GetRecorderById = '[GET]/deployment-instances/:deploymentId/recorders/:recorderId',
  PatchRecorderById = '[PATCH]/deployment-instances/:deploymentId/recorders/:recorderId',
  PutRecorderById = '[PUT]/deployment-instances/:deploymentId/recorders/:recorderId',
  PatchNotificationById = '[PATCH]/notifications/:notificationId',
  PostNotificationByIdAccept = '[POST]/notifications/:notificationId/accept',
  DeleteOrgConnectionById = '[DELETE]/org-connections/:organizationConnectionId/deployments',
  ListOrgConnections = '[GET]/org-connections/list',
  PostOrgConnectionByIdDeployments = '[POST]/org-connections/:organizationConnectionId/deployments',
  DeleteOrgConnectionByIdDeployments = '[DELETE]/org-connections/:organizationConnectionId/deployments',
  PostOrgConnectionById = '[POST]/org-connections/:organizationConnectionId',
  GetAllOrganizationsByType = '[GET]/organizations/list?type=integrator|end-user|other',
  PutOrganizationByIdDisassociate = '[PUT]/organizations/:organizationId/disassociate',
  PostDeploymentByIdRequestQuote = '[POST]/deployment-instances/:deploymentId/requestQuote',
  PatchOrganizationById = '[PATCH]/organizations/:organizationId',
  PatchOrganizationByIdV2_1 = "api[v2.1]/[PATCH]/organizations/:organizationId",
  PostDeploymentByIdDeregister = '[POST]/deployment-instances/:deploymentId/deregister',
  PatchDeploymentById = '[PATCH]/deployment-instances/:deploymentId',
  PostDeploymentRegisterV2_1 = 'api[v2.1]/[POST]/deployment-instances/registerPostDeploymentRegister',
  GetOrganizationAddressSuggestions = '[GET]/organizations/address-suggestions',
}
