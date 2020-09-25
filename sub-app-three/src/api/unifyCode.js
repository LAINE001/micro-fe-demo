import request from '@/utils/request'
// 统一赋码
// 赋码规则列表获取
export function getRegexLists(params) {
  return request({
    url: '/archivesCodeRegex/getRegexLists',
    method: 'get',
    params
  })
}
// 赋码规则编辑
export function updateRegex(data) {
  return request({
    url: '/archivesCodeRegex/updateRegex',
    method: 'post',
    data
  })
}

// 赋码规则查询列表
export function getRegexsByKey(params) {
  return request({
    url: '/archivesCodeRegex/getRegexsByKey',
    method: 'get',
    params
  })
}
// 档号关键字查询列表
export function getProjArchiveByKey(params) {
  return request({
    url: '/projArchiveCode/getProjArchiveByKey',
    method: 'get',
    params
  })
}

// 分发管理列表
export function getByKeys(params) {
  return request({
    url: '/archivesDispatcher/getByKeys',
    method: 'get',
    params
  })
}
// 批量删除
export function batchDeleteByUuid(params) {
  return request({
    url: '/archivesDispatcher/batchDeleteByUuid',
    method: 'post',
    params
  })
}
// 单条删除
export function deleteByUuid(params) {
  return request({
    url: '/archivesDispatcher/deleteByUuid',
    method: 'post',
    params
  })
}

// 批量状态修改
export function batchUpdateStateByUuid(params) {
  return request({
    url: '/archivesDispatcher/batchUpdateStateByUuid',
    method: 'post',
    params
  })
}
// 单条状态修改
export function updateStateByUuid(params) {
  return request({
    url: '/archivesDispatcher/updateStateByUuid',
    method: 'post',
    params
  })
}


// 单条数据修改
export function updateByUuid(data) {
  return request({
    url: '/archivesDispatcher/updateByUuid',
    method: 'post',
    data
  })
}
// 单条数据添加
export function add(data) {
  return request({
    url: '/archivesDispatcher/add',
    method: 'post',
    data
  })
}




