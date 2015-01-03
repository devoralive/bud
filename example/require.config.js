require.config({
    baseUrl: './..',
    urlArgs: 'cb=' + Math.random(),
    paths: {
        bud: 'src/bud',
        doa: 'bower_components/doa/src/doa'
    },
    shim: {}
});