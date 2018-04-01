'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: `http://www.leedsjs.com.s3-website-eu-west-1.amazonaws.com/`,
      extensions: ['js', 'css', 'map']
    },
  });

  return app.toTree();
};
