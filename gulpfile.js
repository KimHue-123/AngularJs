var gulp = require('gulp')
var connect = require('gulp-connect')
    //var historyApiFallback = require('connect-history-api-fallback');

gulp.task('default', function() {
    connect.server({
        root: 'public',
        port: 4001
    })
})


// gulp.task('serve', function() {
// 	browserSync.init({
// 	  server: {
// 		baseDir: "public",
// 		middleware: [ historyApiFallback() ]
// 	  }
// 	});
//   });