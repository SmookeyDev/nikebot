import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, CogIcon } from "@heroicons/react/outline";

function Bottombar() {
	return (
		<nav className="fixed bottom-0 inset-x-0 bg-blackhowl flex justify-between text-sm font-mono">
			<NavLink
				to="/tasks"
				activeClassName="text-blue-600"
				className="w-full block py-5 px-3 text-center text-gray-200 hover:text-blue-800"
			>
				<CalendarIcon className="w-8 h-8 mb-2 mx-auto" />
				Tarefas
			</NavLink>
			<NavLink
				to="/settings"
				activeClassName="text-blue-600"
				className="w-full block py-5 px-3 text-center text-gray-200 hover:text-blue-800"
			>
				<CogIcon className="w-8 h-8 mb-2 mx-auto" />
				Configurações
			</NavLink>
		</nav>
	);
}

export default Bottombar;
