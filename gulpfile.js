var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var deploy      = require("gulp-gh-pages");



gulp.task('jekyll-build', function (done) {
    var messages = {
        jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
    };
    var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
        .on('close', done);
});


gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});



gulp.task('deploy', ['jekyll-build'], function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy());
});


gulp.task('sass', function () {
    return gulp.src('assets/css/main.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch('assets/js/**', ['jekyll-rebuild']);
    gulp.watch(['*.html', '_layouts/*.html', '_posts/*', '_includes/*', '_pages/**'], ['jekyll-rebuild']);
    gulp.watch(['assets/js/**'], ['jekyll-rebuild']);
    // added to watch jade files
    gulp.watch('_jadefiles/*.jade', ['jade']);
});


gulp.task('default', ['browser-sync', 'watch']);
