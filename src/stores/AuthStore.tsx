import { observable, action } from "mobx";
import { Request } from "../common";
import {
    CONFIG_URL,
    LOCAL_STORAGE,
    STATUS_LOGIN,
} from "../helpers/constants";
import { WsCode } from "../helpers/Wscode";

export class AuthStore {
    @observable navCollapsed: boolean = false;
    @observable width_screen: number = window.innerWidth;
    @observable token: string = "";
    @observable isLogin: number = STATUS_LOGIN.WAIT_LOGIN;
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
    async action_loginUser(
        username: string,
        password: string,
        rememberMe: any
    ) {
        const DOMAIN = `${CONFIG_URL.SERVICE_URL}/${WsCode.login}`;

        const json = {
            username,
            password,
        };

        const result = await Request.post(
            json,
            DOMAIN
        );

        if (result) {
            const dataAuth = {
                accessToken: result.accessToken
            };

            await localStorage.setItem(
                LOCAL_STORAGE.REMEMBER_ME,
                JSON.stringify(rememberMe)
            );

            if (rememberMe === true) {
                await localStorage.setItem(
                    LOCAL_STORAGE.DATA_AUTH,
                    JSON.stringify(dataAuth)
                );
            } else {
                await sessionStorage.setItem(
                    LOCAL_STORAGE.DATA_AUTH,
                    JSON.stringify(dataAuth)
                );
            }

            this.isLogin = STATUS_LOGIN.ADMIN_LOGIN;
            this.data_getUserInfo = result;

            return true;
        }

        return false;
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
    async action_logout(history: any) {
        await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        await sessionStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
        this.data_getUserInfo = {};
        this.isLogin = STATUS_LOGIN.NOT_LOGIN;

        history.push("/signin");
    }

}
