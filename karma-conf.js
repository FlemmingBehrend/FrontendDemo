module.exports = function (config) {

    var path = require('path');

    return config.set({
        basePath: '.',
        frameworks: ['jasmine'],
        files: [
            // Third lib dependencies
            'webapp/bower_components/angular/angular.js'

        ],
        exclude: [
        ],
        preprocessors: {
        },
        ngHtml2JsPreprocessor: {
            stripPrefix: 'webapp/'
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher'
        ],
        //coverageReporter: {
        //    dir: 'karma-coverage/',
        //    reporters: [
        //        {type: 'cobertura', subdir: 'cobertura'},
        //        {type: 'html', subdir: 'html'}
        //    ]
        //},
        singleRun: true,
        browserNoActivityTimeout: 60000
    });

};