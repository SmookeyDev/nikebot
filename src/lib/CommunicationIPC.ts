import { ipcRenderer as ipc } from "electron";


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

    addAccount(account: IAccount): boolean {
        return ipc.sendSync("add-account");
    }

    editAccount(accountName: string, account: IAccount): boolean {
        return ipc.sendSync("edit-account");
    }

    removeAccount(accountName: string): boolean {
        return ipc.sendSync("remove-account");
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