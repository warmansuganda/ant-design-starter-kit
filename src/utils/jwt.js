export const setToken = token => {
    localStorage.token = token
}

export const getToken = () => ( localStorage.token )

export const clearToken = () => {
    localStorage.removeItem("token")
}

export default {
    setToken,
    getToken,
    clearToken
}
