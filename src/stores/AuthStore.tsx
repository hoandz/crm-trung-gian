import { observable, action } from "mobx";
import { Request } from "../common";
import {
    CONFIG_URL,
    LOCAL_STORAGE,
    STATUS_LOGIN,
} from "../helpers/constants";
import { WsCode } from "../helpers/Wscode";
import { } from "../helpers/constants";

export class AuthStore {
    @observable navCollapsed: boolean = false;
    @observable width_screen: number = window.innerWidth;
    @observable token: string = "";
    @observable isLogin: number = 0;
    @observable data_getUserInfo: any = {};

    @action
    async action_openSidebar() {
        this.navCollapsed = !this.navCollapsed;
    }

    @action
    async action_closeSidebar() {
        this.navCollapsed = !this.navCollapsed;
    }
    @action
    async action_getInfo() {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/getInfoAccount`;
        const json = {}
        const result = await Request.post(
            json,
            DOMAIN,
            "getInfoAccount"
        );
        if (result) {
            console.log(result);
            this.data_getUserInfo = result;
            this.isLogin = 1;
        } else {
            this.isLogin = 3;
        }
        return result;
    }
    @action
    async action_loginUser(
        sdt: string,
        matKhau: string
    ) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/loginCms`;

        const json = {
            sdt,
            matKhau,
        };

        const result = await Request.post(
            json,
            DOMAIN,
            "loginCms"
        );

        if (result) {
            const dataAuth = {
                token: result.token,
                session: result.session
            };

            await sessionStorage.setItem(
                LOCAL_STORAGE.DATA_AUTH,
                JSON.stringify(dataAuth)
            );

            this.isLogin = 1;
            this.action_getInfo();
            return true;
        }

        return false;
    }

    @action
    async action_getListKhoanVay(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/getListKhoanVay`;
        const result = await Request.post(
            param,
            DOMAIN,
            "getListKhoanVay"
        );
        return result
    }

    @action
    async action_getListAccount(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/getListAccount`;
        const result = await Request.post(
            param,
            DOMAIN,
            "getListAccount"
        );
        return result
    }

    @action
    async action_updateTaiKhoan(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/updateAccount`;
        const result = await Request.post(
            param,
            DOMAIN,
            "updateAccount"
        );
        return result
    }

    @action
    async action_detailAccount(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/detailAccount`;
        const result = await Request.post(
            param,
            DOMAIN,
            "detailAccount"
        );
        return result
    }

    

    @action
    async action_UpdateKhoanVay(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/updateKhoanVay`;
        const result = await Request.post(
            param,
            DOMAIN,
            "updateKhoanVay"
        );
        return result
    }

    @action
    async action_RegisterUser(param: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/${WsCode.user}`;
        const result = await Request.post(
            param,
            DOMAIN
        );
        if (result) {
            return true
        }
        return false
    }

    @action
    async action_uploadImage(fileName: any, fileData: any) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/${WsCode.uploadImg}`;

        const json = {
            fileName,
            fileData,
        };

        const result = await Request.post(json, DOMAIN);

        if (result) {
            return result.url;
        }

        return false;
    }

    @action
    async action_logout() {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        await sessionStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        this.data_getUserInfo = {};
        this.isLogin = 2;
    }

}
