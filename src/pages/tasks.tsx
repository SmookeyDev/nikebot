import { PauseIcon, TrashIcon } from "@heroicons/react/solid"

function Tasks() {
  return (
    <div className="p-6">  
      <div className="mt-6">
        <div className="bg-blackhowl"></div>
        <table className="w-full">
          <thead>
            <tr className="text-gray-500 text-left text-xs font-medium uppercase tracking-wider">
              <th className="px-6 py-3">#</th>
              <th className="px-6 py-3">Produto</th>
              <th className="px-6 py-3">Preço</th>
              <th className="px-6 py-3">Tamanho</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blackhowl text-sm font-medium text-gray-200 whitespace-nowrap rounded">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">NYC Cool Grey</td>
              <td className="px-6 py-4">R$ 849,99</td>
              <td className="px-6 py-4">38, 39, 40</td>
              <td className="px-6 py-4">Aguardando</td>
              <td className="px-6 py-4 space-x-2">
                <button className="px-1 py-1 rounded-full bg-yellow-600 hover:bg-yellow-700">
                  <PauseIcon className="w-5 h-5"/>
                </button>
                <button className="px-1 py-1 rounded-full bg-gray-500 hover:bg-gray-600">
                  <TrashIcon className="w-5 h-5"/>
                </button>
              </td>
            </tr>
            <tr className="bg-blackhowl text-sm font-medium text-gray-200 whitespace-nowrap rounded">
              <td className="px-6 py-4">1</td>
              <td className="px-6 py-4">NYC Cool Grey</td>
              <td className="px-6 py-4">R$ 849,99</td>
              <td className="px-6 py-4">38, 39, 40</td>
              <td className="px-6 py-4">Aguardando</td>
              <td className="px-6 py-4 space-x-2">
                <button className="px-1 py-1 rounded-full bg-yellow-600 hover:bg-yellow-700">
                  <PauseIcon className="w-5 h-5"/>
                </button>
                <button className="px-1 py-1 rounded-full bg-gray-500 hover:bg-gray-600">
                  <TrashIcon className="w-5 h-5"/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tasks;