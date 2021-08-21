import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import CommunicationIPC, { IAccount } from "../lib/CommunicationIPC";
import { useEffect } from "react";

const Accounts = ({ isOpen, closeModal }) => {
	const ipc = CommunicationIPC
	const [accounts, setAccounts] = useState<IAccount[]>([]);
	const [useButton, createButton] = useState(false);
	const [getAccountName, setAccountName] = useState('')
	const TAccount: IAccount = {
		name: getAccountName,
		email: '',
		password: '',
		proxys: []
	}


	useEffect(() => {
		setAccounts(CommunicationIPC.getAccounts());
	}, []);



	return (
		<Dialog
			className="inline-block w-full max-w-md"
			header="Contas de usuários"
			visible={isOpen}
			onHide={closeModal}
		>
			<div className="flex flex-col items-center">
				<div>
				{accounts.length != 0 && accounts.map((account) => 
				<div className="">
					<RadioButton inputId={account.name} name="accounts" value={account.name} onChange={(e) => selectAccount(e.value)} checked={selectedAccount === account.name}/>
					<label htmlFor={account.name}>{account.name}</label>
				</div>
				)}
				</div>

				{useButton && (
					<InputText type="text" className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider" placeholder="Nome da conta" onChange={(e) => setAccountName(e.target.value)}/>
				)}
				<div className="flex flex-row w-full justify-center py-3">
					<button className="transition ease-in duration-300  items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-3 w-1/3 hover:shadow-lg tracking-wider text-white rounded-full hover:border-blue-800" onClick={() => (useButton == false ? createButton(true) : createButton(false))}>Nova conta</button>
					{useButton && (
						<button className="transition ease-in duration-300  items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-3 w-1/3 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800" onClick={() => ipc.addAccount(TAccount)}>Criar Conta</button>
					)}
				</div>
			</div>
		</Dialog>
	);
};

export default Accounts;
