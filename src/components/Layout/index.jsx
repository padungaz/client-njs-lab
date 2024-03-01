import React from "react";
import { useNavigate } from "react-router-dom";

const Layout = (props) => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: "30px" }}>
            <div>
                <a href="/" onClick={() => { navigate("/") }}>Enter User</a> | <a href="/users" onClick={() => { navigate("/users") }}>Users</a>
            </div>
            <main>{props?.children}</main>
        </div>
    );
};
export default Layout;