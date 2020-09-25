import * as types from "../action-types";
import { getAccountInfo, getAccountMenu } from "@/api/user"

export const getUserInfo = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    getAccountInfo()
      .then(response => {
        if (!response) return
        delete response.authorities
        // 角色都取数组第一个
        let rolesId = (response && response.roles.length > 0) ? response.roles[0].roleId : ''
        localStorage.setItem('ssoToken', response.ssoToken)
        getAccountMenu({roleId:rolesId}).then(res => {
          if (!res) return
          dispatch(setMenuList(res));
          resolve(response)
        }).catch()
        
        dispatch(setUserInfo(response));
      }).catch()
  })
}


/**
 * 
 * @param {*} token 
 */
export const setUserToken = (token) => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token,
  };
};

export const setUserInfo = (userInfo) => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo,
  };
};

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER,
  };
};

export const setMenuList = (list) => {
  return {
    type: types.user_set_menu_list,
    menus: list,
  };
};