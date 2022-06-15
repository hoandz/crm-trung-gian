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
    AutoComplete,
    Drawer,
    Table,
    Pagination,
    Space,
    Collapse
} from "antd";
import _ from "lodash";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useStore } from "../../hooks";
const { Option } = Select;
const { Search } = Input;
const { Panel } = Collapse;
const TransactionRoom = observer((props: any) => {
    const AuthStore = useStore("AuthStore");
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [page, setPage] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [form] = Form.useForm();
    const [totalPage, setTotalPage] = useState(0)
    const [listTaiKhoan, setListTaiKhoan] = useState([])
    const [dataDetail, setDataDetail] = useState<any>({})
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
    const enterLoading = (a: any) => {
        setDataDetail(a)
        setVisible(true);
    }
    useEffect(() => {
        getListKhoanVay()
    }, [page, textSearch])
    const getListKhoanVay = async () => {
        const params = {
            "textSearch": textSearch,
            "pageSize": pageSize,
            "page": page
        }
        const result = await AuthStore.action_getListAccount(params)
        if (result) {
            setTotalPage(result.totalPage);
            setListTaiKhoan(result.data);
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
            title: 'Mật khẩu',
            dataIndex: 'matKhau',
            key: 'matKhau',
        },
        {
            title: 'Họ tên',
            dataIndex: 'hoTen',
            key: 'hoTen',
        },
        {
            title: 'CCCD/CMND',
            key: 'soCmnd',
            dataIndex: 'soCmnd'
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
    const data = [
        {
            key: '1',
            stt: '1',
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '2',
            stt: "2",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
        {
            key: '3',
            stt: "3",
            stk: '0123456789',
            ht: "Nguyễn Văn A",
            cccd: "012345678908",
            kv: "10.000.000"
        },
    ];
    const onchangePage = (val: any) => {
        setPage(val - 1)
    }
    const onSearch = (value: any) => {
        setTextSearch(value)
    }
    return (
        <>
            <Row gutter={[24, 24]}>
                <Col span={24}>
                    <div className="box-radius">
                        <div className="box-header-cdd">
                            <h2>
                                Danh sách tài khoản
                            </h2>
                            <Search
                                onSearch={onSearch}
                                style={{
                                    width: 400,
                                }}
                            />
                        </div>
                        <Table columns={columns} dataSource={listTaiKhoan} pagination={false} />
                        <div className="pag-acn">
                            <Pagination onChange={onchangePage} total={pageSize * totalPage} pageSize={pageSize} current={page + 1} />
                        </div>
                    </div>
                </Col>
            </Row>
            <Drawer width={500} title="THÔNG TIN TÀI KHOẢN" placement="right" onClose={onClose} visible={visible} className="box-detail">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Thông tin cá nhân" key="1">
                        <p><b>Họ và tên: {dataDetail?.hoTen}</b></p>
                        <p><b>Số CCCD/ CMND: {dataDetail?.soCmnd}</b></p>
                        <p><b>Hình ảnh CMND:</b></p>
                        <div>
                            <img style={{ width: '100%', height: 'auto', marginBottom: '10px' }} src={dataDetail?.cmndTruoc}></img>
                            <img style={{ width: '100%', height: 'auto', marginBottom: '10px' }} src={dataDetail?.cmndSau}></img>
                            <img style={{ width: '100%', height: 'auto', marginBottom: '10px' }} src={dataDetail?.anhCamCmnd}></img>
                        </div>
                    </Panel>
                    <Panel header="Thông tin hồ sơ" key="2">
                        <h3 style={{color: "#E2542B"}}>Cá nhân</h3>
                        <p><b>Trình độ học vấn: {dataDetail?.hocVan}</b></p>
                        <p><b>Thu nhập cá nhân: {dataDetail?.thuNhap}</b></p>
                        <p><b>Mục đích vay: {dataDetail?.mucDichVay}</b></p>
                        <p><b>Có nhà cửa không: {dataDetail?.nhaCua}</b></p>
                        <p><b>Có xe cộ không: {dataDetail?.xe}</b></p>
                        <p><b>Tiền lương hàng tháng: {dataDetail?.tienLuong}</b></p>
                        <p><b>Địa chỉ chi tiết: {dataDetail?.diaChi}</b></p>
                        <h3 style={{color: "#E2542B"}}>Gia đình</h3>
                        <p><b>Họ và tên: {dataDetail?.tenGd}</b></p>
                        <p><b>Số điện thoại: {dataDetail?.sdtGd}</b></p>
                        <p><b>Mối quan hệ: {dataDetail?.moiQuanHeGd}</b></p>
                        <h3 style={{color: "#E2542B"}}>Khác</h3>
                        <p><b>Họ và tên: {dataDetail?.tenKhac}</b></p>
                        <p><b>Số điện thoại: {dataDetail?.sdtKhac}</b></p>
                        <p><b>Mối quan hệ : {dataDetail?.moiQuanHeKhac}</b></p>
                    </Panel>
                    <Panel header="Thông tin thẻ ngân hàng" key="3">
                        <p><b>Tên chủ thẻ: {dataDetail?.tenChuThe}</b></p>
                        <p><b>Số ID chủ thẻ: {dataDetail?.idChuThe}</b></p>
                        <p><b>Ngân hàng : {dataDetail?.nganHang}</b></p>
                        <p><b>Số tài khoản ngân hàng : {dataDetail?.soTaiKhoan }</b></p>
                    </Panel>
                    <Panel header="Chữ ký viết tay" key="4">
                        <img src={dataDetail?.chuKy}></img>
                    </Panel>
                </Collapse>
            </Drawer>
        </>
    );
});

export default TransactionRoom;
