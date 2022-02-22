const logoutClick = (e) => {
    localStorage.clear('authToken');
    window.location.reload()
}

export default logoutClick