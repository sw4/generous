'use strict';

module.exports = function (gulp, plugins, del) {


    gulp.task('docs', ['docs:run'], function () {
        del(['.publish'], { force: true }).then(function () { });
        // return gulp.src('docs/**/*')
        //     .pipe(plugins.ghPages());
    });
    gulp.task('docs:run', plugins.shell.task([
        'node dist/task/generous.task.min.js --src=docs/data/**/*.* --dest=docs/app'
    ]));

};
