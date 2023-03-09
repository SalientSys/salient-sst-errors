import { Details } from '../enums';
import { IDetailsMap } from '../interfaces';

export const gatewayErrorDetailsMap: IDetailsMap = {
  [Details.DuplicateGateway]: {
    friendlyMessage:
      'Unable to proccess request. Duplicate gateway found. Please contact support.',
    technichalReason:
      'gatewayId was found in the database through gatewayDeploymentService.findById();',
  },

  [Details.Env0AccountCreationFailedToStart]: {
    friendlyMessage: '',
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
    friendlyMessage: 'Update gateway vpn and secret failed.',
    technichalReason:
      "The updateGatewayVpnAndSecret function's try block threw an error",
  },

  [Details.UpdateSecretsManagerFailed]: {
    friendlyMessage: 'Update secrets manager failed',
    //TODO: will be more specific when we throw better errors
    technichalReason: 'The updateSecretsManager function threw an error',
  },

  [Details.VpnStartFailed]: {
    friendlyMessage: 'The vpn server failed to start up.',
    technichalReason: "The startVpn function's status was 'rejected'",
  },

  [Details.VpnStopFailed]: {
    friendlyMessage: 'The vpn server failed to stop.',
    technichalReason: "The stopVpn function's status was 'rejected'",
  },

  [Details.ProxyStartFailed]: {
    friendlyMessage: 'The proxy server failed to start.',
    technichalReason: "The startProxy function's status was 'rejected'",
  },

  [Details.ProxyStopFailed]: {
    friendlyMessage: 'The proxy server failed to stop.',
    technichalReason: "The stopProxy function's status was 'rejected'",
  },

  [Details.VpnOrProxyFailedToStop]: {
    friendlyMessage: 'The vpn or proxy server failed to stop.',
    technichalReason:
      "The vpnState.status or proxyState.status was 'rejected' when attempting to stop them",
  },

  [Details.VpnOrProxyFailedToStart]: {
    friendlyMessage: 'The vpn or proxy server failed to start.',
    technichalReason:
      "The vpnState.status or proxyState.status was 'rejected' when attempting to start them",
  },

  [Details.FailedToFetchProxyLogs]: {
    friendlyMessage: 'Failed to fetch proxy logs.',
    technichalReason:
      'The proxyService.getLogs function threw an error when attempting to fetch proxy logs',
  },
};
