import React from "react";
import { NavLink } from "react-router-dom";
import { CalendarIcon, CreditCardIcon, CogIcon, TruckIcon } from "@heroicons/react/outline";

function Bottombar() {
	return (
		<nav className="fixed bottom-0 inset-x-0 bg-white flex justify-between text-sm text-blue-900 font-mono">
			<NavLink
				to="/calendar"
				activeClassName="bg-gray-200"
				className="w-full block py-5 px-3 text-center hover:bg-gray-300 hover:text-blue-800"
			>
				<CalendarIcon className="w-8 h-8 mb-2 mx-auto" />
				Calendário
			</NavLink>
			<NavLink
				to="/stock"
				activeClassName="bg-gray-200"
				className="w-full block py-5 px-3 text-center hover:bg-gray-300 hover:text-blue-800"
			>
				<TruckIcon className="w-8 h-8 mb-2 mx-auto" />
				Estoque
			</NavLink>
			<NavLink
				to="/buydata"
				activeClassName="bg-gray-200"
				className="w-full block py-5 px-3 text-center hover:bg-gray-300 hover:text-blue-800"
			>
				<CreditCardIcon className="w-8 h-8 mb-2 mx-auto" />
				Dados de compra
			</NavLink>
			<NavLink
				to="/settings"
				activeClassName="bg-gray-200"
				className="w-full block py-5 px-3 text-center hover:bg-gray-300 hover:text-blue-800"
			>
				<CogIcon className="w-8 h-8 mb-2 mx-auto" />
				Configurações
			</NavLink>
		</nav>
	);
}

export default Bottombar;
