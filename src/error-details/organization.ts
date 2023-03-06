import { Details } from '..';
import { IDetailsMap } from '../interfaces';

export const organizationDetailsMap: IDetailsMap = {
  [Details.OrganizationByUserIdNotFoundInDb]: {
    friendlyMessage: 'You are not a member of an organization',
    technichalReason:
      'organizationService.findByUserId did not return a truthy value',
  },
  [Details.OrganizationTypeNotSalient]: {
    friendlyMessage: 'You are not a Salient organization',
    technichalReason:
      'The organization.organizationType was not OrganizationType.Other',
  },

  [Details.OrganizationTypeNotIntegrator]: {
    friendlyMessage: 'You are not an Integrator organization',
    technichalReason:
      'The organization.organizationType was not OrganizationType.Integrator',
  },

  [Details.OrganizationTypeNotEndUser]: {
    friendlyMessage: 'You are not an End User organization',
    technichalReason:
      'The organization.organizationType was not OrganizationType.EndUser',
  },

  [Details.OrganizationMissingFromLocals]: {
    friendlyMessage: 'Server Failure',
    technichalReason:
      'The organization was missing from the res.locals[organization], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.OrgNotFoundWhenDeregisteringDeployment]: {
    friendlyMessage: 'Server Failure',
    technichalReason:
      'The organization was not found when deregistering a deployment',
  },

  [Details.OrganizationByDeploymentIdNotFoundInDb]: {
    friendlyMessage: 'Organization was not found for deployment',
    technichalReason:
      'The organization was not found in the database with that deployment Id',
  },
};
