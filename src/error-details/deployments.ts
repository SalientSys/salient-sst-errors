import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const deploymentsErrorDetailsMap: IDetailsMap = {
  [Details.SecretTokenNotFound]: {
    friendlyMessage: 'Failed to authenticate request',
    technichalReason:
      'The secret was not found in the req.headers[REQUEST_HEADER_SECRET_KEY]',
  },
  [Details.InvalidSecretToken]: {
    friendlyMessage: 'Failed to authenticate request',
    technichalReason:
      'The secret did not path through the validateSecretToken function with a truthy value',
  },

  [Details.DeploymentIdMissingFromRequestBody]: {
    friendlyMessage: 'Deploymen was no found',
    technichalReason:
      'The deployment id was not found in neither the req.body.deploymentId nor req.body.managementServerGuid',
  },
  [Details.DeploymentAlreadyRegisteredInDifferentOrg]: {
    friendlyMessage: 'Deployment already registered in different organization',
    technichalReason:
      'The deployment id was found in another organization other than the current user organization',
  },

  [Details.DeploymentIdAlreadyCachedInMemory]: {
    friendlyMessage: 'The Deployment registration is already in progress',
    technichalReason: 'The deployment id was found in the cache',
  },

  [Details.RegisteredDeploymentFound]: {
    friendlyMessage: 'Deploymen is already registered',
    technichalReason:
      'The deployment id was found in the database and the isRegistered flag was set to true',
  },

  [Details.MissingDeploymentIdParam]: {
    friendlyMessage: 'Deployment was not found!',
    technichalReason:
      'The deployment id was not found in the database by the req.params.deploymentId',
  },

  [Details.DeploymentByIdNotFoundByBody]: {
    friendlyMessage: 'Deploymen was not found!',
    technichalReason:
      'The deployment id was not found in the database by the req.body.deploymentId',
  },

  [Details.DeploymentNotRegistered]: {
    friendlyMessage: 'Deployment is not registered!',
    technichalReason:
      'The deployment id was not found in the database or the isRegistered flag was set to false',
  },

  [Details.DeploymentMissingFromLocals]: {
    friendlyMessage: 'Deployment was not found!',
    technichalReason:
      'responseLocals.getDeployment(deploymentId, res) returned a falsy value',
  },

  [Details.DeploymentIdNotFoundInConnectedOrgs]: {
    friendlyMessage: 'Deployment was not found in th connected organizations!',
    technichalReason:
      'The deployment id was not found in the connected organizations',
  },

  [Details.FailedToSaveDeployment]: {
    friendlyMessage: 'Failed to save the deployment!',
    technichalReason:
      'deployment.save() threw an error while trying to save the deployment',
  },

  [Details.FailedToUpdateDeployment]: {
    friendlyMessage: 'Failed to update deployment!',
    technichalReason:
      'deploymentService.updateById threw an error while trying to update the deployment',
  },

  [Details.DeploymentNotFoundInDb]: {
    friendlyMessage: 'Deployment was not found!',
    technichalReason: 'The deployment by that id was not found in the database',
  },
  [Details.DeploymentSubParamNotFound]: {
    friendlyMessage: 'The deployment details were not found',
    technichalReason:
      'The sub param passed in the route was not found in the deployment object',
  },

  [Details.DeploymentByIdNotFoundInDb]: {
    friendlyMessage: 'Deployment was not found',
    technichalReason: 'The deployment by that id was not found in the database',
  },

  [Details.DeploymentByIdNotFoundByParam]: {
    friendlyMessage: 'Deployment not found!',
    technichalReason: 'The deployment id was not found in the url param',
  },

  [Details.DeploymentEnvironmentNotFoundInDb]: {
    friendlyMessage: 'Deployment environment not found',
    technichalReason:
      'The deployment.features.remoteConnect.environment was a falsy value',
  },

  [Details.ProxyLogsStartTimeGreaterThanEndTime]: {
    friendlyMessage: 'Start time is greater than end time',
    technichalReason:
      'The start time was greater than the end time in the proxy logs request',
  },

  [Details.DeploymentIsAlreadyInUse]: {
    friendlyMessage: 'Deployment already in use by another organization',
    technichalReason: 'The deployment id was found in another connection',
  },
};
