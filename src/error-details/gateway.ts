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

  [Details.Env0AccountCreationFailedToStart]: {
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

  [Details.VpnStartFailed]: {
    friendlyMessage: 'Vpn could not start',
    technichalReason: "The startVpn function's status was 'rejected'",
  },

  [Details.VpnStopFailed]: {
    friendlyMessage: 'Vpn could not stop',
    technichalReason: "The stopVpn function's status was 'rejected'",
  },

  [Details.ProxyStartFailed]: {
    friendlyMessage: 'Proxy could not start',
    technichalReason: "The startProxy function's status was 'rejected'",
  },

  [Details.VpnOrProxyFailedToStop]: {
    friendlyMessage: 'Vpn or proxy could not stop',
    technichalReason:
      "The vpnState.status or proxyState.status was 'rejected' when attempting to stop them",
  },

  [Details.VpnOrProxyFailedToStart]: {
    friendlyMessage: 'Vpn or proxy could not start',
    technichalReason:
      "The vpnState.status or proxyState.status was 'rejected' when attempting to start them",
  },
};
