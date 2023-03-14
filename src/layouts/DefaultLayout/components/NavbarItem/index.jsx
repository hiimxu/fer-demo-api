import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./NavbarItem.module.scss";

const cx = classNames.bind(styles);

export default function NavbarItem({ to, name }) {
    return (
        <NavLink
            to={to}
            className={(nav) => cx("menu-item", { active: nav.isActive })}
        >
            {name}
        </NavLink>
    );
}
