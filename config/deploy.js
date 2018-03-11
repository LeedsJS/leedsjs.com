/* eslint-env node */

let credentials;

try {
  credentials = require('./credentials.json');
} catch (e) {
  credentials = {};
}

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: "production"
    },
    pipeline: {
      // alias: {
      //   s3: { as: ['s3-standard', 's3-static'] },
      // },
      activateOnDeploy: true
    },
    "revision-data": {
      "type": "version-commit"
    },
    s3: {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,wasm,json,html}',
      cacheControl: 'max-age=3600, public',
    },
    // 's3-standard': {
    //   filePattern: '**/*.{js,css,ico,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,wasm}'
    // },
    // 's3-static': {
    //   filePattern: "**/*.{png,gif,jpg,json,html}",
    //   cacheControl: 'max-age=3600, public',
    // },
    's3-index': {
      allowOverwrite: true
    },
  };

  if (deployTarget === 'production') {

    const bucket = 'www.leedsjs.com';
    const region = 'eu-west-1'

    ENV['s3'].accessKeyId = credentials.key || process.env.AWS_KEY;
    ENV['s3'].secretAccessKey = credentials.secret || process.env.AWS_SECRET;
    ENV['s3'].bucket = bucket;
    ENV['s3'].region = region;

    // ENV['s3-standard'].accessKeyId = credentials.key || process.env.AWS_KEY;
    // ENV['s3-standard'].secretAccessKey = credentials.secret || process.env.AWS_SECRET;
    // ENV['s3-standard'].bucket = bucket;
    // ENV['s3-standard'].region = region;
    //
    // ENV['s3-static'].accessKeyId = credentials.key || process.env.AWS_KEY;
    // ENV['s3-static'].secretAccessKey = credentials.secret || process.env.AWS_SECRET;
    // ENV['s3-static'].bucket = bucket;
    // ENV['s3-static'].region = region;

    ENV["s3-index"].accessKeyId = credentials.key || process.env.AWS_KEY;
    ENV["s3-index"].secretAccessKey = credentials.secret || process.env.AWS_SECRET;
    ENV["s3-index"].bucket = bucket;
    ENV["s3-index"].region = region;
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
