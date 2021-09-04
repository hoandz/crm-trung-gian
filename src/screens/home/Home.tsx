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

const Home = observer((props: any) => {
    const { t } = useTranslation();
    
    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}

            <h2 className="head-title">{t(GLOBAL_CLIENT.txtList)}</h2>

            <Row>
                <Col span={24}>
                    <Row className="row-container-head">
                        <Col xs={24} md={24}>
                            <Space style={{ marginBottom: 16 }}>
                                <div>
                                    ádfasdfadsf
                                </div>
                            </Space>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
});

export default Home;
