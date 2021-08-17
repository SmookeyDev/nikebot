import { ipcMain as ipc } from "electron";

export default function () {
    ipc.on("get-accounts", (event) => {
        event.returnValue = [];
    });
    ipc.on("get-products-calendar", (event) => {
        event.returnValue = [];
    });
    ipc.on("get-products-stock", (event) => {
        event.returnValue = [];
    });

    ipc.on("add-account", (event) => {
        event.returnValue = false;
    });

    ipc.on("edit-account", (event) => {
        event.returnValue = false;
    });

    ipc.on("remove-account", (event) => {
        event.returnValue = false;
    });

    ipc.on("schedule-product", (event) => {
        event.returnValue = false;
    });

    ipc.on("cancel-schedule-product", (event) => {
        event.returnValue = false;
    });

    ipc.on("schedules-products", (event) => {
        event.returnValue = false;
    });

    ipc.on("buy-product", (event) => {
        event.returnValue = false;
    });
}
