import { useEffect, useState } from "react";
import {
    Row,
    Col,
    PageHeader,
    Button,
    Modal,
    Select,
    Form,
    Input,
    message,
    Alert,
    AutoComplete
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { PlusOutlined } from '@ant-design/icons';
const { Option } = Select;

const TransactionRoom = observer((props: any) => {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [form] = Form.useForm();
    const showModel = () => {
        setVisible(true);
    }
    const options = [
        { value: 'Burns Bay Road' },
        { value: 'Downing Street' },
        { value: 'Wall Street' },
    ];
    const onFinish = () => {
        message.success('Submit success!');
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };
    const onClose = () => {
        setVisible(false);
    }
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
                                <Button type="primary" onClick={showModel} icon={<PlusOutlined />}>
                                    Tạo giao dịch
                                </Button>
                            ]}
                            style={{ padding: '0px', marginBottom: '20px' }}
                        ></PageHeader>
                        <Alert
                            message="Phòng số 1"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                        <Alert
                            message="Phòng số 2"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                        <Alert
                            message="Phòng số 3"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                        <Alert
                            message="Phòng số 4"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                        <Alert
                            message="Phòng số 5"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                        <Alert
                            message="Phòng số 6"
                            description="Additional description and information about copywriting."
                            type="info"
                            showIcon
                        />
                    </div>
                </Col>
            </Row>
            <Modal
                centered
                visible={visible}
                width={1000}
                footer={null}
                closable={false}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row gutter={[8, 8]} className="form-transaction">
                        <Col span={12}>
                            <Form.Item
                                name="fullnamea"
                                label="Bên A"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được để trống!',
                                    }
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                name="banknumber1"
                                label="Bên B"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Không được để trống!',
                                    }
                                ]}
                            >
                                <AutoComplete
                                    options={options}
                                    placeholder="try to type `b`"
                                    filterOption={(inputValue, option) =>
                                        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                                    }
                                />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="paymethoda" label="Vai trò bên A" rules={[{ required: true, message: 'Không được để trống!' }]}>
                                <Select
                                    placeholder="Bank1"
                                    allowClear
                                >
                                    <Option value="male">Tiền mặt</Option>
                                    <Option value="female">Chuyển khoản</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="paymethodd" label="Vai trò bên B" rules={[{ required: true, message: 'Không được để trống!' }]}>
                                <Select
                                    placeholder="Bank"
                                    allowClear
                                >
                                    <Option value="male">Tiền mặt</Option>
                                    <Option value="female">Chuyển khoản</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="paymethoddg" label="Ngày hết hạn" rules={[{ required: true, message: 'Không được để trống!' }]}>
                                <Select
                                    placeholder="Bank"
                                    allowClear
                                >
                                    <Option value="male">Tiền mặt</Option>
                                    <Option value="female">Chuyển khoản</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="paymethodg" label="Số tiền giao dịch" rules={[{ required: true, message: 'Không được để trống!' }]}>
                                <Select
                                    placeholder="Bank"
                                    allowClear
                                >
                                    <Option value="male">Tiền mặt</Option>
                                    <Option value="female">Chuyển khoản</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Form.Item
                        name="banknumber"
                        label="Tên phòng"
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
                        label="Mô tả"
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
            </Modal>
        </>
    );
});

export default TransactionRoom;
