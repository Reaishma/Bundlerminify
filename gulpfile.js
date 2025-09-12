const gulp = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const watch = require('gulp-watch');

// Paths
const paths = {
    css: {
        src: ['wwwroot/css/**/*.css', '!wwwroot/css/**/*.min.css'],
        dest: 'wwwroot/css/'
    },
    js: {
        src: ['wwwroot/js/**/*.js', '!wwwroot/js/**/*.min.js'],
        dest: 'wwwroot/js/'
    },
    sass: {
        src: 'wwwroot/scss/**/*.scss',
        dest: 'wwwroot/css/'
    }
};

// CSS Tasks
gulp.task('css:bundle', function() {
    return gulp.src(paths.css.src)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('css:minify', function() {
    return gulp.src(paths.css.src)
        .pipe(cssmin())
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest(paths.css.dest));
});

// JavaScript Tasks
gulp.task('js:bundle', function() {
    return gulp.src(paths.js.src)
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(paths.js.dest));
});

gulp.task('js:minify', function() {
    return gulp.src(paths.js.src)
        .pipe(uglify())
        .pipe(concat('bundle.min.js'))
        .pipe(gulp.dest(paths.js.dest));
});

// Sass compilation
gulp.task('sass', function() {
    return gulp.src(paths.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.sass.dest));
});

// Watch tasks
gulp.task('watch', function() {
    gulp.watch(paths.css.src, gulp.series('css:bundle'));
    gulp.watch(paths.js.src, gulp.series('js:bundle'));
    gulp.watch(paths.sass.src, gulp.series('sass'));
    console.log('Watching for file changes...');
});

// Build tasks
gulp.task('build:dev', gulp.parallel('css:bundle', 'js:bundle', 'sass'));
gulp.task('build:prod', gulp.parallel('css:minify', 'js:minify', 'sass'));
gulp.task('build', gulp.series('build:prod'));

// Default task
gulp.task('default', gulp.series('build:dev', 'watch'));