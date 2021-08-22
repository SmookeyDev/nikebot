const ipc = window.require("electron").ipcRenderer;

export interface IProfile {
    name: string;
    email?: string;
    password?: string;
    proxys?: string[];
}

export interface IProduct {
    productId: string;
    name: string;
    image: string;
    url: string;
    store: string;
    release_date?: Date | string;
    scheduled?: boolean;
}

class CommunicationIpc {
    getprofiles(): IProfile[] {
        throw new Error("Obsolete")
    }

    getprofile(profileName: string): IProfile[] {
        throw new Error("Obsolete")
    }

    addprofile(profile: IProfile): boolean {
        throw new Error("Obsolete")
    }

    editprofile(profileName: string, profile: IProfile): boolean {
        throw new Error("Obsolete")
    }

    removeprofile(profileName: string): boolean {
        throw new Error("Obsolete")
    }

    setActiveprofile(profileName: string): boolean {
        throw new Error("Obsolete")
    }

    getActiveprofile(profileName: string): boolean {
        throw new Error("Obsolete")
    }

    getProductsInCalendar(): IProduct[] {
        throw new Error("Obsolete")
    }

    getProductsInStock(): IProduct[] {
        throw new Error("Obsolete")
    }

    scheduleProduct(productId: string): boolean {
        throw new Error("Obsolete")
    }

    cancelScheduleProduct(productId: string): boolean {
        throw new Error("Obsolete")
    }

    getSchedulesProducts(): IProduct[] {
        throw new Error("Obsolete")
    }

    buyProduct(productId: string): boolean {
        throw new Error("Obsolete")
    }

}

export default new CommunicationIpc();