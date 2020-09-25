import 'core-js/es'  
import 'react-app-polyfill/ie9'  
import 'react-app-polyfill/stable'
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.less";

let root = document.getElementById('root')

//通过render方法 把原来 dom.render方法包裹起来
function render(props){
  ReactDOM.render(
    <App />,
    root
  )
}

if (!window.__POWERED_BY_QIANKUN__) { //默认独立运行
  render();
}

//暴露的三个方法
export async function bootstrap(props){}

export async function mount(props){
  const { container } = props
  root = container ? container.querySelector('#root') : root
  render(props)
}
//这里卸载方法 ，可以直接通过dom的卸载方法卸载，dom元素
export async function unmount(props){
  ReactDOM.unmountComponentAtNode(root)
  root = null
}
