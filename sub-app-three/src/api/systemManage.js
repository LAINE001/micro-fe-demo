import request from '@/utils/request'

// ---------------首页设置--------------------
// 常用查询(快捷入口查询)
export function getQuckSystemList(params) {
  return request({
    url: '/system/quick/getSystemList',
    method: 'get',
    params
  })
}
// 首页快捷入口清零
export function deleteHomeQuick(params) {
  return request({
    url: '/system/quick/deleteHomeQuick',
    method: 'post',
    params
  })
}

// 首页kpi
export function counts(params) {
  return request({
    url: '/analysis/counts',
    method: 'get',
    params
  })
}
// 首页配置kpi删除
export function deleteHomeKpi(params) {
  return request({
    url: '/system/kpi/deleteHomeKpi',
    method: 'post',
    params
  })
}
// 首页配置kpi列表
export function getKpiList(params) {
  return request({
    url: '/system/kpi/getSystemList',
    method: 'get',
    params
  })
}
// 首页配置kpi新增
export function addHomeKpi(data) {
  return request({
    url: '/system/kpi/addHomeKpi',
    method: 'post',
    data
  })
}
// 首页配置kpi编辑
export function updateHomeKpi(data) {
  return request({
    url: '/system/kpi/updateHomeKpi',
    method: 'post',
    data
  })
}
// 首页配置其他指标列表
export function getIndicator(params) {
  return request({
    url: '/system/home/indicator/get',
    method: 'get',
    params
  })
}
// 首页配置其他指标新增
export function indicatorAdd(data) {
  return request({
    url: '/system/home/indicator/add',
    method: 'post',
    data
  })
}
// 首页配置其他指标编辑
export function indicatorUpdate(data) {
  return request({
    url: '/system/home/indicator/update',
    method: 'post',
    data
  })
}
// 首页配置其他指标删除
export function indicatorDelete(params) {
  return request({
    url: '/system/home/indicator/delete',
    method: 'post',
    params
  })
}

// 首页配置主图列表
export function getGraph(params) {
  return request({
    url: '/system/home/Graph/get',
    method: 'get',
    params
  })
}

// 首页配置主图新增
export function addGraph(data) {
  return request({
    url: '/system/home/Graph/add',
    method: 'post',
    data
  })
}
// 首页配置主图编辑
export function updateGraph(data) {
  return request({
    url: '/system/home/Graph/update',
    method: 'post',
    data
  })
}

// 首页配置新增
export function addHomeQuick(data) {
  return request({
    url: '/system/quick/addHomeQuick',
    method: 'post',
    data
  })
}
// 通知消息管理
export function getMessageList(params) {
  return request({
    url: '/home/message/getMessageList',
    method: 'get',
    params
  })
}
// ---------------字典管理--------------------
// 字典管理
export function getDictByPid(params) {
  return request({
    url: '/dic/getDictByPid',
    method: 'get',
    params
  })
}
 // 新增字典
 export function addDict(data) {
  return request({
    url: '/dic/addDict',
    method: 'post',
    data
  })
}

 // 编辑字典
 export function updateDict(params) {
  return request({
    url: '/dic/updateDict',
    method: 'post',
    params
  })
}

 // 删除字典
 export function deleteDict(params) {
  return request({
    url: '/dic/deleteDict',
    method: 'post',
    params
  })
}

// 根据字典类型查询字典信息
export function getDictListByType(params) {
  return request({
    url: '/dic/getDictListByType',
    method: 'get',
    params
  })
}
// 将消息标为已读
export function messageRead(data) {
  return request({
    url: '/home/message/messageRead',
    method: 'post',
    data
  })
}

// 消息标批量删除
export function messageDelete(data) {
  return request({
    url: '/home/message/messageDelete',
    method: 'post',
    data
  })
}
// 日志管理
export function operate(params) {
  return request({
    url: '/logs/operate',
    method: 'get',
    params
  })
}

// 我的管理列表
export function getSystemList(params) {
  return request({
    url: '/system/getSystemRegisterList',
    method: 'get',
    params
  })
}

// 删除系统
export function delSystem(params) {
  return request({
    url: '/system/delSystem',
    method: 'post',
    params
  })
}

// 新建系统接口
export function addSystem(data) {
  return request({
    url: '/system/addSystem',
    method: 'post',
    data
  })
}

// --------------------获取申请服务--------------------
// 系统详情
export function getSystemInfo(params) {
  return request({
    url: '/system/getSystemInfo',
    method: 'get',
    params
  })
}
// 编辑系统(开发设置)
export function updateSystemInfo(data) {
  return request({
    url: '/system/updateSystemInfo',
    method: 'post',
    data
  })
}

// 服务启用和禁用
export function updateSysService(params) {
  return request({
    url: '/system/updateSysService',
    method: 'post',
    params
  })
}

// 删除服务
export function delSysService(params) {
  return request({
    url: '/system/delSystem',
    method: 'post',
    params
  })
}

// 查询服务清单
export function getSysServiceList(params) {
  return request({
    url: '/system/getSysServiceList',
    method: 'get',
    params
  })
}

// 服务系统添加
export function addSysService(data) {
  return request({
    url: '/system/addSysService',
    method: 'post',
    data
  })
}

// 获取可选服务名称列表
export function getAllService(data) {
  return request({
    url: '/system/getAllService',
    method: 'get',
    data
  })
}