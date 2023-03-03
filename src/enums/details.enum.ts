const Shared = [
  'NoTokenFound',
  'NoTokenSecret',
  'JwtVerifyFailed',
  'NoTokenAudience',
  'ValidationError',
  'UndefinedParam',
  'InvalidSubsetSelection',
  'ParamQueryNull',
  'ParamQueryError',
  'SubParamNotFound',
  'EmailDeliveryFailure',
  'ReadNotPermitted',
  'DeleteNotPermitted',
  'UpdateNotPermitted',
  'CreateNotPermitted',
  'UpdateQueryResultUndefined',
] as const;

const User = [
  'UserIdMissingFromLocals',
  'UserByIdNotFoundInDb',
  'UserMissingFromLocals',
  'UserNotAdmin',
  'UserHasNoOrgUpdateNotPermitted',
  'UserNotSalient',
  'UserByEmailNotFoundInDb',
  'UserDoesNotBelongToCurrentOrganization',
] as const;

const Organization = [
  'OrganizationByUserIdNotFoundInDb',
  'OrganizationTypeNotSalient',
  'OrganizationTypeNotIntegrator',
  'OrganizationTypeNotEndUser',
  'OrganizationMissingFromLocals',
  'OrganizationByDeploymentIdNotFoundInDb',
  'OrgNotFoundWhenDeregisteringDeployment',
] as const;

const Deployments = [
  'SecretTokenNotFound',
  'InvalidSecretToken',
  'DeploymentIdMissingFromRequestBody',
  'DeploymentAlreadyRegisteredInDifferentOrg',
  'DeploymentIdAlreadyCachedInMemory',
  'RegisteredDeploymentFound',
  'MissingDeploymentIdParam',
  'DeploymentByIdNotFoundByBody',
  'DeploymentNotRegistered',
  'DeploymentMissingFromLocals',
  'DeploymentByIdNotFoundInDb',
  'DeploymentIdNotFoundInConnectedOrgs',
  'FailedToSaveDeployment',
  'FailedToUpdateDeployment',
  'DeploymentNotFoundInDb',
  'DeploymentSubParamNotFound',
] as const;

const Recorders = ['RecordersMissingFromLocals'] as const;

const Gateway = [
  'GatewayFailure',
  'DuplicateGateway',
  'Env0AccountCreationFailedToStart',
  'Env0GatewayCreationFailed',
  'GatewayDeploymentProcessFailed',
  'GatewayDeploymentIdNotFoundInDb',
  'UpdateGatewayVpnAndSecretFailed',
  'UpdateSecretsManagerFailed',
  'VpnStartFailed',
  'VpnStopFailed',
  'ProxyStartFailed',
  'ProxyStopFailed',
  'VpnOrProxyFailedToStart',
  'VpnOrProxyFailedToStop',
] as const;

type detailCodeNames =
  | typeof Shared[number]
  | typeof User[number]
  | typeof Organization[number]
  | typeof Deployments[number]
  | typeof Recorders[number]
  | typeof Gateway[number];

const Details: {
  [key in detailCodeNames]: number;
} = [
  ...Shared,
  ...User,
  ...Organization,
  ...Deployments,
  ...Recorders,
  ...Gateway,
].reduce((acc, key, index) => {
  acc[key] = index + 10000;
  return acc;
}, {} as { [key in detailCodeNames]: number });

export { Details, detailCodeNames };
