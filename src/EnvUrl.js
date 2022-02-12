const EnvUrl = function() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000/'
    } else {
        return 'http://kotek-api.herokuapp.com/'
    }
}

export default EnvUrl
