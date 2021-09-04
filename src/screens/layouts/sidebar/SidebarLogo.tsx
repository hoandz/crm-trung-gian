import { Link } from "react-router-dom";
import Images from "../../../common/Images";

const SidebarLogo = (props: any) => {
    return (
        <div className="gx-layout-sider-header">
            <Link to="/" className="site-logo">
                <img src={Images.logo_white} alt="logo" className="img-logo" />
            </Link>
        </div>
    );
};

export default SidebarLogo;
