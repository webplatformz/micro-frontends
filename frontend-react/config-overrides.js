const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  webpack(config, env) {
    config = injectBabelPlugin('transform-custom-element-classes', config);

    config.plugins.push(new HtmlWebpackPlugin({
      filename: 'react-app.html',
      template: path.resolve(__dirname, 'public/react-app.html'),
      inject: false,
    }));

    return config;
  },
};
