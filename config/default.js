module.exports = {
    app: {
        name: 'myKoajsApp',
        version: '0.1.0'
    },
    server: {
        port: 8081
    },
    template: {
        path: 'app/views',
        options: {
            ext: 'ect',
            cache: false
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};