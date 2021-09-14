import { useEffect, useState } from "react";
import {
    Row,
    Col,
    PageHeader,
    Drawer,
    Select,
    Form,
    Input,
    Button,
    message
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from '@ant-design/icons';
import EditPayout from "./EditPayout";
import ListItem from "./ListItem";
const { Option } = Select;
const Payout = observer((props: any) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <div className="box-radius">
                        <PageHeader
                            ghost={false}
                            onBack={() => window.history.back()}
                            backIcon={false}
                            extra={[
                                <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                                    New Payment
                                </Button>
                            ]}
                            style={{ padding: '0px' }}
                        ></PageHeader>
                        <ListItem />
                    </div>
                </Col>
            </Row>
            <EditPayout onClose={onClose} showDrawer={visible}/>
        </>
    );
});

export default Payout;
