import request from '@/utils/request'

//接收方式--编辑
export function updateReceive(data) {
  return request({
    url: '/receive/updateReceive',
    method: 'post',
    data
  })
}

//接收方式--查询
export function getReceive(params) {
  return request({
    url: '/receive/getReceive',
    method: 'get',
    params
  })
}

//接收方式--新增
export function addReceive(data) {
  return request({
    url: '/receive/addReceive',
    method: 'post',
    data
  })
}

//接收方式--删除
export function deleteReveive(data) {
  return request({
    url: '/receive/deleteReveive',
    method: 'post',
    data
  })
}

//接收方式--禁用
export function disableReveive(data) {
  return request({
    url: '/receive/disableReveive',
    method: 'post',
    data
  })
}

//存储方式--编辑
export function updateStorage(data) {
  return request({
    url: '/storage/updateStorage',
    method: 'post',
    data
  })
}

//存储方式--查询
export function getStorage(params) {
  return request({
    url: '/storage/getStorage',
    method: 'get',
    params
  })
}

//存储方式--新增
export function addStorage(data) {
  return request({
    url: '/storage/addStorage',
    method: 'post',
    data
  })
}

//存储方式--删除
export function deleteStorage(data) {
  return request({
    url: '/storage/deleteStorage',
    method: 'post',
    data
  })
}

//分发方式--编辑
export function updateDistribute(data) {
  return request({
    url: '/distribute/updateDistribute',
    method: 'post',
    data
  })
}

//分发方式--查询
export function getDistribute(params) {
  return request({
    url: '/distribute/getDistribute',
    method: 'get',
    params
  })
}

//分发方式--新增
export function addDistribute(data) {
  return request({
    url: '/distribute/addDistribute',
    method: 'post',
    data
  })
}

//分发方式--删除
export function deleteDistribute(data) {
  return request({
    url: '/distribute/deleteDistribute',
    method: 'post',
    data
  })
}

//限流方式--编辑
export function updateLimit(data) {
  return request({
    url: '/limiting/updateLimit',
    method: 'post',
    data
  })
}

//限流方式--查询
export function getLimit(params) {
  return request({
    url: '/limiting/getLimit',
    method: 'get',
    params
  })
}

//限流方式--新增
export function addLimit(data) {
  return request({
    url: '/limiting/addLimit',
    method: 'post',
    data
  })
}

// 刷新网关路由,与限流方式的新增编辑接口一起调用
export function refresh(params) {
  return request({
    url: '/gateway/refresh',
    method: 'get',
    params
  })
}

//限流方式--删除
export function deleteLimit(data) {
  return request({
    url: '/limiting/deleteLimit',
    method: 'post',
    data
  })
}

//限流方式--功能方式
export function getRoute(params) {
  return request({
    url: '/route/getRoute',
    method: 'get',
    params
  })
}

// 加密查询接口
export function getEncryQuery(params) {
  return request({
    url: '/config/encryDocnumber/queryEncry',
    method: 'get',
    params
  })
}

// 加密
export function encrySave(data) {
  return request({
    url: '/config/encryDocnumber/encry',
    method: 'post',
    data
  })
}

