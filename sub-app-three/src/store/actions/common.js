import { getDictListByType, getMenuList } from "@/api/common"

export const getTaskTypeList = (params) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const result = await getDictListByType('taskType')
    if (result) {
      const list = result
      dispatch(setTaskTypeList(list))
      resolve(list)
    }
  })
}

export const setTaskTypeList = (list) => {
  return {
    type: 'set_task_type_list',
    payload: {
      list
    }
  }
}

// 获取菜单
export const getAsideMenuList = () => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    const result = await getMenuList({ appCode: 'DVw0hbMf' })
    if (result) {
      const list = result.data
      console.log(list)
      dispatch(setAsideMenuList(list))
      resolve(list)
    }
  })
}

export const setAsideMenuList = (list) => {
  return {
    type: 'set_aside_menu_list',
    payload: {
      list
    }
  }
}