import request from '@/utils/request'

export function getHomeKpiList(params) {
  return request({
    url: '/system/kpi/getSystemList',
    method: 'get',
    params
  })
}

export function getHomeMenuList(params) {
  return request({
    url: '/system/quick/getSystemList',
    method: 'get',
    params
  })
}

export function getHomeChartConf(params) {
  return request({
    url: '/system/home/Graph/get',
    method: 'get',
    params
  })
}

export function getHomeChartList(params) {
  return request({
    url: '/system/home/indicator/get',
    method: 'get',
    params
  })
}