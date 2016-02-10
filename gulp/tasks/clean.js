'use strict';

module.exports = function (gulp, plugins, del) {

    gulp.task('clean', function () {
        del(['dist', 'docs/app'], { force: true }).then(function (paths) {
            console.log('Deleted files/folders:\n', paths.join('\n'));
            return true;
        });
    });


};
