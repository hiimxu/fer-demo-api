import React from "react";
import Header from "./components/Header";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx("container")}>{children}</div>
        </div>
    );
}
