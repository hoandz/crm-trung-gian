import { useEffect, useState } from "react";
import {
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
const { Option } = Select;
const EditPayout = observer((props: any) => {
    const { t } = useTranslation();
    const {showDrawer, onClose} = props;
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();

    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    return (
        <>
            <Drawer
                title="ADD PAYMENT METHOD"
                width={700}
                placement="right"
                onClose={onClose}
                visible={showDrawer}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item name="paymethod" label="Phương thức thanh toán" rules={[{ required: true, message: 'Không được để trống!' }]}>
                        <Select
                            placeholder="Bank"
                            allowClear
                        >
                            <Option value="male">Tiền mặt</Option>
                            <Option value="female">Chuyển khoản</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="bankname" label="Tên ngân hàng" rules={[{ required: true, message: 'Không được để trống!' }]}>
                        <Select
                            placeholder="Bank"
                            allowClear
                        >
                            <Option value="male">Techcombank</Option>
                            <Option value="female">Vietcombank</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="fullname"
                        label="Họ và tên"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="banknumber"
                        label="Số tài khoản"
                        rules={[
                            {
                                required: true,
                                message: 'Không được để trống!',
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Thêm mới
                        </Button>
                        <Button type="primary" onClick={onClose}>
                            Đóng
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
});

export default EditPayout;
