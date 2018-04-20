'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'leeds-website',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    blog: {
      title: "LeedsJS",
      description: "LeedsJS is the home of a JavaScript user group that meets in Leeds on the last Wednesday of every month.",
      logo: "/images/LeedsJSLogo.png",
      coverImage: "/images/docks.jpg",
      twitter: "leedsjs",
      rssLogo: '/images/LeedsJSLogo.png',
      navigation: [
        { label: 'Home', route: 'index' },
        { label: 'Code of Conduct', route: 'page', id: 'code-of-conduct' },
        { label: 'Organisers & Sponsors', route: 'page', id: 'partners' },
        { label: 'About', route: 'page', id: 'about' }
      ]
    },

    'ember-meta': {
      description: 'LeedsJS is the home of a JavaScript user group that meets in Leeds on the last Wednesday of every month.',
      imgSrc: '/images/LeedsJSLogo.png',
      siteName: 'LeedsJS',
      title: 'LeedsJS',
      twitterUsername: '@leedsjs',
      url: 'https://leedsjs.com/'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    fastboot: {
      hostWhitelist: ["localhost:4200", "localhost:7784"]
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.blog.host = 'https://leedsjs.com';

    ENV.analytics = {
      integrations: [{
        name: 'GoogleAnalytics',
        config: {
          id: 'UA-58901136-2',
          set: {
            hostname: 'leedsjs.com'
          }
        }
      }]
    };
  }

  return ENV;
};
