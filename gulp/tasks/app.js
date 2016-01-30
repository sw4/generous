'use strict';

module.exports = function (gulp, plugins) {

    gulp.task('app:beautify', function () {
        return gulp.src(['src/app/**/*.html', 'src/app/js/**/*.js'], { base: './' })
            .pipe(plugins.plumber())
            .pipe(plugins.jsbeautifier())
            .pipe(gulp.dest('./'));

    });

    gulp.task('app:js', function () {
        return gulp.src(['src/app/js/**/*.js'], { base: '/' })
            .pipe(plugins.plumber())
            .pipe(plugins.jshint({ 'multistr': true }))
            .pipe(plugins.jshint.reporter('jshint-stylish'))
            .pipe(plugins.concat('generous.app.min.js'))
            //.pipe(plugins.uglify())
            .pipe(gulp.dest('dist/app/js'));

    });

    gulp.task('app:html', function () {
        return gulp.src(['src/app/index.html'], { base: '/' })
            .pipe(plugins.flatten())
            .pipe(gulp.dest('dist/app/'));

    });

    

    gulp.task('app:libs', function () {
        return gulp.src(['src/app/libs/**/*.*'])
            //.pipe(plugins.flatten())
            .pipe(gulp.dest('dist/app/libs'));

    });

    gulp.task('app:data', function () {
        return gulp.src(['src/app/data/**/*.json'], { base: '/' })
           .pipe(plugins.flatten())
            .pipe(gulp.dest('dist/app/data'));
    });


    gulp.task('app:styles', function () {
        return gulp.src([
            'src/app/**/*.scss'
        ], { base: './' })
            .pipe(plugins.plumber())
            .pipe(plugins.sass())
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(plugins.csslint())
            .pipe(plugins.concat('generous.app.min.css'))
            .pipe(plugins.csso())
            .pipe(gulp.dest('dist/app/css/'));
    });

};
