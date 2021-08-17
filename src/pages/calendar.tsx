import { useState } from "react";
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
      onHide={closeModal}>
      <h2 className="font-bold mb-2 text-2xl sm:text-base min-w-full text-gray-600">Você está prestes a agendar a compra de um <span className="text-black">{productName}</span>, escolha o tamanho disponível.</h2>
      <div className="grid grid-cols-4 gap-4 py-5">
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">1</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">2</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">3</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">4</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">5</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">6</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">7</button>
        <button className="rounded-lg px-4 py-2 border-2 border-gray-400 text-gray-700  duration-300">8</button>
      </div>
      <button type="button" className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800">Finalizar</button>
    </Dialog>
  );
};

const Card = ({ productId, name, image, release_date }) => {
  const [modal, setModal] = useState<boolean>(false);
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
            <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800" onClick={() => setModal(true)}>
              <span>Agendar</span>
            </button>
            <Modal isOpen={modal} closeModal={() => setModal(false)} productName={name} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Calendar() {
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

export default Calendar;