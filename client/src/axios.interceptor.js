import axios from 'axios';

export const defineInterceptors = (callbacks) => {
    axios.interceptors.response.use((request) => {
        return request;
    }, (error) => {
        if (window.location.pathname !== '/') {
            if (error.response.config.url.indexOf('check_token') !== -1) {
                if (error.response.status === 400) {
                    callbacks.redirectLogin();
                }
            }
            if(error.response.status === 403 || error.response.status === 401){
                callbacks.forbidden();
            }
            if(error.response.status === 500){
                callbacks.internal();
            }
        }

        return Promise.reject(error)
    });
};