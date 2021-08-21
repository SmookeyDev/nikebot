import type { IpcRenderer } from "electron";

const ipc = window.require("electron").ipcRenderer as IpcRenderer;

export interface IAccount {
    name: string;
    email?: string;
    password?: string;
    proxys?: string[];
}

export interface IProducts {
    name: string;
    productId: string
    price: number;
    releaseDate: Date;
    url: string;
    img: string;
}

class CommunicationIpc {
    getAccounts(): IAccount[] {
        return ipc.sendSync("get-accounts");
    }

    getAccount(accountName: string): IAccount[] {
        return ipc.sendSync("get-account", accountName);
    }

    addAccount(account: IAccount): boolean {
        return ipc.sendSync("add-account", account);
    }

    editAccount(accountName: string, account: IAccount): boolean {
        return ipc.sendSync("edit-account", accountName, account);
    }

    removeAccount(accountName: string): boolean {
        return ipc.sendSync("remove-account", accountName);
    }
    
    setActiveAccount(accountName: string): boolean {
        return ipc.sendSync("set-active-account", accountName);
    }

    getActiveAccount(accountName: string): boolean {
        return ipc.sendSync("get-active-account", accountName);
    }

    getProductsInCalendar(): IProducts[] {
        return ipc.sendSync("get-products-calendar");
    }

    getProductsInStock(): IProducts[] {
        return ipc.sendSync("get-products-stock");
    }

    scheduleProduct(productId: string): boolean {
        return ipc.sendSync("schedule-product");
    }

    cancelScheduleProduct(productId: string): boolean {
        return ipc.sendSync("cancel-schedule-product", productId);
    }

    getSchedulesProducts(): IProducts[] {
        return ipc.sendSync("get-schedules-products");
    }

    buyProduct(productId: string): boolean {
        return ipc.sendSync("buy-product", productId);
    }

}

export default new CommunicationIpc();