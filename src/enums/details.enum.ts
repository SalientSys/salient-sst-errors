import {
  Shared,
  User,
  Organization,
  Deployments,
  Recorders,
  Gateway,
  Auth,
  Notification,
} from './details';

type detailCodeNames =
  | typeof Auth[number]
  | typeof Shared[number]
  | typeof User[number]
  | typeof Organization[number]
  | typeof Deployments[number]
  | typeof Recorders[number]
  | typeof Notification[number]
  | typeof Gateway[number];

const Details: {
  [key in detailCodeNames]: number;
} = [
  ...Shared,
  ...Auth,
  ...User,
  ...Organization,
  ...Deployments,
  ...Recorders,
  ...Gateway,
  ...Notification,
].reduce((acc, key, index) => {
  acc[key] = index + 10000;
  return acc;
}, {} as { [key in detailCodeNames]: number });

export { Details, detailCodeNames };
