'use strict';
const paths = require('./paths');

module.exports = {
    resolve: {
        alias: {
            '@src': paths.appSrc,
        }
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
              loader: 'style-loader',
            }, {
              loader: 'css-loader', // translates CSS into CommonJS
            }, {
              loader: 'less-loader', // compiles Less to CSS
              options: {
                  modifyVars: {
                      'hack': `true; @import "${paths.appSrc}/assets/style/variable.less";`, // Override with less file
                  },
                  javascriptEnabled: true,
              },
            }],
        }],
    }
};
