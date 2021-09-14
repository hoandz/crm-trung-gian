import { useEffect, useState } from "react";
import {
    Col,
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { PlayCircleOutlined } from "@ant-design/icons";
// import { useStore } from "../../hooks";
// import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
// import { getDateTimeShow, showMessageSuccess } from "../../helpers/functions";
// import { Loading } from "../../common";

const Header = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            {/* <Loading isLoading={isLoading} /> */}
            {/* <h2 className="head-title">{t(GLOBAL_CLIENT.txtList)}</h2> */}
            {/* Show total member */}
            <Col xs={24} md={6}>
                <div className="box-radius">
                    <div className="item-header-member">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                Today's Money
                            </div>
                            <h3 className="text-number font-weight-bold mg-0">
                                53,00%
                            </h3>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary border-radius-md">
                                <PlayCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="box-radius">
                    <div className="item-header-member">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                Today's Money
                            </div>
                            <h3 className="text-number font-weight-bold mg-0">
                                53,00%
                            </h3>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary border-radius-md">
                                <PlayCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="box-radius">
                    <div className="item-header-member">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                Today's Money
                            </div>
                            <h3 className="text-number font-weight-bold mg-0">
                                53,00%
                            </h3>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary border-radius-md">
                                <PlayCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </Col> 
            <Col xs={24} md={6}>
                <div className="box-radius">
                    <div className="item-header-member">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                Today's Money
                            </div>
                            <h3 className="text-number font-weight-bold mg-0">
                                53,00%
                            </h3>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary border-radius-md">
                                <PlayCircleOutlined />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
});

export default Header;
