import axiosClientNoToken from '../_axios/AxiosNoToken';
// 
import { API_FakeReal } from '../_common/_ConstAPI';
// 
import { default_politics_l } from '../../pages/home/head/__default/HomeHeadDefault';

//
export const API_Politics_L = (params) =>
    API_FakeReal(default_politics_l, () =>
        axiosClientNoToken({
            url: '/api/politics-l/',
            method: 'GET',
            params: params,
        }),
        params
    );
