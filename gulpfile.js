// Definitions
	var gulp 	   = require('gulp'),
		uglify     = require('gulp-uglify'),
		sass       = require('gulp-ruby-sass'),
		sourcemaps = require('gulp-sourcemaps'),
		pug        = require('gulp-pug'),
		data       = require('gulp-data'),
		path	   = require('path'),
		plumber	   = require('gulp-plumber'),
		livereload = require('gulp-livereload'),
		surge      = require('gulp-surge')

// Uglify
	gulp.task('compress', function(){

		gulp.src('src/js/*js')	
			.pipe(plumber())
			.pipe(uglify())
			.pipe(gulp.dest('js'))
			.pipe(livereload())
	})

//Style 
	gulp.task('style', function(){

		sass('src/scss/*.scss',{
			sourcemap: true,
			style:"compressed"
		})
		.pipe(plumber())
		.on('error', sass.logError)
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
		.pipe(gulp.dest('css'))
		.pipe(livereload())
	})

//PUG
	gulp.task('pug', function(){
		gulp.src(
				[
					'src/pug/index-en.pug',
					'src/pug/index-ar.pug',
					
					// 'src/pug/icons-en.pug',
					// 'src/pug/icons-ar.pug',

					// 'src/pug/guide-en.pug',
					// 'src/pug/guide-ar.pug',

				]
			)
			.pipe(plumber())
			.pipe(pug({
				pretty:true,
				data:{
					"dataAr":require('./src/data/data-ar.json'),
					"dataEn":require('./src/data/data-en.json'),
				}
			}))
			.pipe(gulp.dest('./'))
			.pipe(livereload())
	})

//Watch
	gulp.task('watch', function(){
		livereload.listen();
		gulp.watch('src/js/*.js', ['compress']);
		gulp.watch(['src/scss/*.scss','src/scss/**/*.scss' ], ['style']);
		gulp.watch(['src/pug/*.pug', 'src/pug/**/*.pug'], ['pug']);
		gulp.watch('gulpfile.js', ['compress','style','pug']);
	})
//surge
	gulp.task('deploy', [], function () {
	  return surge({
	    project: './',
	    domain: 'ra7ala.surge.sh'
	  })
	})
gulp.task('default',['compress','style','pug','watch'])
