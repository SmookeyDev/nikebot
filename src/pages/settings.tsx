import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Password } from "primereact/password";
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

      <div className="p-6 w-full md:w-2/5">
        <div className="p-10 rounded-md shadow-md bg-white">
          <h4 className="text-3xl text-gray-700 mb-5">Configurações</h4>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600">Email</label>
            <InputText type="text" className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider" />
          </div>
          <div className="mb-6">
            <label className="block mb-3 text-gray-600">Senha</label>
            <InputText
              type="tel" className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider" />
          </div>
          <div className="mb-6 flex flex-wrap -mx-3w-full">
            <div className="w-2/3 px-3">
              <label className="block mb-3 text-gray-900">Lista de proxys</label>
              <InputTextarea className="mt-2 py-2 px-4" rows={5} cols={30} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;
