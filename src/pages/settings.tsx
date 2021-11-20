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
				<div className="p-10 rounded-md shadow-md bg-blackhowl">
					<h4 className="text-3xl text-gray-100 mb-5">Configurações</h4>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Webhook do Discord</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Chave da API de SMS</label>
						<input
							type="password"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Número de tentativas ao servidor da Nike cair</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Intervalo entre tentativas (valor em milisegundos)</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Tentativas de SMS ao codigo retornar invalido</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="w-full">
							<label className="block mb-3 text-gray-200">Lista de proxys</label>
							<InputTextarea className="h-64 border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue" rows={5} cols={30} />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Settings;
