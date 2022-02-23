import axios from 'axios';
import router from "../router";
import {ElMessage} from 'element-plus';

const service = axios.create({
    baseURL: '/api',
    timeout: 30000
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    response => {
        if (response.data.code === 0) {
            return response.data;
        } else {
            response.data.message && ElMessage.error(response.data.message);
            return Promise.reject();
        }
    },
    error => {
        if (error.response && error.response.status === 401) {
            localStorage.removeItem('d-username');
            router.push('/login');
        }
        ElMessage.error(error.response && error.response.data && error.response.data.message || `Request Failed`);
        return Promise.reject(error);
    }
);


export default service;
