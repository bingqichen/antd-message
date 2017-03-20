const gulp = require('gulp');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const clean = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('static', () => (
  gulp.src([
    'src/**/*.*',
    '!src/**/*.js',
    '!src/**/*.less'
  ])
    .pipe(gulp.dest('dist'))
));

gulp.task('js', () => (
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      babelrc: false,
      presets: ['es2015', 'react', 'stage-0'],
      plugins: [
        'transform-runtime',
        [
          'babel-plugin-root-import',
          [
            {
              rootPathPrefix: '~',
              rootPathSuffix: 'src'
            }
          ]
        ]
      ]
    }))
    .pipe(uglify())
    .pipe(replace(/\.less/g, '.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
));

gulp.task('less', () => (
  gulp.src('src/**/*.less')
    .pipe(less())
    .pipe(postcss([
      autoprefixer({ browsers: ['> 1%', 'ie >= 8'] })
    ]))
    .pipe(clean())
    .pipe(gulp.dest('dist'))
));

gulp.task('default', ['static', 'js', 'less']);

gulp.task('watch', () => (
  gulp.watch('src/**/*.*', ['static', 'js', 'less'])
));
