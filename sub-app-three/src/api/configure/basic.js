import request from '@/utils/request'

//区划查询
// export function getDivision(params) {
//   return request({
//     url: '/division/getDivision',
//     method: 'get',
//     params
//   })
// }

//获取地区接口(用于显示区划列表)
export function getDivision(params) {
  return request({
    url: '/region/getRegionConditionsByPage',
    method: 'get',
    params,
  })
}

//区划新增
export function addDivision(data) {
  return request({
    url: '/division/addDivision',
    method: 'post',
    data
  })
}

//区划更新
export function updateDivision(data) {
  return request({
    url: '/division/updateDivision',
    method: 'post',
    data
  })
}

//区划删除
export function deleteDivision(data) {
  return request({
    url: '/division/deleteDivision',
    method: 'post',
    data
  })
}

//部门查询
export function getDept(params) {
  return request({
    url: '/dept/getDept',
    method: 'get',
    params
  })
}

//部门新增--批量导入
export function addDept(data) {
  return request({
    url: '/dept/addDept',
    method: 'post',
    data
  })
}

//部门新增--单条
export function addDeptSingle(data) {
  return request({
    url: '/dept/addDeptSingle',
    method: 'post',
    data
  })
}

//部门更新
export function updateDept(data) {
  return request({
    url: '/dept/updateDept',
    method: 'post',
    data
  })
}

//部门删除
export function deleteDept(data) {
  return request({
    url: '/dept/deleteDept',
    method: 'post',
    data
  })
}

// 部门信息管理
// 新增
export function addDeptRelation(params) {
  return request({
    url: '/deptRelation/addDeptRelation',
    method: 'post',
    params
  })
}

// 审核
export function approveDeptRelation(params) {
  return request({
    url: '/deptRelation/approveDeptRelation',
    method: 'post',
    params
  })
}

// 编辑部门条线绑定（重新提交审核）
export function updateDeptRelation(params) {
  return request({
    url: '/deptRelation/updateDeptRelation',
    method: 'post',
    params
  })
}

// 查询部门条线列表
export function getDeptRelationList(params) {
  return request({
    url: '/deptRelation/getDeptRelationList',
    method: 'get',
    params
  })
}

// 根据部门编码查询部门条线绑定详情（业务人员）
export function getDeptRelationInfoByDeptCode(params) {
  return request({
    url: '/deptRelation/getDeptRelationInfoByDeptCode',
    method: 'get',
    params
  })
}

// 根据主键unid查询部门条线绑定详情（档案馆查看详情）
export function getDeptRelationInfoById(params) {
  return request({
    url: '/deptRelation/getDeptRelationInfoById',
    method: 'get',
    params
  })
}

// 查询部门条线下拉框列表
export function getDeptSelectList(params) {
  return request({
    url: '/deptRelation/getDeptSelectList',
    method: 'get',
    params
  })
}