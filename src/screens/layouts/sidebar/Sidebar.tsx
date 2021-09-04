import { Layout, Drawer } from "antd";
import SidebarContent from "./SidebarContent";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../hooks";
import { TAB_SIZE } from "../../../helpers/constants";

const { Sider } = Layout;

const Sidebar = observer((props: any) => {
    const AuthStore = useStore("AuthStore");

    const handleCloseSidebar = () => {
        AuthStore.action_closeSidebar();
    };

    return (
        <Sider
            className={`gx-app-sidebar gx-layout-sider-dark`}
            trigger={null}
            collapsed={false}
            theme={"dark"}
            collapsible
        >
            {AuthStore.width_screen < TAB_SIZE ? (
                <Drawer
                    className={`gx-drawer-sidebar drawer-container`}
                    placement="left"
                    closable={false}
                    onClose={handleCloseSidebar}
                    visible={AuthStore.navCollapsed}
                >
                    <SidebarContent {...props} sidebarCollapsed={true} />
                </Drawer>
            ) : (
                <SidebarContent {...props} sidebarCollapsed={true} />
            )}
        </Sider>
    );
});
export default Sidebar;
