import { Menu } from "antd";
import { Link } from "react-router-dom";
import CustomScrollbars from "./CustomScrollbars";
import SidebarLogo from "./SidebarLogo";
import { observer } from "mobx-react-lite";
import { GLOBAL_CLIENT } from "../../../helpers/GlobalClient";
import { useTranslation } from "react-i18next";
import { useStore } from "../../../hooks";

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
                        <i className="icon icon-card" />
                        <span>{t(GLOBAL_CLIENT.home)}</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="nap-the">
                    <Link to="/nap-the" onClick={handleCloseSideBar}>
                        <i className="icon icon-card" />
                        <span>{t(GLOBAL_CLIENT.home)}</span>
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
