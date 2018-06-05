const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
  config = injectBabelPlugin('transform-custom-element-classes',config);
  config = injectBabelPlugin('transform-es2015-classes',config);
  return config;
};
