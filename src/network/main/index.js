import request from "../request";
const testAPI = require("../../apis"); //此处务必使用require导入（因为是module.exports导出的...）


export const getAllExternal = config => request._get(testAPI.EXTERNAL_ALL, config);
export const getAllInternal = config => request._get(testAPI.INTERNAL_ALL, config);
export const getExternalById = config => request._get(testAPI.EXTERNAL_BY_ID, config);
export const getInternalById = config => request._get(testAPI.INTERNAL_BY_ID, config);
export const getSimilarityById = config => request._get(testAPI.SIMILARITY_BY_ID, config);
export const getAP = config => request._get(testAPI.AP, config);
export const getMAP = config => request._get(testAPI.MAP, config);





