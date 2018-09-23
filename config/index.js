const globalKeys = require('./keys');

const env = 'dev';

const publicEnv =
  env === 'dev'
    ? require('./development/secret')
    : require('./production/public');
const secretEnv =
  env === 'dev'
    ? require('./development/secret')
    : require('./production/secret');

module.exports = {
  ...globalKeys,
  ...publicEnv,
  ...secretEnv
};
