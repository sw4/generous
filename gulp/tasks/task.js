'use strict';

module.exports = function (gulp, plugins) {

    gulp.task('task:js', function () {
        return gulp.src(['src/task/**/*.js'], { base: '/' })
            .pipe(plugins.plumber())
            .pipe(plugins.jshint({ 'multistr': true }))
            .pipe(plugins.jshint.reporter('jshint-stylish'))
            .pipe(plugins.concat('generous.task.min.js'))
            .pipe(plugins.uglify())
            .pipe(gulp.dest('dist/task'));
    });
};
