import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import * as routes from "./lib/constants";
import RootContainer from "./container/RootContainer";


const App = () =>{
    return (
          <Switch>
            <Route path={routes.ROOT_ROUTE} component={RootContainer}/>
          </Switch>
    );
}

export default App;
