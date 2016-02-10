var gulp = require('gulp'),
    del = require('del'),
    runSeq = require('run-sequence'),
    connect = require('gulp-connect'),
    plugins = require("gulp-load-plugins")({
        pattern: ['gulp-*', 'gulp.*'],
        replaceString: /\bgulp[\-.]/
    }), 
    config = {
        baseDir: './'
    };


require('./tasks/clean')(gulp, plugins, del);
require('./tasks/app')(gulp, plugins);
require('./tasks/docs')(gulp, plugins, del);
require('./tasks/task')(gulp, plugins);
require('./tasks/serve')(gulp, plugins, config);
require('./tasks/default')(gulp, plugins, runSeq);