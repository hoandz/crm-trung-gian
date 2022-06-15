import axios from "axios";
import { get } from "lodash";
import {
    CONFIG_URL,
    LOCAL_STORAGE,
    ERROR_CODES,
    TIME_OUT_API,
} from "../helpers/constants";
import { showMessageError, showMessageSuccess } from "../helpers/functions";

export const Request = {
    async header() {
        let token = "";
        let valueAsync;

        const rememberMe = await localStorage.getItem(
            LOCAL_STORAGE.REMEMBER_ME
        );

        if (rememberMe === "false") {
            valueAsync = await sessionStorage.getItem(
                LOCAL_STORAGE.DATA_AUTH
            );
        } else {
            valueAsync = await localStorage.getItem(
                LOCAL_STORAGE.DATA_AUTH
            );
        }

        if (valueAsync) {
            token = JSON.parse(valueAsync).token;
        }
        return {
            baseURL: CONFIG_URL.SERVICE_URL,
            headers: {
                "Content-Type": "application/json"
            },
        };
    },

    async get(url) {
        try {
            let header = await this.header();
            const res = await axios.get(url, header);
            console.log("res", res);
            if (res.data.errorCode === ERROR_CODES.SUCCESS) {
                return res.data.wsResponse || true;
            } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(res.logs);
            } else {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(res.logs);
            }
        } catch (error) {
            if (error.message === "Network Error") {
                showMessageError("Không có kết nối. Vui lòng thử lại");
                return false;
            } else if (error.message.indexOf("timeout of") != -1) {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(
                    "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
                );
                return false;
            } else {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(error.message);
                return false;
            }
        }
    },

    async post(body, url, wsCode) {
        let json;

        try {
            let header = await this.header();
            let sessionId = "";
            let token = "";
            let valueAsync;
            valueAsync = await sessionStorage.getItem(
                LOCAL_STORAGE.DATA_AUTH
            );
            if (valueAsync) {
                sessionId = JSON.parse(valueAsync).session;
                token = JSON.parse(valueAsync).token;
            }
            json = {
                sessionId,
                token,
                wsCode,
                wsRequest: { ...body },
            };

            const res = await axios.post(url, json, header);
            if (res.data.errorCode === ERROR_CODES.SUCCESS) {
                return res.data.wsResponse || true;
            } else if (res.data.errorCode === ERROR_CODES.UNAUTHORIZED) {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(res.data.message);
                return false
            } else {
                showMessageError(res.data.message);
                return false
            }
        } catch (error) {
            if (error.message === "Network Error") {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else if (error.message.indexOf("timeout of") != -1) {
                showMessageError(
                    "Hệ thống đang nâng cấp. Vui lòng thử lại sau"
                );
            } else {
                showMessageError(error.message);
            }
        }
    },

    async uploadFile(body, url) {
        try {
            let api = await this.header();
            let token = "";

            let valueAsync = await localStorage.getItem(
                LOCAL_STORAGE.DATA_AUTH
            );

            if (valueAsync) {
                token = JSON.parse(valueAsync).token;
            }

            const res = await api.post(url, body, {
                timeout: TIME_OUT_API,
            });

            if (res.data.errorCode === ERROR_CODES.SUCCESS) {
                return res.data.wsResponse;
            } else {
                showMessageError(res.data.message);
            }
        } catch (error) {
            if (error.message === "Network Error") {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else if (error.message.indexOf("timeout of") !== -1) {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else {
                showMessageError(error.message);
            }
        }
    },
};
