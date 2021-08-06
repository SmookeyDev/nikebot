import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../components/transition";
import moment from "moment";
import "../static/css/fonts.css";

const Card = ({ productId, name, image, release_date }) => {
    return (
        <div className="p-6 w-full md:w-4/5">
            <div className="bg-gray-800 rounded-lg shadow-lg">
                <div className="relative h-62 w-full mb-3">
                    <div className="absolute flex flex-col left-0 right-0 p-6 snkr-release__date text-black uppercase text-3xl">
                        <div>{moment(release_date).format('MMM')}</div>
                        <div>{moment(release_date).format('DD')}</div>
                    </div>
                    <img src={image} className="w-full object-fill" />
                </div>
                <div className="p-6 block">
                    <h2 className="font-bold mb-2 text-2xl sm:text-base text-gray-200 min-w-full">{name}</h2>
                    <div className="flex space-x-2 text-sm font-medium justify-start">
                        <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800">
                            <span>Agendar</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

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
                <div className="min-w-screen animated fadeIn faster left-0 top-0 grid grid-cols-3 place-items-center items-center inset-0">
                    <Card
                        productId="195244308736"
                        name="Air Max 90"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238094263"
                        name="Women's Lahar Low"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-nike-lahar-low-feminino-DB9953-201-1-11626788929.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238867737"
                        name="Air Jordan 1 Retro High OG Infantil (34-38)"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-retro-high-og-infantil-575441-701-1-11627399126.jpg"
                        release_date="2021-08-07T13:00:00.000Z"
                    />
                    <Card
                        productId="195244308736"
                        name="Air Max 90"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238094263"
                        name="Women's Lahar Low"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-nike-lahar-low-feminino-DB9953-201-1-11626788929.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238867737"
                        name="Air Jordan 1 Retro High OG Infantil (34-38)"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-retro-high-og-infantil-575441-701-1-11627399126.jpg"
                        release_date="2021-08-07T13:00:00.000Z"
                    />
                    <Card
                        productId="195244308736"
                        name="Air Max 90"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-max-90-qs-laser-DH4689-200-1-11627399960.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238094263"
                        name="Women's Lahar Low"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-nike-lahar-low-feminino-DB9953-201-1-11626788929.jpg"
                        release_date="2021-08-01T13:00:00.000Z"
                    />
                    <Card
                        productId="195238867737"
                        name="Air Jordan 1 Retro High OG Infantil (34-38)"
                        image="https://images.lojanike.com.br/500x500/produto/tenis-air-jordan-1-retro-high-og-infantil-575441-701-1-11627399126.jpg"
                        release_date="2021-08-07T13:00:00.000Z"
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Stock;
