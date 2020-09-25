import request from '@/utils/request'

// 检测查询
export function queryCheck(params) {
  return request({
    url: '/config/check/query',
    method: 'get',
    params
  })
}
// 检测保存
export function updateCheck(data) {
  return request({
    url: '/config/check/add',
    method: 'post',
    data
  })
}