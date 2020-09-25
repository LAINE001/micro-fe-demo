import request from '@/utils/request'

// 模型列表
export function getModelList(params) {
  return request({
    url: '/model/getModelList',
    method: 'get',
    params
  })
}

//禁用和发布
export function updateModelStatus(params) {
  return request({
    url: '/model/updateModelStatus',
    method: 'post',
    params
  })
}

// 批量删除
export function batchDelModel(params) {
  return request({
    url: '/model/batchDelModel',
    method: 'post',
    params
  })
}

// 判断是否有可继承的模型
export function existLastModel(params) {
  return request({
    url: '/model/existLastModel',
    method: 'get',
    params
  })
}

// 模型管理导出
export function batchExportModel(params) {
  return request({
    url: '/model/batchExportModel',
    method: 'post',
    params
  })
}

// 获取基本详情
export function getBasicModel(params) {
  return request({
    url: '/model/getBasicModel',
    method: 'get',
    params
  })
}

//  -----------------模型详情----------------
// 新增要素数据
export function getElementList(params) {
  return request({
    url: '/element/getElementList',
    method: 'get',
    params
  })
}

// 根据id获取详情(可继承上一级的)
export function getModelInfo(params) {
  return request({
    url: '/model/getModelInfo',
    method: 'get',
    params
  })
}

// 新增模型
export function getAddModel(data) {
  return request({
    url: '/model/addModel',
    method: 'post',
    data
  })
}

// 编辑模型
export function updateModel(data) {
  return request({
    url: '/model/updateModel',
    method: 'post',
    data
  })
}
