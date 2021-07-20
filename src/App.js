import React from 'react';
import {Switch, Route,BrowserRouter} from "react-router-dom";
import './App.css';
import * as routes from "./lib/constants";
import RootContainer from "./container/RootContainer";


const App = () =>{
    return (
      <div className="App"> 
        <BrowserRouter>
          <Switch>
            <Route path={routes.ROOT_ROUTE} component={RootContainer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
