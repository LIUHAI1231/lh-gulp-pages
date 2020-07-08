#!/usr/bin/env node

// console.log('bin/gulp-pages')

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..'))

// console.log(process.argv)

require('gulp/bin/gulp')