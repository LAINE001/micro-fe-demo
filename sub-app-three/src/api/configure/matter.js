import request from '@/utils/request'

//事项管理--查询
export function getTaskList(params) {
  return request({
    url: '/task/getTaskList',
    method: 'get',
    params
  })
}
//事项管理--查询 新接口 （包括事项中心和本地库）
export function getTaskCenter(params) {
  return request({
    // task/getTaskCenter
    url: '/hoox/smp/service/archive/v1/queryApasServiceArchiveList',
    method: 'get',
    params,
  })
}
// 事项中心详情接口
export function getTaskDetail(params) {
  return request({
    url: '/hoox/smp/manage/service/v1/service',
    method: 'get',
    params,
  })
}

//事项管理--修改事项状态
export function batchUpdate(params) {
  return request({
    url: '/task/batchUpdate',
    method: 'post',
    params
  })
}

//事项管理--查看详情(基本信息)
export function getTaskInfo(params) {
  return request({
    url: '/task/getTaskInfo',
    method: 'get',
    params
  })
}

// 新增事项-勾选材料目录
export function addTask(data) {
  return request({
    url: '/task/addTask',
    method: 'post',
    data
  })
}

// 编辑事项-勾选材料目录
export function updateTask(data) {
  return request({
    url: '/task/updateTask',
    method: 'post',
    data
  })
}

// 事项材料目录-类别查询(独立版本)
export function queryByType(params) {
  return request({
    url: '/config/taskAttr/queryByType',
    method: 'get',
    params
  })
}

// 事项材料列表
export function getTaskAttrList(params) {
  return request({
    url: '/model/attr/matterAttrInfo',
    method: 'get',
    params,
  })
}

// 校验事项编码、事项名称是否重复 
export function check(params) {
  return request({
    url: '/task/checkTask',
    method: 'get',
    params
  })
}

// 事项中心  事项列表 掉总部接口
export function serviceListByParams(params) {
  return request({
    url: '/hoox/smp/manage/service/v1/serviceListByParams',
    method: 'get',
    params,
  })
}

// （事项用）根据部门编码查询部门条线绑定详情
export function getDeptRelationInfo(params) {
  return request({
    url: '/deptRelation/getDeptRelationInfo',
    method: 'get',
    params,
  })
}



