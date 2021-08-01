import React from 'react';
import { Switch, Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"

import Bottombar from './components/bottombar';

import Settings from './pages/settings';
import buyData from './pages/buydata';
import Calendar from './pages/calendar';

function App() {
  return (
    <div>
      <div className="min-h-screen bg-gray-200">
        <Switch>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/buydata" component={buyData}/>
          <Route path="/settings" component={Settings}/>
        </Switch>
      </div>
      <Bottombar/>
    </div>
    
  );
}

export default App;
