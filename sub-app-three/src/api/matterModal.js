import request from '@/utils/request'

//材料列表模型查询
export function getMaterialList(params) {
  return request({
    url: '/model/attr/get',
    method: 'get',
    params
  })
}

//查询基本模型或者上一级模型
export function getModelTemplate(params) {
  return request({
    url: '/model/attr/template',
    method: 'get',
    params
  })
}
// 更新材料模型的状态(这个接口新的版本已改成post请求，目前先用get调)
export const changeMaterialSts = (params) => {
  return request({
    url: '/model/attr/change',
    method: 'post',
    params
  })
}

//删除(这个接口新的版本已改成post请求，目前先用get调)
export function MaterialDelete(params) {
  return request({
    url: '/model/attr/delete',
    method: 'post',
    params
  })
}

// 根据用户所在地区等级查询要素
export const elemnetList = (params) => {
  return request({
    url: '/model/attr/elemnetList',
    method: 'get',
    params
  })
}
//新增材料模型信息
export const getAddMaterial = (data) => {
  return request({
    url: '/model/attr/add',
    method: 'post',
    data
  })
}

//修改材料模型信息
export const updateMaterialMessgge = (data) => {
  return request({
    url: '/model/attr/update',
    method: 'post',
    data
  })
}
// 根据用户所在地区等级查询要素
export const modelInfo = (params) => {
  return request({
    url: '/model/attr/modelInfo',
    method: 'get',
    params
  })
}
