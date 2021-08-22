import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { motion } from "framer-motion";
import moment from "moment";
import { pageVariants, pageTransition } from "../components/transition";
import "../static/css/fonts.css";

const Modal = ({ isOpen, closeModal, productName }) => {
	return (
		<Dialog
			className="inline-block w-full max-w-md"
			header="Agendamento de Item"
			visible={isOpen}
			onHide={closeModal}
		>
			<h2 className="font-bold mb-2 text-2xl sm:text-base min-w-full text-gray-600">
				Você está prestes a agendar a compra de um <span className="text-black">{productName}</span>
				, escolha o tamanho disponível.
			</h2>
			<div className="grid grid-cols-4 gap-4 py-5">
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					1
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					2
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					3
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					4
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					5
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					6
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					7
				</button>
				<button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">
					8
				</button>
			</div>
			<button
				type="button"
				className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800"
			>
				Finalizar
			</button>
		</Dialog>
	);
};

const ItemCard: React.FC<{
	productId: string;
	name: string;
	image: string;
	release_date?: string | Date;
	scheduled?: boolean;
}> = ({ productId, name, image, release_date, scheduled }) => {
	const [modal, setModal] = useState<boolean>(false);

	const CancelSchedule = () => {
		alert("todo");
	};

	const BuyItem = () => {
		alert("todo");
	};

	const ScheduleItem = () => {
		alert("todo");
	};

	const Button = () => {
		if (scheduled)
			return (
				<button
					className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800"
					onClick={CancelSchedule}
				>
					Cancelar agendamento
				</button>
			);

		if (release_date)
			return (
				<button
					className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800"
					onClick={ScheduleItem}
				>
					<span>Agendar</span>
				</button>
			);

		return (
			<button
				className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800"
				onClick={BuyItem}
			>
				<span>Comprar</span>
			</button>
		);
	};

	return (
		<div className="bg-gray-800 rounded-lg shadow-lg w-full h-full">
			<div className="relative h-62 w-full mb-3">
				<div className="absolute flex flex-col left-0 right-0 p-6 snkr-release__date text-black uppercase text-3xl">
					<div>{moment(release_date).format("MMM")}</div>
					<div>{moment(release_date).format("DD")}</div>
				</div>
				<img src={image} className="w-full object-fill" />
			</div>
			<div className="p-6 block">
				<h2 className="font-bold mb-2 text-2xl sm:text-base text-gray-200 min-w-full">{name}</h2>
				<div className="flex space-x-2 text-sm font-medium justify-start">
					<Button />
					<Modal isOpen={modal} closeModal={() => setModal(false)} productName={name} />
				</div>
			</div>
		</div>
	);
};

export default ItemCard;
