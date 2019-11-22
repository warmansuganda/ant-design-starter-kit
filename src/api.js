import axios from 'axios'
import jwt from '@src/utils/jwt'

const authConfig = () => {
    const currentUser = jwt.getToken()
    return {
        headers: { Authorization: `Bearer ${currentUser}` }
    }
}

const defaultConfig = {
  baseURL: process.env.REACT_APP_API
}

const getConfig = (config) => {
    const cfg = {...defaultConfig, ...config}
    if (typeof cfg.auth != 'undefined') {
        if (typeof cfg.auth === 'boolean' && cfg.auth === true) {
            delete cfg.auth
            return {
                ...cfg,
                ...authConfig(),
            }
        }
    }

    return cfg
}

const instance = (config) => axios.create(getConfig(config))

export default {
    get: (url, config) => {
        return instance(config).get(url)
    },

    delete: (url, config) => {
        return instance(config).delete(url)
    },

    post: (url, data, config) => {
        return instance(config).post(url, data)
    },

    patch: (url, data, config) => {
        return instance(config).patch(url, data)
    },

    put: (url, data, config) => {
        return instance(config).put(url, data)
    },
}
