// Definitions
	var gulp 	     = require('gulp'),
		sourcemaps   = require('gulp-sourcemaps'),
		plumber	     = require('gulp-plumber'),
		livereload   = require('gulp-livereload'),
		surge        = require('gulp-surge'),
		rename 		 = require("gulp-rename"),
		path	     = require('path'),

		babel 		 = require('gulp-babel'),
		babelify 	 = require('babelify'),
		browserify   = require('browserify'),
		uglify       = require('gulp-uglify'),
		source 		 = require('vinyl-source-stream'),
		buffer 		 = require('vinyl-buffer'),



		sass         = require('gulp-ruby-sass'),
		autoprefixer = require('gulp-autoprefixer'),

		pug          = require('gulp-pug'),
		data         = require('gulp-data');

// JS
	gulp.task('es6',  () => {
		browserify('src/js/app.js')
		.transform('babelify', {
			presets: ['es2015']
		})
		.bundle()	
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(rename('bundle.js'))
		.pipe(plumber())
		.pipe(gulp.dest('js/'));
	})

	gulp.task('compress', function(){
		gulp
			.src('./js/bundle.js')	
			.pipe(rename('bundle.min.js'))
			.pipe(plumber())
			.pipe(uglify())
			.pipe(gulp.dest('./js'))
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
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
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

					'src/pug/icons-en.pug',
					'src/pug/icons-ar.pug',

					'src/pug/guide-en.pug',
					'src/pug/guide-ar.pug',

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
	var start = false;
	gulp.task('watch', function(){
		livereload.listen();
		gulp.watch('src/js/app.js',['es6'])
		gulp.watch(['src/scss/*.scss','src/scss/**/*.scss' ], ['style']);
		gulp.watch(['src/pug/*.pug', 'src/pug/**/*.pug'], ['pug']);
		gulp.watch(['js/bundle.js'], ['compress']);
		if(!start){
			start = true;
			gulp.watch('gulpfile.js', ['default']);
		}
	})
//surge
	gulp.task('deploy', [], function () {
	  return surge({
	    project: './',
	    domain: 'front-codes.surge.sh'
	  })
	})


gulp.task('default',['es6','compress','style','pug','watch'])
