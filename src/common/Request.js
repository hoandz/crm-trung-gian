import axios from "axios";
import {
    CONFIG_URL,
    LOCAL_STORAGE,
    ERROR_CODES,
    TIME_OUT_API,
} from "../helpers/constants";
import { showMessageError } from "../helpers/functions";

export const Request = {
    async header() {
        let accessToken = "";
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
            accessToken = JSON.parse(valueAsync).accessToken;
        }
        return await axios.create({
            baseURL: CONFIG_URL.SERVICE_URL,
            headers: {
                "Content-Type": "application/json",
                "x-access-token": accessToken
            },
        });
    },

    async post(body, url) {
        let json;

        try {
            let api = await this.header();
            json = {
                wsRequest: { ...body },
            };

            const res = await api.post(url, json, {
                timeout: TIME_OUT_API,
            });

            if (res.data.errorCode == ERROR_CODES.SUCCESS) {
                return res.data.wsResponse || true;
            } else if (res.data.errorCode == ERROR_CODES.UNAUTHORIZED) {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
                showMessageError(res.data.logs);
            } else {
                showMessageError(res.data.logs);
            }
        } catch (error) {
            if (error.message == "Network Error") {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else if (error.message.indexOf("timeout of") != -1) {
                await localStorage.removeItem(LOCAL_STORAGE.DATA_AUTH);
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
            let accessToken = "";

            let valueAsync = await localStorage.getItem(
                LOCAL_STORAGE.DATA_AUTH
            );

            if (valueAsync) {
                accessToken = JSON.parse(valueAsync).accessToken;
            }

            const res = await api.post(url, body, {
                timeout: TIME_OUT_API,
            });

            if (res.data.errorCode == ERROR_CODES.SUCCESS) {
                return res.data.wsResponse;
            } else {
                showMessageError(res.data.message);
            }
        } catch (error) {
            if (error.message == "Network Error") {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else if (error.message.indexOf("timeout of") != -1) {
                showMessageError("Không có kết nối. Vui lòng thử lại");
            } else {
                showMessageError(error.message);
            }
        }
    },
};
