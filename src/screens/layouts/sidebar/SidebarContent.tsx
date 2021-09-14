import { Link } from "react-router-dom";
import CustomScrollbars from "./CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import { observer } from "mobx-react-lite";
import { GLOBAL_CLIENT } from "../../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../hooks";
import { Layout, Menu, Breadcrumb } from 'antd';
import { HomeOutlined, DollarOutlined, MergeCellsOutlined, UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;

const SidebarContent = observer((props: any) => {
    const { location } = props;
    const { t } = useTranslation();
    const AuthStore = useStore("AuthStore");

    const pathUrl = location.pathname.substr(1);
    const splitPathUrl = pathUrl.split("/");
    const selectedKeys = splitPathUrl[0];
    const defaultOpenKeys = splitPathUrl[1];

    const handleCloseSideBar = () => {
        AuthStore.action_closeSidebar();
    };

    const renderMenus = () => {
        return (
            <>
                <Menu.Item key="home">
                    <Link to="/home" onClick={handleCloseSideBar}>
                        <HomeOutlined />
                        <span>{t(GLOBAL_CLIENT.home)}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="kyc">
                    <Link to="/kyc" onClick={handleCloseSideBar}>
                        <MergeCellsOutlined />
                        <span>Kyc Transaction</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="transaction-room">
                    <Link to="/transaction-room" onClick={handleCloseSideBar}>
                        <UsergroupAddOutlined />
                        <span>Transaction Room</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="payout">
                    <Link to="/payout" onClick={handleCloseSideBar}>
                        <DollarOutlined />
                        <span>Payout</span>
                    </Link>
                </Menu.Item>
                
                <Menu.Item key="profile">
                    <Link to="/profile" onClick={handleCloseSideBar}>
                        <UserOutlined />
                        <span>Profile</span>
                    </Link>
                </Menu.Item>
            </>
        );
    };

    return (
        <>
            <SidebarLogo
                sidebarCollapsed={props.sidebarCollapsed}
                setSidebarCollapsed={props.setSidebarCollapsed}
            />
            <div className="gx-sidebar-content">
                <CustomScrollbars className="gx-layout-sider-scrollbar">
                    <Menu
                        defaultOpenKeys={[defaultOpenKeys]}
                        selectedKeys={[selectedKeys]}
                        theme={"dark"}
                        mode="inline"
                        className="menu-container"
                    >
                        {renderMenus()}
                    </Menu>
                </CustomScrollbars>
            </div>
        </>
    );
});

export default SidebarContent;
