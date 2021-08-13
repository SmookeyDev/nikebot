import { Dialog } from "primereact/dialog";
import { newAccount, getAccounts } from "../helpers/storage";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { RadioButton } from 'primereact/radiobutton';

const accounts = getAccounts()
console.log(accounts)

const Accounts = ({ isOpen, closeModal }) => {
    const [account, createAccount] = useState<boolean>(false);

    return (
        <Dialog
            className="inline-block w-full max-w-md"
            header="Contas de usuários"
            visible={isOpen}
            onHide={closeModal}>
                
                <div className="flex flex-col items-center">

                        {accounts.length != 0 && 
                            accounts.map((account) => 
                            <span>{account.accountName}</span>)
                        }

                    {account && ( <InputText type="text" className="border border-gray-900 rounded-md inline-block py-2 px-3 w-full text-gray-900 tracking-wider" placeholder="Nome da conta" onChange = {(e) => localStorage.setItem("newAccount", e.target.value)}/> )}
                    <div className="flex flex-row w-full justify-center py-3">
                    
                        <button className="transition ease-in duration-300  items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-3 w-1/3 hover:shadow-lg tracking-wider text-white rounded-full hover:border-blue-800" onClick={() => account == false ? createAccount(true) : createAccount(false)}>Nova conta</button>
                        {account && ( <button className="transition ease-in duration-300  items-center text-sm font-medium mb-2 md:mb-0 bg-blue-900 px-5 py-3 w-1/3 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-blue-800" onClick={() => newAccount(localStorage.getItem("newAccount"))}>Criar conta</button> )}
                    </div>
                    
                </div>

        </Dialog>
    )
}

export default Accounts;