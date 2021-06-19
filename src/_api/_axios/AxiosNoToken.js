import 'regenerator-runtime/runtime';
import Axios from 'axios';
import queryString from 'query-string';
//
import { csrftoken } from '../_common/_ConstAPI';

// Create Axios
const axiosClientNoToken = Axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        Accept: '*/*',
        // 'content-type': 'application/json',
        'Content-Type':
            'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
        'X-CSRFToken': csrftoken(),
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientNoToken.interceptors.response.use(
    (response) => {
        return response;
    },
    (err) => {
        console.log(err);
    }
);

export default axiosClientNoToken;
