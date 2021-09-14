import { useEffect, useState } from "react";
import {
    Col,
    Alert
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
// import { DownloadOutlined } from "@ant-design/icons";
// import { useStore } from "../../hooks";
// import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
// import { getDateTimeShow, showMessageSuccess } from "../../helpers/functions";
// import { Loading } from "../../common";

const Notification = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            <Col xs={24} md={16}>
                <div className="box-radius">
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                    <Alert
                        message="Thông báo"
                        description="Additional description and information about copywriting."
                        type="info"
                        showIcon
                    />
                </div>
            </Col>
        </>
    );
});

export default Notification;
