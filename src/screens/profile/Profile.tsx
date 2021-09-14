import { useEffect, useState } from "react";
import {
    Row,
    Col,
    Tabs,
    Radio,
    Space
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import ChangeUser from "./ChangeUser";
import ChangePass from "./ChangePass";
import ChangeKyc from "./ChangeKyc";
import BoxInfo from "./BoxInfo";
const { TabPane } = Tabs;

const Profile = observer((props: any) => {
    const { t } = useTranslation();
    
    return (
        <>
            <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                    <div className="box-radius">
                        <BoxInfo />
                    </div>
                </Col>
                <Col xs={24} md={16}>
                    <div className="box-radius">
                        <Tabs tabPosition='top'>
                            <TabPane tab="Sửa thông tin" key="1">
                                <ChangeUser />
                            </TabPane>
                            <TabPane tab="Đổi mật khẩu" key="2">
                                <ChangePass />
                            </TabPane>
                            <TabPane tab="KYC Advance" key="3">
                                <ChangeKyc />
                            </TabPane>
                        </Tabs>
                    </div>
                </Col>
            </Row>
        </>
    );
});

export default Profile;
