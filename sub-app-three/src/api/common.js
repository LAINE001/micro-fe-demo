import request from '@/utils/request'

// 事项列表(字典)
export function getDictListByType(dictType = '') {
  return request({
    url: '/dic/getDictListByType',
    method: 'get',
    params: {
      dictStatus: 'Y',
      dictType
    }
  })
}

// 获取菜单
export function getMenuList(params) {
  return request({
    url: '/app-resources/getResourcesCollect',
    method: 'get',
    params
  })
}