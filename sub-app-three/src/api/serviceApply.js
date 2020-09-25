import request from '@/utils/request'
// ....................申请服务...............................
// 系统下拉数据
export function getSystemListByDeptId(params) {
  return request({
    url: '/system/getSystemListByDeptId',
    method: 'get',
    params
  })
}
// 服务下拉数据
export function getServiceListBySysUnid(params) {
  return request({
    url: '/system/getServiceListBySysUnid',
    method: 'get',
    params
  })
}

// 申请服务清单的服务选择
export function getSysServicesByType(params) {
  return request({
    url: '/system/getSysServicesByType',
    method: 'get',
    params
  })
}
// 申请详情
export function getApplyInfo(params) {
  return request({
    url: '/system/getApplyServiceByUnidType',
    method: 'get',
    params
  })
}
// 删除服务
export function delSysService(params) {
  return request({
    url: '/system/delSysService',
    method: 'post',
    params
  })
}
// 新增
export function addApply(data) {
  return request({
    url: '/system/addApplySysService',
    method: 'post',
    data
  })
}
// 编辑
export function updateApply(data) {
  return request({
    url: '/system/updateApplySysService',
    method: 'post',
    data
  })
}

// ....................发布服务...............................
// 新增
export function addRelease(data) {
  return request({
    url: '/system/addReleaseSysService',
    method: 'post',
    data
  })
}
// 发布详情
export function getReleaseInfo(params) {
  return request({
    url: '/system/getReleaseServiceByUnidType',
    method: 'get',
    params
  })
}

// 编辑
export function updateRelease(data) {
  return request({
    url: '/system/updateReleaseSysService',
    method: 'post',
    data
  })
}

// 系统注册管理
export function getSystemManageList(params) {
  return request({
    url: '/system/getSystemManageList',
    method: 'get',
    params
  })
}

// 获取部门
export const getDeptList = (params) => {
  return request({
    url: '/department/getDeptConditions',
    method: 'get',
    params
  })
}


// 审批接口
export function auditSystem(data) {
  return request({
    url: '/system/auditSystem',
    method: 'post',
    data
  })
}
