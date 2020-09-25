import * as types from "../action-types"
const initState = {
  sidebarCollapsed: false,
  settingPanelVisible: false,
  showFullPageLoading: false
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      }
    case types.APP_TOGGLE_SETTINGPANEL:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible
      }

    case types.OPEN_PAGE_LOADING:
      return {
        ...state,
        showFullPageLoading: true
      }
    case types.CLOSE_PAGE_LOADING:
      return {
        ...state,
        showFullPageLoading: false
      }
    default:
      return state
  }
}
