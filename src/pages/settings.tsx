import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/transition";

function Settings() {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
			className="flex justify-center pb-28"
		>
			<div className="p-6 w-full">
				<div className="p-10 rounded-md shadow-md bg-white">
					<h4 className="text-3xl text-gray-700 mb-5">Configurações</h4>
					<div className="mb-6">
						<label className="block mb-3 text-gray-600">Email</label>
						<input
							type="text"
							className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-600">Senha</label>
						<input
							type="password"
							className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-600">Número de celular</label>
						<input
							type="text"
							className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider"
						/>
					</div>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="w-full">
							<label className="block mb-3 text-gray-600">Lista de proxys</label>
							<InputTextarea className="w-full h-64" rows={5} cols={30} />
						</div>
					</div>
					<div>
						<button className="bg-blue-800 p-4 text-white rounded-lg">Salvar</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Settings;
