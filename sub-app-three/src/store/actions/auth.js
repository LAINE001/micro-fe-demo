import { setUserToken, resetUser } from "./user"
import { signIn } from "@/api/user"
// import { reqLogout } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";
export const login = (loginParams) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await signIn(loginParams)
      if (res && res.access_token) {
        dispatch(setUserToken(res))
        // 设置token到cookie中
        setToken(res.access_token)
        // 返回结果到login页
        resolve(res)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export const logout = (token) => (dispatch) => {
  return new Promise((resolve, reject) => {
    // reqLogout(token)
      // .then((response) => {
        // const { data } = response;
  //       if (data.status === 0) {
          dispatch(resetUser())
          removeToken()
          resolve('logout success')
  //       } else {
  //         const msg = data.message;
  //         reject(msg);
  //       }
  //     })
  //     .catch((error) => {
  //       reject(error);
  //     });
  });
};
