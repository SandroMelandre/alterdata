var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('serve', function () {
    browserSync.init({
        open:false,
        server: {
            baseDir: "../app"
        }
    });
    gulp.watch("*.html").on("change", reload);
});

