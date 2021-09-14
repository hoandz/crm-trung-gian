import { Layout, Row, Col, Menu, Dropdown, Button, Badge, Modal } from "antd";
import { observer } from "mobx-react-lite";
import { useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { TAB_SIZE } from "../../../helpers/constants";
import { useStore } from "../../../hooks";
import AdminRouters from "../../AdminRouters";
import Sidebar from "../sidebar/Sidebar";
import { ExclamationCircleOutlined, NotificationOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';
const { Content } = Layout;

const LayoutAdmin = observer((props: any) => {
    const match = useRouteMatch();
    const AuthStore = useStore("AuthStore");
    const [visiblePopover, setVisiblePopover] = useState(false);
    const { history } = props;
    const style = {
        border: "none",
        background: "none",
        boxShadow: "none"
    }
    const handleAdminLogoutClick = () => {
        Modal.confirm({
            title: "Bạn muốn đăng xuất",
            icon: <ExclamationCircleOutlined />,
            okText: "Đồng ý",
            cancelText: "Hủy",
            async onOk() {
                AuthStore.action_logout(history);
            },
        });
    };
    const menu = (
        <Menu>
            <Menu.Item
                onClick={handleAdminLogoutClick}
            >
               <LogoutOutlined /> Đăng xuất
            </Menu.Item>
        </Menu>
    );

    const handleOpenSidebar = () => {
        AuthStore.action_openSidebar();
    };

    return (
        <Layout className="gx-app-layout layout-admin">
            <Sidebar {...props} />
            <Layout>
                {AuthStore.width_screen < TAB_SIZE && (
                    <div className="gx-linebar header-mobile-container">
                        <div>
                            <i
                                className="gx-icon-btn icon icon-menu"
                                onClick={handleOpenSidebar}
                            />
                        </div>
                    </div>
                )}
                {AuthStore.width_screen > TAB_SIZE && (
                    <div className="gx-layout-sider-header gx-layout-sider-header-top">
                        <div>
                            Chào mừng: {AuthStore.data_getUserInfo.full_name ? AuthStore.data_getUserInfo.full_name : ""}
                        </div>
                        <div>
                            <Dropdown overlay={menu}>
                                
                                <Button style={style}>
                                    
                                    {
                                        AuthStore.data_getUserInfo.img_avatar && AuthStore.data_getUserInfo.img_avatar != "" 
                                        ?
                                        <img src={AuthStore.data_getUserInfo.img_avatar} alt="" />  
                                        :
                                        <UserOutlined /> 
                                    }
                                    {AuthStore.data_getUserInfo.username ? AuthStore.data_getUserInfo.username : ""}
                                </Button>
                            </Dropdown>
                            <a href="#">
                                <Badge count={5}>
                                    <NotificationOutlined style={{ fontSize: 17 }} />
                                </Badge>
                            </a>
                        </div>
                    </div>
                )}
                <Content
                    className={`gx-layout-content gx-main-content-wrapper`}
                >
                    <AdminRouters match={match} />
                </Content>
            </Layout>
        </Layout>
    );
});

export default LayoutAdmin;
