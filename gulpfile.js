const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('static', () => (
  gulp.src([
    'src/**/*.*',
    '!src/**/*.js'
  ])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
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
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
));

gulp.task('default', ['static', 'js']);

gulp.task('watch', () => (
  gulp.watch('src/**/*.*', ['static', 'js'])
));
