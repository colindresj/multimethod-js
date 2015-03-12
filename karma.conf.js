module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      './test/multimethod.test.js',
    ],

    exclude: [],

    preprocessors: {
      'test/multimethod.test.js': ['webpack']
    },

    reporters: ['progress', 'dots'],

    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]
      }
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_WARN,

    autoWatch: false,

    browsers: [
      'Chrome',
      'Firefox',
      'PhantomJS'
    ],

    singleRun: true
  });
};
