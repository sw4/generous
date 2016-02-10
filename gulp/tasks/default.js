'use strict';

module.exports = function (gulp, plugins, runSeq) {
    gulp.task('default', function (callback) {
        runSeq('clean',
            'app:beautify',
            ['app:libs', 'app:js', 'app:styles', 'app:html', 'app:data', 'task:js'], 'docs', callback);
    });
};
