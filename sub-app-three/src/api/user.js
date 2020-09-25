import request from '@/utils/request'

// export function signIn(data) {
//   return request({
//     url: '/oauth/token',
//     method: 'post',
//     data,
//     headers: {
//       'form-data': true,
//       'Authorization': 'Basic emp5Zi12dWUtYXJjaGl2ZXM6emp5Zi12dWUtYXJjaGl2ZXNfc2VjcmV0'
//     }
//   })
// }

export function signIn(data) {
  return request({
    url: '/account/token',
    method: 'post',
    data,
    headers: {
      'form-data': true,
      'Authorization': 'Basic emp5Zi12dWUtYXJjaGl2ZXM6emp5Zi12dWUtYXJjaGl2ZXNfc2VjcmV0'
    }
  })
}

export function getAccountInfo(params) {
  return request({
    url: '/account/user',
    method: 'get',
    params
  })
}


export function reqLogout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}

//获取地区接口
export function getRegionConditions(params) {
  return request({
    url: '/region/getRegionConditions',
    method: 'get',
    params,
  })
}

// 获取部门接口
export function getDeptConditions(params) {
  return request({
    url: '/department/getDeptConditions',
    method: 'get',
    params,
  })
}

// 菜单接口
export function getAccountMenu(params) {
  return request({
    url: '/account/menu',
    method: 'get',
    params
  })
}

// 获取证书
export function getCertificate(params) {
  return request({
    url: '/license/authLicense',
    method: 'get',
    params
  })
}