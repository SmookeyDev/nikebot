import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/transition";
import "../static/css/fonts.css";
import ItemCard from "../components/ItemCard";
import { IProduct } from "../lib/CommunicationIPC";
import { ItemsCardContainer } from "../components/ItemsCardContainer";

const products: IProduct[] = [
	{
		productId: "195244308736",
		name: "Air Max 90",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg",
		url: "https://www.nike.com.br/air-max-90-153-169-211-350397",
		store: "nike",
		release_date: "2021-08-01T13:00:00.000Z",
	},
	{
		productId: "195238094263",
		name: "Women's Lahar Low",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-nike-lahar-low-feminino-DB9953-201-1-11626788929.jpg",
		url: "https://www.nike.com.br/womens-lahar-low-1-16-210-339726",
		store: "nike",
		release_date: "2021-08-01T13:00:00.000Z",
	},
	{
		productId: "195238867737",
		name: "Air Jordan 1 Retro High OG Infantil (34-38)",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-retro-high-og-infantil-575441-701-1-11627399126.jpg",
		url: "https://www.nike.com.br/air-jordan-1-retro-high-og-infantil-34-38-67-80-445-332190",
		store: "nike",
		release_date: "2021-08-07T13:00:00.000Z",
	},
	{
		productId: "195240906271",
		name: "Air Force 1 '07 x Space Jam: A New Legacy",
		image:
			"https://images.lojanike.com.br/500x500/produto/tenis-air-force-1-07-DJ7998-100-1-11625230621.jpg",
		url: "https://www.nike.com.br/air-force-1-07-x-space-jam-a-new-legacy-153-169-211-347694",
		store: "nike",
		release_date: "2021-08-20T13:00:00.000Z",
	},
];

function Calendar() {
	return (
		<motion.div
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
			transition={pageTransition}
		>
			<ItemsCardContainer>
				{products.map((product) => (
					<ItemCard
						productId={product.productId}
						name={product.name}
						image={product.image}
						release_date={product.release_date}
						scheduled={product.scheduled}
					/>
				))}
			</ItemsCardContainer>
		</motion.div>
	);
}

export default Calendar;
