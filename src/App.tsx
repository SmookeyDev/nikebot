import React from 'react';
import { Switch, Route } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"

import Bottombar from './components/bottombar';

import Settings from './pages/settings';
import buyData from './pages/buydata';
import Calendar from './pages/calendar';
import Stock from './pages/stock';
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div>
        <AnimatePresence>
          <Switch>
            <Route path="/calendar" component={Calendar}/>
            <Route path="/stock" component={Stock}/>
            <Route path="/buydata" component={buyData}/>
            <Route path="/settings" component={Settings}/>
          </Switch>
        </AnimatePresence>
      </div>
      <Bottombar/>
    </div>
    
  );
}

export default App;
