import { ipcMain as ipc } from "electron";
import Accounts from "./Accounts";


export default function () {
    ipc.on("get-accounts", (event) => {
        event.returnValue = Accounts.getAccounts();
    });

    ipc.on("get-account", (event, name) => {
        event.returnValue = Accounts.getAccount(name);
    });

    ipc.on("add-account", (event, account) => {
        Accounts.addAccount(account);
        event.returnValue = true;
    });

    ipc.on("edit-account", (event, name, account) => {
        event.returnValue = Accounts.editAccount(name, account);
    });

    ipc.on("remove-account", (event, name) => {
        event.returnValue = Accounts.removeAccount(name);
    });


    

    ipc.on("get-products-calendar", (event) => {
        event.returnValue = [];
    });
    ipc.on("get-products-stock", (event) => {
        event.returnValue = [];
    });

    ipc.on("schedule-product", (event) => {
        event.returnValue = false;
    });

    ipc.on("cancel-schedule-product", (event) => {
        event.returnValue = false;
    });

    ipc.on("get-schedules-products", (event) => {
        event.returnValue = false;
    });

    ipc.on("buy-product", (event) => {
        event.returnValue = false;
    });
}
