import { Dialog } from "primereact/dialog";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Profiles, { IProfile } from "../lib/Profiles";
import useForceUpdate from "../lib/useForceUpdate";
import { TrashIcon } from "@heroicons/react/outline";

import { ListBox } from "primereact/listbox";

const Accounts = ({ isOpen, closeModal }) => {
	const [currentProfileName, setCurrentProfileName] = useState("");
	const [selectedAccount, setSelectedAccount] = useState(null);
	const forceUpdate = useForceUpdate();

	const profiles = Profiles.getAll();

	const AddProfile = () => {
		if (!currentProfileName.length) return alert("Digite o nome do perfil");
		if (!Profiles.add({ name: currentProfileName })) alert("Erro ao adicionar o perfil");
		forceUpdate();
	};

	const EditProfile = (profileName: string, profile: IProfile) => {
		Profiles.edit(profileName, profile);
		forceUpdate();
	};

	const RemoveProfile = (profileName: string) => {
		Profiles.remove(profileName);
		forceUpdate();
	};

	const actionBodyTemplate: React.FC<{ name: string }> = (rowData) => {
		return (
			<React.Fragment>
				<TrashIcon className="w-5 cursor-not-allowed" onClick={() => RemoveProfile(rowData.name)} />
			</React.Fragment>
		);
	};

	return (
		<Dialog
			header="Conta"
			visible={isOpen}
			onHide={closeModal}
			closeOnEscape={true}
			closable={true}
		>
			<div>
				<h3>Perfil Atual: jãozin</h3>
				<h3>Nome: jão da silva</h3>
				<h3>Email: jão da silva</h3>
				<h3>Data do login: 05/08/2006 00:00:00</h3>
			</div>
			<div className="mt-4">
				<hr className="h-1 bg-blue-800 my-4" />
				<h1 className="text-lg">Utilizar outro perfil?</h1>

				<div className="flex flex-col">
					<h3>Selecione outro perfil:</h3>
					<div className="w-80">
						<DataTable
							value={profiles}
							dataKey="name"
							paginator
							rows={10}
							selection={selectedAccount}
							onSelectionChange={(e) => setSelectedAccount(e.value)}
						>
							<Column selectionMode="single" headerStyle={{ width: "3rem" }} />
							<Column field="name" header="Nome" sortable />

							<Column body={actionBodyTemplate} />
						</DataTable>
					</div>
				</div>
				<hr className="h-1 bg-blue-800 my-4" />

				<h3>Criar um perfil:</h3>

				<div className="flex flex-row w-full justify-center py-3 align-middle">
					<button
						className="transition ease-in duration-300 text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 w-1/3 hover:shadow-lg tracking-wider text-white rounded-lg hover:border-blue-800 my-auto"
						onClick={AddProfile}
					>
						Criar Perfil
					</button>
					<InputText
						type="text"
						className="border border-gray-900 py-2 rounded-md inline-block px-3 text-gray-900 tracking-wider"
						placeholder="Nome do perfil"
						value={currentProfileName}
						onChange={(e) => setCurrentProfileName(e.target.value)}
					/>
				</div>
			</div>
		</Dialog>
	);
};

export default Accounts;
