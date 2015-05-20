var pkg = require('./package.json');

module.exports = {
    build: ['sass', 'mustache', 'browserify'],
    serve: 'staticApp', // `staticApp` or `nodeApp`,
    release: [],
    staticApp: {
        server: {baseDir: '_site'},
        port: 3457
    },
    paths: {
        "bower": {
            root: './bower_components',
            fonts: './bower_components/*/dist/fonts'
        },
        source: { //source files to build your component / site
            root: "./src"
        },
        site: { // Final build (Compiled demo + source) code pushed to your chosen release cloud i.e. AWS
            root: './_site'
        }
    },
    pkg: pkg
};
