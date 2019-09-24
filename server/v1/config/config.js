const _ = require('lodash');

const config = {
  dev: 'development',
  port: process.env.PORT || 5000,
};

process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
config.env = process.env.NODE_ENV || config.dev;

let envConfig;

try {
  envConfig = require(`./${config.env}`);
  envConfig = envConfig || {};
} catch (e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);
