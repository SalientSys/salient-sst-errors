import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const gatewayErrorDetailsMap: IDetailsMap = {
  [Details.GatewayFailure]: {
    friendlyMessage: 'Gateway failure',
    technichalReason:
      "Attempted to do startStopProxy and startStopVpn but the status for both was 'rejected'",
  },

  [Details.DuplicateGateway]: {
    friendlyMessage: 'Gateway already exists',
    technichalReason:
      'gatewayId was found in the database through gatewayDeploymentService.findById();',
  },

  [Details.AccountCreationFailedToStart]: {
    friendlyMessage: 'Account creation failed to start',
    technichalReason:
      'Account Creation Response came back a string or lastDeploymentLog did not have an id',
  },

  [Details.Env0GatewayCreationFailed]: {
    friendlyMessage: 'Env0 gateway creation failed',
    technichalReason: 'responseSent is a falsy value, so response was not sent',
  },

  [Details.GatewayDeploymentProcessFailed]: {
    friendlyMessage: 'Gateway deployment process failed',
    technichalReason:
      'An error was caught in the catch block in deployGateway process',
  },

  [Details.GatewayDeploymentIdNotFoundInDb]: {
    friendlyMessage: 'Gateway deployment id not found in db',
    technichalReason:
      "The deployment's environment was not found in the database",
  },

  [Details.UpdateGatewayVpnAndSecretFailed]: {
    friendlyMessage: 'Update gateway vpn and secret failed',
    technichalReason:
      "The updateGatewayVpnAndSecret function's try block threw an error",
  },

  [Details.UpdateSecretsManagerFailed]: {
    friendlyMessage: 'Update secrets manager failed',
    //TODO: will be more specific when we throw better errors
    technichalReason: 'The updateSecretsManager function threw an error',
  },
};
