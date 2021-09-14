import { useEffect, useState } from "react";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from '@ant-design/icons';
import {
    Row,
    Col,
} from "antd";
const ListItem = observer((props: any) => {
    const { t } = useTranslation();

    return (
        <Row gutter={[24, 24]} style={{marginTop: '50px'}}>
            <Col xs={24} md={6}>
                <div className="nova">
                    <div className="cover">
                        <div className="top">
                            <h3>Credit</h3>
                            <h1>Visa</h1>
                        </div>
                        <div className="bottom">
                            <h2>Bilal.Rizwaan</h2>
                            <h4>5231-4528-5326-2029</h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="nova">
                    <div className="cover">
                        <div className="top">
                            <h3>Credit</h3>
                            <h1>Visa</h1>
                        </div>
                        <div className="bottom">
                            <h2>Bilal.Rizwaan</h2>
                            <h4>5231-4528-5326-2029</h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="nova">
                    <div className="cover">
                        <div className="top">
                            <h3>Credit</h3>
                            <h1>Visa</h1>
                        </div>
                        <div className="bottom">
                            <h2>Bilal.Rizwaan</h2>
                            <h4>5231-4528-5326-2029</h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="nova">
                    <div className="cover">
                        <div className="top">
                            <h3>Credit</h3>
                            <h1>Visa</h1>
                        </div>
                        <div className="bottom">
                            <h2>Bilal.Rizwaan</h2>
                            <h4>5231-4528-5326-2029</h4>
                        </div>
                    </div>
                </div>
            </Col>
            <Col xs={24} md={6}>
                <div className="nova">
                    <div className="cover">
                        <div className="top">
                            <h3>Credit</h3>
                            <h1>Visa</h1>
                        </div>
                        <div className="bottom">
                            <h2>Bilal.Rizwaan</h2>
                            <h4>5231-4528-5326-2029</h4>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
});

export default ListItem;
