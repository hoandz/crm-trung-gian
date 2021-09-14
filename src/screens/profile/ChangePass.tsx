import { useEffect, useState } from "react";
import { Form, Input, Button, message, DatePicker, Row, Col } from 'antd';
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { InfoCircleOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const ChangePass = observer((props: any) => {
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
                        name="passwordOld"
                        label="Mật khẩu cũ"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống mật khẩu!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Mật khẩu mới"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống mật khẩu!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Nhập lại mật khẩu"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống mật khẩu!',
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Không khớp mật khẩu!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Đổi mật khẩu
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} md={10}>

            </Col>
        </Row>
    );
});

export default ChangePass;
