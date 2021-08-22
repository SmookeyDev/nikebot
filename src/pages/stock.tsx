import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { motion } from "framer-motion";
import moment from "moment";
import { pageVariants, pageTransition } from "../components/transition";
import "../static/css/fonts.css";
import ItemCard from "../components/ItemCard";

const products = [
	{
		productId: "195244308736",
		name: "Air Max 90",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg",
		url: "https://www.nike.com.br/air-max-90-153-169-211-350397",
		store: "nike",
	},
	{
		productId: "195238094263",
		name: "Women's Lahar Low",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-nike-lahar-low-feminino-DB9953-201-1-11626788929.jpg",
		url: "https://www.nike.com.br/womens-lahar-low-1-16-210-339726",
		store: "nike",
	},
	{
		productId: "195238867737",
		name: "Air Jordan 1 Retro High OG Infantil (34-38)",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-retro-high-og-infantil-575441-701-1-11627399126.jpg",
		url: "https://www.nike.com.br/air-jordan-1-retro-high-og-infantil-34-38-67-80-445-332190",
		store: "nike",
	},
	{
		productId: "195240906271",
		name: "Air Force 1 '07 x Space Jam: A New Legacy",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-force-1-07-DJ7998-100-1-11625230621.jpg",
		url: "https://www.nike.com.br/air-force-1-07-x-space-jam-a-new-legacy-153-169-211-347694",
		store: "nike",
	},
];

function Stock() {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<div className="pb-28 min-h-screen relative">
				<div className="min-w-screen animated fadeIn faster left-0 top-0 grid grid-cols-2 place-items-center items-center inset-0">
					{products.map((product) => (
						<ItemCard productId={product.productId} name={product.name} image={product.image} />
					))}
				</div>
			</div>
		</motion.div>
	);
}

export default Stock;
