import db from "./db";

interface IAccount {
    name: string;
    email?: string;
    password?: string;
    proxys?: string[];
}

export class Accounts {

    getAccounts(): IAccount[] {
        return db.get("accounts") as IAccount[] || [];
    }

    getAccount(name: string) {
        let accounts = this.getAccounts();
        return accounts.filter(account => account.name === name);
    }

    addAccount(account: IAccount) {
        let accounts = this.getAccounts();
        accounts.push(account);
        db.set("accounts", accounts);
    }

    editAccount(name: string, account: IAccount) {
        let accounts = this.getAccounts();
        if (!accounts.some(a => a.name === name)) return false;
        accounts = accounts.map(a => a.name === name ? account : a);
        db.set("accounts", accounts);
        return true;
    }

    removeAccount(name: string) {
        let accounts = this.getAccounts();
        if (!accounts.some(a => a.name === name)) return false;
        accounts = accounts.filter(a => a.name !== name);
        db.set("accounts", accounts);
        return true;
    }
}

export default new Accounts;