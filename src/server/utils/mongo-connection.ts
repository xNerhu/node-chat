import { config } from '@server/constants';

export const getConnectionURL = () => {
  const { localhost, user, password, ip, port } = config.mongo;

  if (localhost) {
    return 'mongodb://localhost/admin';
  }

  return `mongodb://${user}:${password}@${ip}:${port}/admin`;
};
