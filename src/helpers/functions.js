import _ from "lodash";
import { message, Modal } from "antd";
import moment from "moment";
import {
    CONFIG_URL,
    DATE_TIME_FORMAT_BACKEND,
    COMMON_STATUS,
    DATE_TIME_FORMAT_CLIENT,
    DATE_FORMAT_CLIENT,
    GENDER,
    DATE_FORMAT_BACKEND,
    TAB_SIZE,
} from "./constants";
import { GLOBAL_CLIENT } from "./GlobalClient";

export const showMessageError = (msg) => {
    Modal.error({
        content: msg,
    });
};

export const showMessageSuccess = (msg) => {
    Modal.success({
        content: msg,
    });
};

export const showMessageInfo = (msg) => {
    message.info(msg);
};

export const showImage = (path) => {
    return `${CONFIG_URL.SERVICE_URL}${path}`;
};

export const to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
};

export const getValueLodash = (data, value) => {
    return _.get(data, value);
};

export const findObjectFromArrayLodash = (array, objectFind) => {
    return _.find(array, objectFind);
};

export const showModalSuccess = (mesage, onOK) => {
    Modal.success({
        content: mesage,
        onOk: onOK || null,
    });
};

export const getDateTimeShow = (date) => {
    if (!date) {
        return null;
    }

    const result = moment(date, DATE_TIME_FORMAT_BACKEND).format(
        DATE_TIME_FORMAT_CLIENT
    );

    if (result == "Invalid date") {
        return null;
    }

    return result;
};

export const getDateShow = (date) => {
    if (!date) {
        return null;
    }

    return moment(date).format(DATE_FORMAT_CLIENT);
};

export const showPrice = (value) => {
    if (value) {
        return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    return 0;
};

export const getDateClientPicker = (value) => {
    if (!value) {
        return null;
    }

    return moment(value, DATE_FORMAT_BACKEND);
};

export const getStatusClientShow = (status) => {
    if (status === COMMON_STATUS.ACTIVE) {
        return true;
    } else if (status === COMMON_STATUS.INACTIVE) {
        return false;
    }

    return null;
};

export const getDateTimeBackend = (value) => {
    if (!value) {
        return null;
    }

    return moment(value).format(DATE_TIME_FORMAT_BACKEND);
};

export const getStatusBackend = (status) => {
    if (status === true || status === 1) {
        return COMMON_STATUS.ACTIVE;
    } else if (status === false || status === 0) {
        return COMMON_STATUS.INACTIVE;
    }

    return null;
};

export const readFileToBase64 = (file) => {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => resolve(reader.result), false);
        reader.readAsDataURL(file);
    });
};

export const getNameTypeDoc = (arrDocs, id) => {
    let obj = findObjectFromArrayLodash(arrDocs, { id });

    if (obj) {
        return obj.name;
    }

    return null;
};

export const getTextGender = (gender) => {
    if (gender === GENDER.MALE) {
        return GLOBAL_CLIENT.male;
    } else if (gender === GENDER.FEMALE) {
        return GLOBAL_CLIENT.female;
    }

    return "";
};


export const getOffsetLayout = (width) => {
    return width < TAB_SIZE ? 0 : 6;
};
