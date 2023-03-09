import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const deploymentsErrorDetailsMap: IDetailsMap = {
  [Details.SecretTokenNotFound]: {
    friendlyMessage:
      'Could not validate the environment secret. Token not found.',
    technichalReason:
      'The secret was not found in the req.headers[REQUEST_HEADER_SECRET_KEY]',
  },
  [Details.InvalidSecretToken]: {
    friendlyMessage:
      'Could not validate the environment secret. Token not valid.',
    technichalReason:
      'The secret did not path through the validateSecretToken function with a truthy value',
  },

  [Details.DeploymentIdMissingFromRequestBody]: {
    friendlyMessage:
      'A Critical Server error has occurred. Please contact support.',
    technichalReason:
      'The deployment id was not found in neither the req.body.deploymentId nor req.body.managementServerGuid',
  },
  [Details.DeploymentAlreadyRegisteredInDifferentOrg]: {
    friendlyMessage:
      'This deployment is already registered in different organization. If you believe this is an error, please contact support.',
    technichalReason:
      'The deployment id was found in another organization other than the current user organization',
  },

  [Details.DeploymentIdAlreadyCachedInMemory]: {
    friendlyMessage: 'The deployment registration is already in progress.',
    technichalReason: 'The deployment id was found in the cache',
  },

  [Details.RegisteredDeploymentFound]: {
    friendlyMessage:
      'The deployment you are trying to register is already registered.',
    technichalReason:
      'The deployment id was found in the database and the isRegistered flag was set to true',
  },

  [Details.MissingDeploymentIdParam]: {
    friendlyMessage:
      'Deployment was not found. Verify the url is correct or contact support.',
    technichalReason:
      'The deployment id was not found in the database by the req.params.deploymentId',
  },

  [Details.DeploymentByIdNotFoundByBody]: {
    friendlyMessage:
      'Deployment was not found. Verify the url is correct or contact support.',
    technichalReason:
      'The deployment id was not found in the database by the req.body.deploymentId',
  },

  [Details.DeploymentNotRegistered]: {
    friendlyMessage:
      'Unable to process request. Deployment is not registered. Please contact support.',
    technichalReason: "The deployment's isRegistered flag was set to false",
  },

  [Details.DeploymentMissingFromLocals]: {
    friendlyMessage:
      'A Critical Server error has occurred. Please contact support.',
    technichalReason:
      'responseLocals.getDeployment(deploymentId, res) returned a falsy value',
  },

  [Details.DeploymentIdNotFoundInConnectedOrgs]: {
    friendlyMessage:
      'The action cannot be completed because the deployment is not connected to your organization.',
    technichalReason:
      'The deployment id was not found in the connected organizations',
  },

  [Details.FailedToSaveDeployment]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support',
    technichalReason:
      'deployment.save() threw an error while trying to save the deployment',
  },

  [Details.FailedToUpdateDeployment]: {
    friendlyMessage:
      'A critical server error occurred when updating the object. Please try again or contact support if the problem persists.',
    technichalReason:
      'deploymentService.updateById threw an error while trying to update the deployment',
  },

  [Details.DeploymentNotFoundInDb]: {
    friendlyMessage:
      'A critical server error has occurred when updating the object. Please contact support if the problem persists.',
    technichalReason: 'The deployment by that id was not found in the database',
  },
  [Details.DeploymentSubParamNotFound]: {
    friendlyMessage:
      'Invalid route request. The object requested may not exist. Verify the url is correct.',
    technichalReason:
      'The sub param passed in the route was not found in the deployment object',
  },

  [Details.DeploymentByIdNotFoundInDb]: {
    friendlyMessage:
      'Unable to process request. Deployment was not found. Please contact support.',
    technichalReason: 'The deployment by that id was not found in the database',
  },

  [Details.DeploymentByIdNotFoundByParam]: {
    friendlyMessage:
      'Unable to process request. Deployment was not found. Please contact support.',
    technichalReason: 'The deployment id was not found in the url param',
  },

  [Details.DeploymentEnvironmentNotFoundInDb]: {
    friendlyMessage:
      'Unable to process request. Deployment environment was not found. Please contact support.',
    technichalReason:
      'The deployment.features.remoteConnect.environment was a falsy value',
  },

  [Details.ProxyLogsStartTimeGreaterThanEndTime]: {
    friendlyMessage:
      'Unable to process request. Please verify the url is correct or contact support',
    technichalReason:
      'The start time was greater than the end time in the proxy logs request',
  },

  [Details.DeploymentIsAlreadyInUse]: {
    friendlyMessage:
      'The deployment you are trying to add is already added to another one of your connections. Please disconnect the deployment from the other organization before trying again.',
    technichalReason: 'The deployment id was found in another connection.',
  },
};
