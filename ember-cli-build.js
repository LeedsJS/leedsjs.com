'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const urls = [
  '/'
];

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      prepend: `http://www.leedsjs.com.s3-website-eu-west-1.amazonaws.com/`,
      extensions: ['js', 'css', 'map']
    },
    prember: {
      urls
    },
  });

  return app.toTree();
};
