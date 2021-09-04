import { FunctionComponent } from "react";
import { Spin } from "antd";

export const Loading: FunctionComponent<{ isLoading: boolean }> = (props) => {
    if (props.isLoading === false) {
        return null;
    }

    return (
        <div className="loading">
            <Spin tip="Loading..." size="large" className="spinner" />
        </div>
    );
};
