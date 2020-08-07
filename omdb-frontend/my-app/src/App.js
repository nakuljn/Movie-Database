import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'

import SearchPage from './Pages/SearchPage/SearchPage';
import DetailsPage from './Pages/DetailsPage/DetailsPage';


function App(){
  return(
    <div>
       <Router>
        <Switch>
          <Route path="/" component={SearchPage} />
          <Route path="/details/tt2338096" component={DetailsPage} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;