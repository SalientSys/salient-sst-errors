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
  'FailedToUpdateObject',
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
] as const;

const Deployments = [
  'SecretNotFound',
  'SecretNotValid',
  'DeploymentIdMissingFromBody',
  'DeploymentAlreadyRegisteredInDifferentOrg',
  'DeploymentIdAlreadyCachedInMemory',
  'RegisteredDeploymentFound',
  'DeploymentByIdNotFoundByParam',
  'DeploymentByIdNotFoundByBody',
  'DeploymentNotRegistered',
  'DeploymentMissingFromLocals',
  'DeploymentByIdNotFoundInDb',
  'DeploymentIdNotFoundInConnectedOrgs',
  'FailedToSaveDeployment',
] as const;

const Recorders = ['RecordersMissingFromLocals'] as const;

const Gateway = [
  'GatewayFailure',
  'DuplicateGateway',
  'AccountCreationFailedToStart',
  'Env0GatewayCreationFailed',
  'GatewayDeploymentProcessFailed',
  'GatewayDeploymentIdNotFoundInDb',
  'UpdateGatewayVpnAndSecretFailed',
  'UpdateSecretsManagerFailed',
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
