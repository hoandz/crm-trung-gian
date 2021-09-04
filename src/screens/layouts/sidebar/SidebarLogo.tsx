import { Link } from "react-router-dom";
import Images from "../../../common/Images";

const SidebarLogo = (props: any) => {
    return (
        <div className="gx-layout-sider-header">
            <Link to="/" className="site-logo">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="logo" className="img-logo" />
            </Link>
        </div>
    );
};

export default SidebarLogo;
