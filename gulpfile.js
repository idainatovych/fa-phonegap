var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var mainBowerFiles = require('main-bower-files');
var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('copy', function(done) {
    return gulp.src(['app/**/*.html', '!app/index.html'])
        .pipe(gulp.dest('www/views/'));
});


gulp.task('copy_index', function(done) {
    return gulp.src('app/index.html')
        .pipe(gulp.dest('www/'));
});


gulp.task('ionic_sass', function(done) {
    gulp.src('scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('temp/css/'))
        .on('end', done);
});


gulp.task('sass', function(done) {
    gulp.src('app/main.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('temp/css/'))
        .on('end', done);
});


gulp.task('compile_css', ['ionic_sass', 'sass'], function(done) {
    return gulp.src(['temp/css/ionic.app.css', 'temp/css/dist.css'])
        .pipe(concat('app.css'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('www/css/'));
});

gulp.task('vendor_js', function(done) {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('temp/js/'));
});

gulp.task('js', function(done) {
    var bundleStream = browserify('app/app.js').bundle()
    bundleStream
        .pipe(source('dist.js'))
        .pipe(gulp.dest('temp/js/'));
});

gulp.task('compile_dist', ['vendor_js', 'js'], function() {
    return gulp.src(['temp/js/vendor.js', 'temp/js/dist.js'])
        .pipe(concat('app.js'))
      //  .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('www/js/'));
});

gulp.task('watch', ['default'], function() {
    gulp.watch('app/index.html', ['copy_index']);
    gulp.watch('app/**/*.html', ['copy']);
    gulp.watch('app/**/*.js', ['js']);
    gulp.watch('app/**/*.scss', ['sass', 'compile_css']);
});

gulp.task('scripts', ['js', 'vendor_js', 'compile_dist']);
gulp.task('styles', ['ionic_sass', 'sass', 'compile_css']);

gulp.task('default', ['copy', 'scripts', 'styles']);