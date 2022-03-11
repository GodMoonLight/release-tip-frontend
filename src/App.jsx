import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './reducers/store'
import 'antd/dist/antd.css'
import { Routes, Route } from 'react-router'
import Home from './Home'
import { BrowserRouter } from "react-router-dom";
import Error from "./Error";
import EnvList from "./Home/Env/containers/EnvList";
import Env from "./Home/Env/containers/Env";
import Login from "./Login";
import Service from "./Service";

const store = configureStore(/* provide initial state if any */)

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/>}>
          <Route path="/env" element={<EnvList/>}>
          </Route>
          <Route path="/service" element={<Service/>}>
          </Route>
          <Route path="/release" element={<Service/>}>
          </Route>
          <Route path="/env/:name" element={Env}>
          </Route>
        </Route>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  </Provider>
)

export default App

