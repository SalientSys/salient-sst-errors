import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const deploymentsErrorDetailsMap: IDetailsMap = {
  [Details.SecretTokenNotFound]: {
    friendlyMessage: 'Secret not found',
    technichalReason:
      'The secret was not found in the req.headers[REQUEST_HEADER_SECRET_KEY]',
  },
  [Details.InvalidSecretToken]: {
    friendlyMessage: 'Secret is not valid',
    technichalReason:
      'The secret did not path through the validateSecretToken function with a truthy value',
  },

  [Details.DeploymentIdMissingFromRequestBody]: {
    friendlyMessage: 'Deployment id missing from body',
    technichalReason:
      'The deployment id was not found in neither the req.body.deploymentId nor req.body.managementServerGuid',
  },
  [Details.DeploymentAlreadyRegisteredInDifferentOrg]: {
    friendlyMessage: 'Deployment already registered in different organization',
    technichalReason:
      'The deployment id was found in another organization other than the current user organization',
  },

  [Details.DeploymentIdAlreadyCachedInMemory]: {
    friendlyMessage: 'Deployment id already cached in memory',
    technichalReason: 'The deployment id was found in the cache',
  },

  [Details.RegisteredDeploymentFound]: {
    friendlyMessage: 'Registered deployment found',
    technichalReason:
      'The deployment id was found in the database and the isRegistered flag was set to true',
  },

  [Details.MissingDeploymentIdParam]: {
    friendlyMessage: 'Deployment by id not found by param',
    technichalReason:
      'The deployment id was not found in the database by the req.params.deploymentId',
  },

  [Details.DeploymentByIdNotFoundByBody]: {
    friendlyMessage: 'Deployment by id was not found by body',
    technichalReason:
      'The deployment id was not found in the database by the req.body.deploymentId',
  },

  [Details.DeploymentNotRegistered]: {
    friendlyMessage: 'Deployment not registered',
    technichalReason:
      'The deployment id was not found in the database or the isRegistered flag was set to false',
  },

  [Details.DeploymentMissingFromLocals]: {
    friendlyMessage: 'Deployment missing',
    technichalReason:
      'responseLocals.getDeployment(deploymentId, res) returned a falsy value',
  },

  [Details.DeploymentIdNotFoundInConnectedOrgs]: {
    friendlyMessage: 'Deployment id not found in connected organizations',
    technichalReason:
      'The deployment id was not found in the connected organizations',
  },

  [Details.FailedToSaveDeployment]: {
    friendlyMessage: 'Failed to save deployment',
    technichalReason:
      'deployment.save() threw an error while trying to save the deployment',
  },

  [Details.FailedToUpdateDeployment]: {
    friendlyMessage: 'Failed to update deployment',
    technichalReason:
      'deploymentService.updateById threw an error while trying to update the deployment',
  },

  [Details.DeploymentNotFoundInDb]: {
    friendlyMessage: 'Deployment not found in database',
    technichalReason: 'The deployment by that id was not found in the database',
  },
  [Details.DeploymentSubParamNotFound]: {
    friendlyMessage: 'The deployment details was not found',
    technichalReason:
      'The sub param passed in the route was not found in the deployment object',
  },

  [Details.DeploymentByIdNotFoundInDb]: {
    friendlyMessage: 'Deployment by that id not found',
    technichalReason: 'The deployment by that id was not found in the database',
  },

  [Details.DeploymentByIdNotFoundByParam]: {
    friendlyMessage: 'Deployment by id not found by param',
    technichalReason: 'The deployment id was not found in the url param',
  },
};
