const initState = {
  taskTypeList: [],
  asideMenuList: []
};
export default function common(state = initState, action) {
  switch (action.type) {
    case 'set_task_type_list':
      return {
        taskTypeList: action.payload.list
      }
    case 'set_aside_menu_list':
      return {
        ...state,
        asideMenuList: action.payload.list
      }
    default:
      return state
  }
}
