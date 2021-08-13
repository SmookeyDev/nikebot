import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

import "primereact/resources/themes/saga-blue/theme.css"
import "primereact/resources/primereact.min.css"

import Bottombar from './components/bottombar';

import Settings from './pages/settings';
import buyData from './pages/buydata';
import Calendar from './pages/calendar';
import Stock from './pages/stock';
import { AnimatePresence } from "framer-motion";
import { UserIcon } from "@heroicons/react/outline";
import "./static/css/floating.css";
import Accounts from './components/accounts';

function App() {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <div className="min-h-screen bg-gray-200">
      <div>
        <button className='accounts fixed z-50 h-16 w-16 transition ease-in rounded-full duration-300 bg-blue-900 hover:bg-blue-800 text-white' onClick={() => setModal(true)}><UserIcon className="w-1/2 inline-block"/></button>
        <Accounts isOpen={modal} closeModal={() => setModal(false)}/>
        <AnimatePresence>
          <Switch>
            <Redirect exact from="/" to="/calendar"/>
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
