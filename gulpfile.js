var gulp         = require('gulp'),
    sass         = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps')
    
    

//Roots
var SCSS_SRC    = 'assets/scss/*/*.scss';

// Bootstrap CSS
gulp.task('bootstrap-sass', function () {
    return gulp.src('assets/scss/bootstrap.scss')
    .pipe(sourcemaps.init())
    // below line for comment and source map
    .pipe(sass({sourceComments: 'true', sourceMap: 'map',outputStyle: 'expanded'}).on('error', sass.logError))
   // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('assets/css'))
    
});

gulp.task('custom-sass', function () {
    return gulp.src('assets/scss/custom.scss')
    .pipe(sourcemaps.init())
    // below line for comment and source map
    .pipe(sass({sourceComments: 'true', sourceMap: 'map',outputStyle: 'expanded'}).on('error', sass.logError))
   // .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('assets/css'))
    
});





//Detect changes in SCSS
gulp.task('watch_scss', function(){
    gulp.watch('assets/scss/*/*.scss', gulp.series('custom-sass')); 
});

//Run
gulp.task('default', gulp.series('watch_scss'));