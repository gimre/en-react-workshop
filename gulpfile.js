
const gulp = require( 'gulp' )
const jsx = require( 'gulp-jsx' )
const merge = require( 'merge-stream' )

const source = glob => gulp.src( glob, { base: './src' } )

const outputFolder = './dist'

const appJsStream = source( [ './src/**/*.js', '!./src/lib/**/*.js' ] )
    .pipe( jsx( {
        factory: 'React.createElement',
        passUnknownTagsToFactory: true
    } ) )

const libJsStream = source( './src/lib/**/*.js' )

const htmlStream = source( './src/**/*.html' )

gulp.task( 'default', _ => merge( appJsStream, libJsStream, htmlStream )
    .pipe( gulp.dest( outputFolder ) ) )
