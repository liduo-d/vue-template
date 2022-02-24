import request from '@/utils/request'

export const mockAPI = () => {
    return request({
        url: '/mock/url',
        method: 'GET'
    });
};
