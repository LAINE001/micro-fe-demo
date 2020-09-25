import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo, getAsideMenuList } from "@/store/actions";
import MyLayout from "@/views/layout";
import Login from "@/views/login"
import { setToken } from '@/utils/auth'
import { logout_node_env } from '@/globalConfig'

/**
 * 一级路由
 * layout路由及登录页
 */
class Router extends React.Component {
  componentWillMount() {
    const url = window.location.href 
    const origin = window.location.origin 
    const token = url.split('?accessToken=')[1]
    if (token) {
      setToken(token)
      window.location.href = origin
    }
  }

  // 跳转路径
  logOut = () => {
    window.location.href = `${logout_node_env}/actlogout?accessToken=${localStorage.getItem('ssoToken')}`
    // if (process.env.REACT_APP_ENV === 'test') {
    //   window.location.href = `http://192.168.206.184:8090/actlogout?accessToken=${localStorage.getItem('ssoToken')}`
    // } else {
    //   window.location.href = `http://192.168.206.182:8090/actlogout?accessToken=${localStorage.getItem('ssoToken')}`
    // }
  }
  render() {
    const { token, role, getUserInfo } = this.props
    // if (token && !role) {
    //   getUserInfo(token)
    //   // getAsideMenuList()
    // }
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              //  this.logOut()
                
              } else {
                // return <MyLayout />
                if (role) {
                  return <MyLayout />;
                } else {
                  getUserInfo(token).then(() => <MyLayout />).catch((err) => {
                    console.log(err)
                    return <MyLayout />
                  });
                }
              }
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default connect((state) => state.user, { getUserInfo, getAsideMenuList })(Router);
