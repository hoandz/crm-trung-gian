import { useEffect, useState } from "react";
import { Form, Input, Button, message, DatePicker, Row, Col } from 'antd';
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { InfoCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const ChangeKyc = observer((props: any) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    const onFill = () => {
        form.setFieldsValue({
            url: 'https://taobao.com/',
        });
    };
    const config = {
        rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
    };
    return (
        <Row>
            <Col xs={24} md={14}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="zalo"
                        label="Zalo"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="facebook"
                        label="Facebook"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Xác nhận
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} md={10}>

            </Col>
        </Row>
    );
});

export default ChangeKyc;
