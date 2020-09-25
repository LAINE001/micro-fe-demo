import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div id="app">
      子应用-react
      <br></br>
      <BrowserRouter basename="/sub-app-three">
        <Link to="/">首页</Link> | <Link to="/about">关于</Link>

        <Route path="/" exact render={() => 
          <div className="App">
            首页
          </div>
        }></Route>
        <Route path="/about" render={() => {
          return <h1>关于</h1>
        }}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App