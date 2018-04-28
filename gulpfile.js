// Definitions

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
		// purify 		 = require('gulp-purifycss'),
		minifycss    = require('gulp-minify-css');

		pug          = require('gulp-pug'),
		data         = require('gulp-data');

// JS
	gulp.task('es6',  () => {
		browserify('src/js/app.js')
		.transform('babelify', {
			presets: ['es2015'],
			sourceMapsAbsolute: true
		})
		.bundle()	
		.pipe(source('app.js'))
		.pipe(plumber())
		.pipe(buffer())
		.pipe(rename('bundle.js'))
		.pipe(plumber())
		.pipe(gulp.dest('js/'))
		.pipe(plumber())
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
		// .pipe(csscss())
		.pipe(sourcemaps.write('maps', {
			includeContent: false,
			sourceRoot: 'source'
		}))
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('D:/Xamp/htdocs/Hotels App/hotels-app/static/css'))
		.pipe(livereload())
	})

	gulp.task('purecss', function() {
		return gulp.src(['./css/ltr-style.css','./css/rtl-style.css'])
		// .pipe(purify(['./*.html']))
		.pipe(minifycss())
		.pipe(rename({
			suffix: '.pure'
		}))
		.pipe(gulp.dest('./css/'));
	});

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
	var start = false;
	var watchFiles = {
		js:['src/js/*.js', 'src/js/**/*.js', 'src/js/**/**/*.js'],
		scss:['src/scss/*.scss','src/scss/**/*.scss' ],
		css:['./css/ltr-style.css','./css/rtl-style.css'],
		pug:['src/pug/*.pug', 'src/pug/**/*.pug'],
		compress:['js/bundle.js']
	}

	gulp.task('watch', function(){
		livereload.listen();
		gulp.watch(watchFiles.js,['es6'])
		gulp.watch(watchFiles.scss, ['style']);
		gulp.watch(watchFiles.css, ['purecss']);
		gulp.watch(watchFiles.pug, ['pug']);
		gulp.watch(watchFiles.compress, ['compress']);
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
