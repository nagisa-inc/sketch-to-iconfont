'use strict';

import gulp from 'gulp';
import sketch from 'gulp-sketch';


/*------------------------------------------------------------------------------
 * Export artboards in Sketch to svg icons
 *----------------------------------------------------------------------------*/
gulp.task('export:svg', () => {
  const path = process.env.path || './demo.sketch';
  console.log(path);
  return gulp.src(path)
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg',
      compact: true
    }))
    .pipe(gulp.dest('./src/svg'));
});
