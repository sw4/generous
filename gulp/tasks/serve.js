'use strict';

module.exports = function(gulp, plugins, config) {

    gulp.task('serve', [], function () {
        return plugins.connect.server({
            root: config.baseDir,
            port: 8000,
            livereload: true,
            fallback: config.baseDir + 'index.html'
        });
    });

};
