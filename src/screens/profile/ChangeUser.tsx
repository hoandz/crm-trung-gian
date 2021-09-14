import { useEffect, useState } from "react";
import { Form, Input, Button, message, DatePicker, Row, Col } from 'antd';
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { FileImageOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const ChangeUser = observer((props: any) => {
    const { t } = useTranslation();
    const [form] = Form.useForm();
    const [imgPreview, setImgPreview] = useState('');
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
                    <div style={{ overflow: 'hidden' }}>
                        <label className="ant-form-item-required" title="Họ và tên">Ảnh đại diện</label>
                        <div className="box-upload" style={{margin: '10px 0px'}}>
                            {
                                imgPreview != '' ?
                                <img src={imgPreview} alt="" className="preview"/>
                                :
                                <FileImageOutlined className="iconImg"/>
                            }
                            <input type="file" className="fileImg"/>
                        </div>
                        <Form.Item
                            name="nickname"
                            label="Họ và tên"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được để trống tên!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item name="date-picker" label="Ngày sinh" {...config}>
                            <DatePicker format="DD-MM-YYYY" />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Số điện thoại"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được để trống sdt!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'Sai định dạng E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Không được để trống E-mail!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="address"
                            label="Địa chỉ"
                            rules={[
                                {
                                    required: true,
                                    message: 'Không được để trống địa chỉ!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="intro"
                            label="Giới thiệu"
                        >
                            <TextArea rows={4} />
                        </Form.Item>
                    </div>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={24} md={10}>
                
            </Col>
        </Row>
    );
});

export default ChangeUser;
