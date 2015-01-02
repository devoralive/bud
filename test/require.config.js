require.config({
    urlArgs: 'cb=' + Math.random(),
    paths: {
        project: 'src/main'
    },
    shim: {
        jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
    }
});