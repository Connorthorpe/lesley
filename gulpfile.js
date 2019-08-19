'use strict';
//to run: gulp sass:watch

//npm install gulp
var gulp = require('gulp');
//npm install node-sass gulp-sass --save-dev
var sass = require('gulp-sass');

//compile 
gulp.task('sass', function() {
    gulp.src('styles/main.scss')
    .pipe(sass({style: 'expanded'}))
    .pipe(gulp.dest('styles'))
  });

//compile and watch
gulp.task('sass:watch', function() { 
    gulp.watch('styles/main.scss').on('change', gulp.series('sass'));
});

