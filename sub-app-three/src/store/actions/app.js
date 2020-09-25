import * as types from "../action-types"

export const toggleSiderBar = (bool) => {
  return {
    type: types.APP_TOGGLE_SIDEBAR,
    reload: { bool }
  }
}

export const toggleSettingPanel = () => {
  return {
    type: types.APP_TOGGLE_SETTINGPANEL
  }
}

export const openPageLoading = () => {
  return {
    type: types.OPEN_PAGE_LOADING
  }
}

export const closePageLoading = () => {
  return {
    type: types.CLOSE_PAGE_LOADING
  }
}
