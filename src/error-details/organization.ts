import { Details } from '..';
import { IDetailsMap } from '../interfaces';

export const organizationDetailsMap: IDetailsMap = {
  [Details.OrganizationByUserIdNotFoundInDb]: {
    friendlyMessage:
      'The action requires you to be a member of an organization. Either create an organization or join one to enable this action.',
    technichalReason:
      'organizationService.findByUserId() did not return a truthy value',
  },

  [Details.OrganizationTypeNotSalient]: {
    friendlyMessage: 'The action requires you to be an SCS admin.',
    technichalReason:
      'The organization.organizationType was not OrganizationType.Other',
  },

  [Details.OrganizationTypeNotIntegrator]: {
    friendlyMessage:
      'The action requires you to be a member of an Integrator organization.',
    technichalReason:
      'The organization.organizationType was not OrganizationType.Integrator',
  },

  [Details.OrganizationTypeNotEndUser]: {
    friendlyMessage:
      'The action requires you to be a member of an Integrator organization. Either create an organization or join one to enable this action',
    technichalReason:
      'The organization.organizationType was not OrganizationType.EndUser',
  },

  [Details.OrganizationMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The organization was missing from the res.locals[organization], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  [Details.OrgNotFoundWhenDeregisteringDeployment]: {
    friendlyMessage:
      'The organization was not found for the deployment. Please contact support.',
    technichalReason:
      'The organization was not found when deregistering a deployment, this only happens when we refrigerate a deployment and organizationsService.findDocumentByDeploymentId throws an error.',
  },

  // TODO: delete!
  [Details.OrganizationByDeploymentIdNotFoundInDb]: {
    friendlyMessage:
      'The organization was not found for the deployment. Please contact support.',
    technichalReason:
      'The organization was not found in the database with that deployment Id',
  },

  [Details.OrgConnectionMissingFromLocals]: {
    friendlyMessage:
      'A critical server error has occurred. Please contact support.',
    technichalReason:
      'The organization connection was missing from the res.locals[object], if you have the middlewares setup in the correct order, this should be a server failure of some sort',
  },

  // TODO: will be replaces with something more specific
  [Details.FailedToSaveOrgConnection]: {
    friendlyMessage:
      'Unable to process connection request. Please contact support.',
    technichalReason: 'orgConnection.save() threw an error',
  },

  [Details.OrganizationsAlreadyAssociated]: {
    friendlyMessage:
      'Connection request cannot be processed. Organizations are already connected.',
    technichalReason: 'The organizations are already associated',
  },

  [Details.OrgConnectionNotFoundInDb]: {
    friendlyMessage:
      'Organization connection does not exist. No further action required.',
    technichalReason:
      'The organization connection was not found in the database',
  },

  [Details.OrganizationHasNoUsers]: {
    friendlyMessage: 'Organization has no users',
    technichalReason:
      'The organization you passed in has no users. This should literally never happen, like seriously!.',
  },

  [Details.LastAdminNotAllowedToLeaveOrg]: {
    friendlyMessage: 'An organization requires at least one admin',
    technichalReason:
      'The organization only has one admin user and they cannot leave the organization.',
  },

  [Details.OrganizationsNotAssociated]: {
    friendlyMessage:
      'The action cannot be completed because there is no connection between the organizations.',
    technichalReason: 'The organizations are not associated',
  },

  [Details.NoOrganizationsOfTypeInDb]: {
    friendlyMessage: 'No organizations of that type exist in the database.',
    technichalReason:
      'Chaos has ensued, find shelter! All organizations have been deleted from the database.',
  },

  [Details.OrganizationNameAlreadyExistsInDb]: {
    friendlyMessage:
      'Organization name must be unique. Please update and try again.',
    technichalReason:
      'An organization with that name already exists in the database',
  },

  [Details.OrganizationRegistrationAlreadyInProgress]: {
    friendlyMessage: 'Organization registration already in progress',
    technichalReason:
      'An organization registration is already in progress with this name',
  },

  [Details.OrganizationByIdNotFoundInDb]: {
    friendlyMessage:
      'The action requires you to be a member of an organization. Either create an organization or join one to enable this action.',
    technichalReason:
      'organizationService.findById() did not return a truthy value',
  },

  [Details.FailedToDeleteOrgConnection]: {
    friendlyMessage:
      'Unable to process connection request. Please contact support.',
    technichalReason: 'orgConnection.delete() threw an error',
  },
};
