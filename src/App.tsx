import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

import "primereact/resources/primereact.min.css";

import Bottombar from "./components/bottombar";

import Settings from "./pages/settings";
import Calendar from "./pages/calendar";
import Tasks from "./pages/tasks";

import { AnimatePresence } from "framer-motion";

function App() {
	return (
		<div className="min-h-screen bg-rootblue">
			<div>
				<AnimatePresence>
					<Switch>
						<Redirect exact from="/" to="/calendar" />
						<Redirect exact from="/index.html" to="/calendar" />
						<Route path="/tasks" component={Tasks} />
						<Route path="/settings" component={Settings} />
					</Switch>
				</AnimatePresence>
			</div>
			<Bottombar />
		</div>
	);
}

export default App;
