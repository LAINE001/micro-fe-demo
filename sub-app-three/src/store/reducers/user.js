import * as types from "../action-types";
import { getToken } from "@/utils/auth";

const initUserInfo = {
  username: "",
  role: "",
  avatar: "",
  token: getToken(),
  menus: []
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        ...action,
        role: action.username
      };
    case types.USER_RESET_USER:
      return {};
    case types.user_set_menu_list:
      // console.log(action.menus, 'set-menu-list')
      return {
        ...state,
        ...action,
        menus: action.menus
      }
    default:
      return state;
  }
}
