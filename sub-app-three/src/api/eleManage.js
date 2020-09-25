import request from '@/utils/request'

/**
 * 要素管理模块接口地址 ---> 配置要素  *********************************************
 * @param {*} params 
 */

// 获取列表
export const getConfEleList = (params) => {
  return request({
    url: '/element/getConfigureElement',
    method: 'get',
    params
  })
}

// 获取单个子项列表
export const getConfEleChildList = (params) => {
  return request({
    url: '/element/getLeafElementList',
    method: 'get',
    params
  })
}

// 更新要素状态
export const updateEleSts = (data) => {
  return request({
    url: '/element/updateElementState',
    method: 'post',
    data
  })
}

// 新增配置要素
export const addConfEle = (data) => {
  return request({
    url: '/element/addConfigureElement',
    method: 'post',
    data
  })
}

// 更新配置要素
export const updateConfEle = (data) => {
  return request({
    url: '/element/updateConfigureElement',
    method: 'post',
    data
  })
}

// 删除配置要素
export const removeConfEle = (params) => {
  return request({
    url: '/element/deleteElement',
    method: 'post',
    params
  })
}

// 获取详情
export const getEleDetail = (params) => {
  return request({
    url: '/element/getElementDetail',
    method: 'get',
    params
  })
}

/**
 * 要素管理模块接口地址 ---> 基本信息要素 *********************************************
 * @param {*} params 
 */

// 获取列表
export const getBaseEleList = (params) => {
  return request({
    url: '/element/getBaseInfoElement',
    method: 'get',
    params
  })
}

// 新增基本信息要素
export const addBaseEle = (data) => {
  return request({
    url: '/element/addBaseInfoElement',
    method: 'post',
    data
  })
}

// 更新基本信息要素
export const updateBaseEle = (data) => {
  return request({
    url: '/element/updateBaseInfoElement',
    method: 'post',
    data
  })
}

/**
 * 要素管理模块接口地址 ---> 办理流程要素 *********************************************
 * @param {*} params 
 */

// 获取列表
export const getProcessEleList = (params) => {
  return request({
    url: '/element/getProcessElement',
    method: 'get',
    params
  })
}

// 新增处理流程要素
export const addProcessEle = (data) => {
  return request({
    url: '/element/addProcessElement',
    method: 'post',
    data
  })
}

// 更新办理要素
export const updateProcessEle = (data) => {
  return request({
    url: '/element/updateProcessElement',
    method: 'post',
    data
  })
}

/**
 * 要素管理模块接口地址 ---> 交换目录要素  *********************************************
 * @param {*} params 
 */

// 获取列表
export const getExchangeEleList = (params) => {
  return request({
    url: '/element/getExchangeElement',
    method: 'get',
    params
  })
}

// 新增交换目录要素
export const addExchangeEle = (data) => {
  return request({
    url: '/element/addExchangeElement',
    method: 'post',
    data
  })
}

// 更新交换目录要素
export const updateExchangeEle = (data) => {
  return request({
    url: '/element/updateExchangeElement',
    method: 'post',
    data
  })
}


/**
 * 要素管理材料列表要素模块接口地址 *********************************************
 * @param {*} params
 */

// 获取材料要素列表
export const getMaterialEleList = (params) => {
  return request({
    url: '/elementAttr/getListByKey',
    method: 'get',
    params
  })
}

// 修改状态
export const updateMaterialSts = (params) => {
  return request({
    url: '/elementAttr/batchUpdate',
    method: 'post',
    params
  })
}

// 修改材料要素
export const updateMaterialEle = (data) => {
  return request({
    url: '/elementAttr/update',
    method: 'post',
    data
  })
}

// 新增材料要素
export const addMaterialEle = (data) => {
  return request({
    url: '/elementAttr/add',
    method: 'post',
    data
  })
}

// 删除
export const removeMaterialEle = (params) => {
  return request({
    url: '/elementAttr/batchDelete',
    method: 'post',
    params
  })
}

// 查详情
export const getMaterialEleInfo = (params) => {
  return request({
    url: '/elementAttr/getByUuid',
    method: 'get',
    params
  })
}

// 查询子项
export const getMaterialChildEle = (params) => {
  return request({
    url: '/elementAttr/getListParent',
    method: 'get',
    params
  })
}
