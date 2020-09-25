import request from '@/utils/request'

/**
 * 归档信息查询
 * @param {*} params
 * statusIds/archiveStatus: 归档状态
 * 0:接收中; 1:已接收
 * 10:预归档检测中;11:预归档已检测
 * 2:打包中; 3:已打包
 * 4:移交前检测中; 5:移交前已检测
 * 6:加密中; 7:已加密
 * 8:审核中; 9:已审核
 * 
 * archiveResult: 结果
 * 0 成功
 * 1 失败
 * 
 * archiveType:
 * 0 电子文件组（信息接收）
 * 1 档案包
 * 
 */

// 获取列表
export function getArchiveList(params) {
  return request({
    url: '/prefiled/query/getArchivesInfoList',
    method: 'get',
    params
  })
}

// 删除
export function removeFile(params) {
  return request({
    url: '/prefiled/query/deleteFile',
    method: 'post',
    params
  })
}

// 详情
export function getArchiveDetail(params) {
  return request({
    url: '/prefiled/query/getArchivesInfoDetail',
    method: 'get',
    params
  })
}

// 上传文件
export function uploadFiles(data) {
  return request({
    url: '/prefiled/query/uploadFile',
    method: 'post',
    data,
    timeout: 500 * 1000 * 10000
  })
}

// 1 信息检测列表[接收成功]   提交（打包前检测） ----- 接收列表和信息检测列表调用
export function agePackCheck(params) {
  return request({
    url: '/prefiled/check/checkArchivesInfo',
    method: 'post',
    params
  })
}

// 2 档案包检测列表   提交 检测（移交前检测）
export function ageTransferCheck(params) {
  return request({
    url: '/prefiled/check/checkArchivesPackage',
    method: 'post',
    params
  })
}

// 提交打包【无用】
export function subPack(params) {
  return request({
    url: '/prefiled/pack/submit',
    method: 'get',
    params
  })
}

// 重新打包
export function subRePack(params) {
  return request({
    url: '/prefiled/pack/afresh',
    method: 'post',
    params
  })
}

// 领导审批（批量）
export function leaderCheck(data) {
  return request({
    url: '/prefiled/audit/archivesAuditResult',
    method: 'post',
    data
  })
}

// 提交加密接口
export function subEncryptArchives(data) {
  return request({
    url: '/prefiled/encrypt/encryptArchivesInfo',
    method: 'post',
    data
  })
}

// 提交检测接口
export function subCheckArchives(params) {
  return request({
    url: '/prefiled/check/checkArchivesInfo',
    method: 'post',
    params
  })
}

// 业务员发起审核
export function sendCheck(params) {
  return request({
    url: '/prefiled/audit/archivesAudit',
    method: 'post',
    params
  })
}

// 归档进度查询
export function getArchiveProcess(params) {
  return request({
    url: '/archives/getArchivesProcess',
    method: 'get',
    params
  })
}

// 撤回
export function recallPre(params) {
  return request({
    url: '/prefiled/audit/archivesWithdraw',
    method: 'post',
    params
  })
}

// 档案包撤回之后  重新提交 修改状态
export function updateArchiveStatus(params) {
  return request({
    url: '/prefiled/query/updateStatus',
    method: 'post',
    params
  })
}