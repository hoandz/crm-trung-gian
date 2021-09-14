import { useEffect, useState } from "react";
import {
    Col,
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { CrownOutlined } from "@ant-design/icons";
// import { useStore } from "../../hooks";
// import { GLOBAL_CLIENT } from "../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
// import { getDateTimeShow, showMessageSuccess } from "../../helpers/functions";
// import { Loading } from "../../common";

const Notification = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <>
            <Col xs={24} md={8}>
                <div className="box-radius">
                    <h2 style={{ textAlign: 'center' }}>Bảng xếp hạng</h2>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary-top1 border-radius-md">
                                <CrownOutlined />
                            </div>
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary-top1 border-radius-md">
                                <CrownOutlined />
                            </div>
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                            <div className="icon bg-gradient-primary-top1 border-radius-md">
                                <CrownOutlined />
                            </div>
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                        </div>
                    </div>
                    <div className="item-header-member p10 box-shadow mb-10">
                        <div className="number">
                            <div className="text-capture font-weight-bold">
                                <h2 className="mg-0">
                                    Trần Trọng Hiếu
                                </h2>
                            </div>
                            <h5 className="text-number font-weight-bold mg-0">
                                100.000.000 VND
                            </h5>
                        </div>
                        <div className="text-end">
                        </div>
                    </div>

                </div>
            </Col>
        </>
    );
});

export default Notification;
