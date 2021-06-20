import axiosClientNoToken from '../_axios/AxiosNoToken';
// 
import { API_FakeReal } from '../_common/_ConstAPI';
// 
import { default_tech_l } from '../../pages/home/__default/HomeHeadDefault';

//
export const API_Tech_L = (params) =>
    API_FakeReal(default_tech_l, () =>
        axiosClientNoToken({
            url: '/api/tech-l/',
            method: 'GET',
            params: params,
        }),
        params
    );
