import { useEffect, useState } from "react";
import {
    Space,
    Col,
    Row,
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { DownloadOutlined } from "@ant-design/icons";
import { useStore } from "../../hooks";
import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
import { getDateTimeShow, showMessageSuccess } from "../../helpers/functions";
import { Loading } from "../../common";

const Header = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}
            {/* <h2 className="head-title">{t(GLOBAL_CLIENT.txtList)}</h2> */}
            {/* Show total member */}
            <Col span={6}>
                <div className="box-radius">
                    step1
                </div>
            </Col>
            <Col span={6}>
                <div className="box-radius">
                    step2
                </div>
            </Col>
            <Col span={6}>
                <div className="box-radius">
                    step3
                </div>
            </Col>
            <Col span={6}>
                <div className="box-radius">
                    step4
                </div>
            </Col>
        </>
    );
});

export default Header;
