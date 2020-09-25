import request from '@/utils/request'

// 获取部门
export const getDeptList = (params) => {
  return request({
    url: '/department/getDeptConditions',
    method: 'get',
    params
  })
}

// 获取发送方列表
export const getSenderList = (params) => {
  return request({
    url: '/transfer/sender/getSenders',
    method: 'get',
    params
  })
}

// 获取接收方列表
export const getReceiverList = (params) => {
  return request({
    url: '/transfer/receiver/getReceivers',
    method: 'get',
    params
  })
}

// 修改服务请求量
export const updateRequestNum = (params) => {
  return request({
    url: '/transfer/sender/requestNum',
    method: 'get',
    params
  })
}

// 发送方管理 获取详情
export const getSenderInfo = (params) => {
  return request({
    url: '/system/getApplyServiceByUnidType',
    method: 'get',
    params
  })
}

// 接收方管理 获取详情
export const getReceiverInfo = (params) => {
  return request({
    url: '/system/getReleaseServiceByUnidType',
    method: 'get',
    params
  })
}

// 发送方管理 审批
export const senderAudit = (data) => {
  return request({
    url: '/transfer/sender/auditResult',
    method: 'post',
    data
  })
}

// 接收方管理 审批
export const receiverAudit = (data) => {
  return request({
    url: '/transfer/receiver/auditResult',
    method: 'post',
    data
  })
}

// 发送方管理 启用禁用
export const updateEnableFlag = (params) => {
  return request({
    url: '/transfer/sender/isEnable',
    method: 'get',
    params
  })
}

// 接收方管理 启用禁用
export const updateReceEnableFlag = (params) => {
  return request({
    url: '/transfer/receiver/isEnable',
    method: 'get',
    params
  })
}

// --------------------------------------------------------------
// 移交申请列表
export const getTransferApplyList = (params) => {
  return request({
    url: '/transfer/getTransferInfo',
    method: 'get',
    params
  })
}

// 移交申请列表 提交
export const submitTransfer = (params) => {
  return request({
    url: '/transfer/commitTransferInfo',
    method: 'post',
    params
  })
}

// 移交日志
export const getTransferLogs = (params) => {
  return request({
    url: '/logs/transferLogs',
    method: 'get',
    params
  })
}