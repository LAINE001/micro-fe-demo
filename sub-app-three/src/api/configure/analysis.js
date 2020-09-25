import request from '@/utils/request'

//指标设置--编辑
export function updateIndicator(data) {
  return request({
    url: '/indicator/update',
    method: 'post',
    data
  })
}

//指标设置--查询
export function getIndicator(params) {
  return request({
    url: '/indicator/get',
    method: 'get',
    params
  })
}

//指标设置--新增
export function addIndicator(data) {
  return request({
    url: '/indicator/add',
    method: 'post',
    data
  })
}

//指标设置--删除
export function deleteMuli(params) {
  return request({
    url: '/indicator/batch/delete',
    method: 'post',
    params
  })
}

//指标设置--禁用
export function toggle(params) {
  return request({
    url: '/indicator/batch/toggle',
    method: 'post',
    params
  })
}

//指标模型--查询
export function getModel(params) {
  return request({
    url: '/model/get',
    method: 'get',
    params
  })
}

//指标模型--新增
export function addModel(data) {
  return request({
    url: '/model/add',
    method: 'post',
    data
  })
}

//指标模型--更新
export function updateModel(data) {
  return request({
    url: '/model/update',
    method: 'post',
    data
  })
}

//指标模型--删除
export function deleteModel(params) {
  return request({
    url: '/model/batch/delete',
    method: 'get',
    params
  })
}

//指标模型--切换状态
export function toggleModel(params) {
  return request({
    url: '/model/batch/toggle',
    method: 'get',
    params
  })
}

//top数--查询
export function getTop(params) {
  return request({
    url: '/top/get',
    method: 'get',
    params
  })
}

//top数--新增
export function addTop(data) {
  return request({
    url: '/top/add',
    method: 'post',
    data
  })
}

//top数--更新
export function updateTop(data) {
  return request({
    url: '/top/update',
    method: 'post',
    data
  })
}

//top数--删除
export function deleteTop(params) {
  return request({
    url: '/top/batch/delete',
    method: 'get',
    params
  })
}

//top数--切换状态
export function toggleTop(params) {
  return request({
    url: '/top/batch/toggle',
    method: 'get',
    params
  })
}

//top数--top指标下拉框
export function topSelect(params) {
  return request({
    url: '/top/indicator/dropList',
    method: 'get',
    params
  })
}

//地区穿透--查询
export function dictruteGet(params) {
  return request({
    url: '/penetrate/get',
    method: 'get',
    params
  })
}

//地区穿透--新增
export function dictruteAdd(data) {
  return request({
    url: '/penetrate/add',
    method: 'post',
    data
  })
}

//地区穿透--更新
export function dictruteUpdate(data) {
  return request({
    url: '/penetrate/update',
    method: 'post',
    data
  })
}
