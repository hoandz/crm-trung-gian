import { useState } from "react";
import { LoadingOutlined, CloudUploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useStore } from "../../hooks";
import { UPLOAD_FILE_TYPE } from "../../helpers/constants";
import { readFileToBase64 } from "../../helpers/functions";

const UploadImage = observer((props: any) => {
    const {
        handleImageChange,
        imageUrl,
        classImage,
        className,
        disabled,
    } = props;

    const AuthStore = useStore("AuthStore");
    const [loading, set_loading] = useState(false);
    const { t } = useTranslation();

    const handleUploadImage = async (e: any) => {
        const file = await readFileToBase64(e.file);

        if (file) {
            const base64 = file.split(",")[1];

            set_loading(true);

            const fileName = new Date().getTime();
            const result = await AuthStore.action_uploadImage(fileName, base64);

            if (result) {
                handleImageChange(result);
            }

            set_loading(false);
        }
    };

    const renderUpload = () => {
        if (imageUrl) {
            return <img src={imageUrl} alt="" className={classImage} />;
        }

        return (
            <div className="title-upload">
                {loading ? <LoadingOutlined /> : <CloudUploadOutlined />}

                <div className="ant-upload-text">Upload</div>
            </div>
        );
    };

    return (
        <Upload
            accept={UPLOAD_FILE_TYPE}
            className={`${className}`}
            showUploadList={false}
            listType="picture-card"
            customRequest={handleUploadImage}
            disabled={disabled}
        >
            {renderUpload()}
        </Upload>
    );
});

export { UploadImage };
