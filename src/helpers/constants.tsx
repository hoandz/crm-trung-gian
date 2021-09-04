import { GLOBAL_CLIENT } from "./GlobalClient";

export const LOCAL_STORAGE = {
    DATA_AUTH: "DATA_AUTH",
    FIRSTLAUNCH: "FIRSTLAUNCH",
    REMEMBER_ME: "REMEMBER_ME",
};

export const STATUS_LOGIN = {
    WAIT_LOGIN: 0,
    ADMIN_LOGIN: 1,
    NOT_LOGIN: 2,
};

export const CONFIG_URL = {
    SERVICE_URL: process.env.REACT_APP_API_ENDPOINT,
};

export const ERROR_CODES = {
    SUCCESS: 200,
    REQUEST_FAILED: 0,
    UNAUTHORIZED: 401,
};

export const TIME_OUT_API = 30000;

export const TAB_SIZE = 992;

export const PAGE_SIZE = 15;

export const PAGE_SIZE_FULL = 1000;

export const PAGE_SIZE_POST = 4;

export const DATE_TIME_FORMAT_BACKEND = "YYYY-MM-DD HH:mm:ss";

export const DATE_TIME_FORMAT_CLIENT = "DD-MM-YYYY HH:mm";

export const DATE_FORMAT_CLIENT = "DD-MM-YYYY";

export const DATE_FORMAT_BACKEND = "YYYY-MM-DD";


export const COMMON_STATUS = {
    ALL: -1,
    ACTIVE: 1,
    INACTIVE: 0,
};

export const GENDER = {
    MALE: 1,
    FEMALE: 0,
};


export const PHONE_PATTERN = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

export const UPLOAD_FILE_TYPE = ".jpg,.jpeg,.png";

export const UPLOAD_FILE_EXCEL_TYPE = ".xls,.xlsx,.xlsm";
