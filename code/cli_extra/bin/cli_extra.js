#!/usr/bin/env node


// yarn gulp develop --gulpfile ./node_modules/cli_extra/lib/index.js --cwd .
process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('../lib/index.js'))
console.log(process.argv)

require("gulp/bin/gulp.js")