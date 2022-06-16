import { useEffect, useState } from "react";
import {
    Row,
    Col,
    Space,
    Tag,
    Table,
    Pagination,
    Input,
    Button,
    Drawer,
    Form,
    Select
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { EditOutlined, PoweroffOutlined } from "@ant-design/icons";
import { useStore } from "../../hooks";
import moment from "moment"
import { showMessageSuccess } from "../../helpers/functions";
const { Search } = Input;
const { Option } = Select;
const KycAdvance = observer((props: any) => {
    const AuthStore = useStore("AuthStore");
    const [form] = Form.useForm()
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [listKhoanVay, setListKhoanVay] = useState([])
    const [totalPage, setTotalPage] = useState(0);
    const [id, setId] = useState(0)
    const onClose = () => {
        setVisible(false);
    };
    const [dataUsers, setDataUsers] = useState<any>({})
    const enterLoading = (a: any) => {
        form.setFieldsValue({
            hoTen: a.hoTen,
            sdt: a.sdt,
            soCmnd: a.soCmnd,
            soTien: a.soTien,
            thoiHan: a.thoiHan,
            ngayTao: moment(a.ngayTao).format("DD/MM/YYYY"),
            status: a.status
        })
        detail(a.accountId);
        setId(a.id)
        setVisible(true);
    }
    useEffect(() => {
        getListKhoanVay()
    }, [page, textSearch])

    const onChangePage = (val: any) => {
        setPage(val - 1)
    }
    const getListKhoanVay = async () => {
        const params = {
            "textSearch": textSearch,
            "status": null,
            "pageSize": pageSize,
            "page": page
        }
        const result = await AuthStore.action_getListKhoanVay(params)
        if (result) {
            setListKhoanVay(result.data);
            setTotalPage(result.totalPage);
        }
    }
    const columns = [
        {
            title: '#',
            dataIndex: 'stt',
            key: 'stt',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Tài khoản',
            dataIndex: 'sdt',
            key: 'sdt',
            render: (text: any) => <a>{text}</a>,
        },
        {
            title: 'Họ tên ',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'Số CCCD',
            dataIndex: 'soCmnd',
            key: 'soCmnd',
        },
        {
            title: 'Khoản vay',
            key: 'soTien',
            dataIndex: 'soTien'
        },
        {
            title: 'Thời hạn',
            key: 'thoiHan',
            dataIndex: 'thoiHan'
        },
        {
            title: 'Ngày tạo',
            key: 'ngayTao',
            dataIndex: 'ngayTao'
        },
        {
            title: 'Trạng thái',
            key: 'status',
            dataIndex: 'status'
        },
        {
            title: 'Hành động',
            key: 'hd',
            dataIndex: 'action',
            render: (_: any, record: any) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        onClick={() => enterLoading(record)}
                    />
                </Space>
            ),
        }
    ];
    const detail = async (id: any) => {
        const params = {
            id: id
        }
        const result = await AuthStore.action_detailAccount(params)
        if(result) {
            setDataUsers(result)
        }
    }
    const onSearch = (value: any) => {
        setTextSearch(value)
    }
    const onFinish = async (values: any) => {
        const params = {
            ...values,
            id: id
        }
        delete params.sdt
        delete params.hoTen
        delete params.ngayTao
        const result = await AuthStore.action_UpdateKhoanVay(params);
        const paramsTaiKhoan = {
            "id": dataUsers?.id,
            "profileType": "CA_NHAN",
            "hoTen": dataUsers?.hoTen,
            "soCmnd": values.soCmnd,
            "cmndTruoc": dataUsers?.cmndTruoc,
            "cmndSau": dataUsers?.cmndSau,
            "anhCamCmnd": dataUsers?.anhCamCmnd
        }
        const result2 = await AuthStore.action_updateTaiKhoan(paramsTaiKhoan)
        if (result && result2) {
            showMessageSuccess("Cập nhật thành công");
            getListKhoanVay();
            onClose()
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    }
    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <div className="box-radius" style={{ minHeight: "800px", overflow: "hidden" }}>
                        <div className="box-header-cdd">
                            <h2>
                                Danh sách khoản vay
                            </h2>
                            <Search
                                onSearch={onSearch}
                                style={{
                                    width: 400,
                                }}
                            />
                        </div>
                        <Table columns={columns} dataSource={listKhoanVay} pagination={false} />
                        <div className="pag-acn">
                            <Pagination current={page + 1} total={totalPage * pageSize} onChange={onChangePage} pageSize={pageSize} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Drawer width={500} title="CHI TIẾT KHOẢN VAY" placement="right" onClose={onClose} visible={visible} className="box-detail">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Tài khoản"
                                name="sdt"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Họ và tên"
                                name="hoTen"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Khoản vay"
                                name="soTien"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Số CMND"
                                name="soCmnd"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Thời hạn"
                                name="thoiHan"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Ngày tạo GD"
                                name="ngayTao"
                                className="flex-input mt-10"
                            >
                                <Input className="w-full" readOnly={true} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item
                                label="Trạng thái"
                                name="status"
                                className="flex-input mt-10"
                            >
                                <Select
                                    style={{
                                        width: "100%",
                                    }}
                                    onChange={handleChange}
                                >
                                    <Option value="MOI">Mới tạo</Option>
                                    <Option value="DA_XAC_NHAN">Đã xác nhận</Option>
                                    <Option value="DA_CHO_VAY">Đã cho vay</Option>
                                    <Option value="DA_TRA">Đã trả</Option>
                                    <Option value="QUA_HAN">Quá hạn</Option>
                                    <Option value="HUY">Hủy</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item className="flex-input mt-10">
                                <Button type="primary" htmlType="submit">
                                    Cập nhật trạng thái
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
});

export default KycAdvance;
