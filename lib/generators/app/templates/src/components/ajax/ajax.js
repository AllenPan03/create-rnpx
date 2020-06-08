/* eslint-disable */
import pck from '../../../package.json';
import rnpxAjax from "@wd-mobile/ajax-config";
import { getQuery } from 'utils/query';
const env = __wd_define_env__;//全局环境变量,webpack-config内部定义
let baseURL = (() => {
    if (getQuery('api')) return getQuery('api')
    switch (env) {
        case 'fat':
        case 'fat1':
        case 'fat2':
        case 'fat3':
            return pck.env.fat
        case 'uat':
            return pck.env.uat
        case 'dev':
            return pck.env.dev
        default:
            return pck.env.prd
    }
})()
// rnpxAjax初始化
rnpxAjax.init({
    env, baseURL
})

exports.ajax = rnpxAjax.ajax;

