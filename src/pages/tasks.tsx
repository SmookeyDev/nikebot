import { PlusIcon, PauseIcon, TrashIcon } from "@heroicons/react/solid";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { IProducts } from "../lib/Interfaces"
import { InputTextarea } from "primereact/inputtextarea";


const Modal = ({ isOpen, closeModal }) => {
  return (
    <Dialog className="inline-block w-1/2 bg-blackhowl" visible={isOpen} onHide={closeModal}>

					<h4 className="text-3xl text-gray-100 mb-5">Configurações</h4>
          <div className="mb-6 flex flex-wrap -mx-3w-full">
						<div className="w-full">
							<label className="block mb-3 text-gray-200">Cookies da sessão</label>
							<InputTextarea className="h-64 border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue" rows={5} cols={30} />
						</div>
					</div>
					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Link do produto</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>

					<div className="mb-6">
						<label className="block mb-3 text-gray-200">Tamanhos do produto</label>
						<input
							type="text"
							className="border border-gray-600 rounded-md inline-block py-2 px-3 w-full text-gray-200 tracking-wider bg-rootblue"
						/>
					</div>
          <button></button>
    </Dialog>
  );
};

const Tasks = () => {

  const [modal, setModal] = useState<boolean>(false);

  const productList: IProducts[]= [
    {
      name: "NYC Cool Grey",
      price: "849,99",
      sizes: [38, 39, 40],
      status: "Aguardando"
    },
    {
      name: "NYC Cool Blue",
      price: "949,99",
      sizes: [35, 36, 37],
      status: "Aguardando"
    },
    {
      name: "NYC Cool White",
      price: "1099,99",
      sizes: [32, 33, 34],
      status: "Aguardando"
    }
  ]

  const deleteItem = (index: number) => {
    productList.splice(index, 1)
  }

  return (
    <div className="p-6">
      <div>
        <div className="px-4 mt-6 bg-blackhowl rounded-md">
          <div className="flex flex-col w-full p-2">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-2 rounded-md inline-flex items-center w-1/5" onClick={() => setModal(true)}>
              <PlusIcon className="w-5 h-5" />
              Adicionar
            </button>
            <Modal isOpen={modal} closeModal={() => setModal(false)}/>
            <div className="py-2 mt-2">
              <input
                type="text"
                placeholder="Digite qualquer texto que deseja pesquisar..."
                className="text-sm rounded-md inline-block py-4 px-3 w-1/2 text-gray-200 tracking-wider bg-rootblue"
              />
            </div>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-gray-500">
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Produto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Preço
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Tamanho
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="border-collapse">
            { productList.map(item => {
              return (
                <tr className="bg-blackhowl text-sm font-medium text-gray-200 whitespace-nowrap rounded">
                <td className="px-6 py-4">{ productList.indexOf(item) }</td>
                <td className="px-6 py-4">{ item.name }</td>
                <td className="px-6 py-4">R$ { item.price }</td>
                <td className="px-6 py-4">{ item.sizes }</td>
                <td className="px-6 py-4">{ item.status }</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="px-1 py-1 rounded-full bg-yellow-600 hover:bg-yellow-700">
                    <PauseIcon className="w-5 h-5" />
                  </button>
                  <button className="px-1 py-1 rounded-full bg-gray-500 hover:bg-gray-600" onClick={() => deleteItem(productList.indexOf(item))}>
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              </tr>
              )

            })}


          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;
