import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/transition";

function buyData() {
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
					<h4 className="text-3xl text-gray-700 mb-5">Informação de Pagamentos</h4>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="mb-6 w-2/4 px-3">
							<label className="block mb-3 text-gray-600">Nome no cartão</label>
							<input
								type="text"
								value=""
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
								disabled
							/>
						</div>
						<div className="mb-6 w-2/4">
							<label className="block mb-3 text-gray-600">Número do cartão</label>
							<input
								type="text"
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
								disabled
							/>
						</div>
					</div>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="w-full px-3">
							<label className="block mb-3 text-gray-600">Data de expiração</label>
							<div className="flex">
								<select
									className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6"
									disabled
								>
									<option>Mês</option>
								</select>
								<select
									className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
									disabled
								>
									<option>Ano</option>
								</select>
							</div>
						</div>
					</div>
					<h4 className="text-3xl text-gray-700 mb-5">Dados de Endereço</h4>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="mb-6 w-2/4 px-3">
							<label className="block mb-3 text-gray-600">Endereço</label>
							<input
								type="text"
								value=""
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
								disabled
							/>
						</div>
						<div className="mb-6 w-2/4">
							<label className="block mb-3 text-gray-600">Número</label>
							<input
								type="text"
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
								disabled
							/>
						</div>
					</div>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="mb-6 w-2/4 px-3">
							<label className="block mb-3 text-gray-600">Complemento</label>
							<input
								type="text"
								value=""
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
								disabled
							/>
						</div>
						<div className="mb-6 w-2/4">
							<label className="block mb-3 text-gray-600">Bairro</label>
							<input
								type="text"
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
								disabled
							/>
						</div>
					</div>
					<div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="mb-6 w-2/4 px-3">
							<label className="block mb-3 text-gray-600">Estado</label>
							<input
								type="text"
								value=""
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
								disabled
							/>
						</div>
						<div className="mb-6 w-2/4">
							<label className="block mb-3 text-gray-600">Cidade</label>
							<input
								type="text"
								className="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
								disabled
							/>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default buyData;
