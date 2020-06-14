module.exports = {
    CORS: {
        ALLOW_ORIGIN: 'http://localhost:3080', // 如果为*多源，则不允许携带cookie
        ALLOW_METHODS: 'PUT,POST,GET,DELETE,OPTIONS,HEAD',
        HEADERS: 'Content-Type,Content-Length,Authorization.Accept,X-Requested-With',
        CREDENTIALS: true
    }
}