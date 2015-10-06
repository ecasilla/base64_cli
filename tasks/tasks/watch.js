var gulp = require('gulp'),
    config = require('../config'),
    log = require('../util/gulpLogger');

gulp.task('watch', function () {
    gulp.watch(config.lint.all, ['build']);
    gulp.watch(config.spec.path,['test:unit']);
    log.watch(config.lint.all)
    log.watch(config.spec.path)
});
