'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var deploy = require('./config/deploy.js')(process.env.EMBER_ENV);
// const resolve = require("resolve");

const urls = [
  '/'
];

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: `${deploy.gcloudUrl}/${deploy['gcloud-storage'] ? deploy['gcloud-storage'].bucket : ''}/`,
      extensions: ['js', 'css', 'map']
    },
    prember: {
      urls
    },
  });

  return app.toTree();
};
