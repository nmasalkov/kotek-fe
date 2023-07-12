const EnvUrl = function() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        return 'http://localhost:3000/'
    } else {
        // Use full domain name for production environment.
        return 'https://www.kotekcards.com/api/'
    }
}

export default EnvUrl
