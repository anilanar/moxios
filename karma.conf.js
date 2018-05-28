module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['mocha', 'sinon'],

    files: [
      'test.js'
    ],

    exclude: [
    ],

    preprocessors: {
      'test.js': ['webpack', 'sourcemap']
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity,

    webpack: {
      mode: 'development',
      cache: true,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    }
  })
}
