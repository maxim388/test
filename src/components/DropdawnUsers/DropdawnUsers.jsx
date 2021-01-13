import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { randomThunk } from "../../store/reducers/apiReducer";
import { deleteUserThunk } from "../../store/reducers/usersReducer";

const DropdawnUsers = React.memo((props) => {

    const [userName, setUserName] = useState(props.userName);

    const onClick = (key) => {
        setUserName(key);
        props.randomThunk(props.keysApi);
    };

    const deleteUser = (key) => {
        let index = props.keySubUsers.indexOf(key);
        props.deleteUserThunk(key, index);
        props.randomThunk(props.keysApi);
        setUserName(props.userName);
    };

    const menu = (
        <Menu>
            {props.keySubUsers.map((key) => {
                return (
                    <Menu.Item key={key.toString()}>
                        <div>
                            <NavLink
                                to={`/cards/user/${key}`}
                                onClick={() => onClick(key)}
                            >
                                {key}
                            </NavLink>

                            <NavLink
                                style={{ padding: "0 15px 0 15px" }}
                                to={`/settings/${key}`}
                            >
                                <EditOutlined />
                            </NavLink>

                            <NavLink
                                to={`/settings/${key}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    deleteUser(key);
                                }}
                            >
                                <DeleteOutlined />
                            </NavLink>
                        </div>
                    </Menu.Item>
                );
            })}
        </Menu>
    );
    
    return (
        <Dropdown overlay={menu}>
            <Link
                className="ant-dropdown-link"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                {userName}
            </Link>
        </Dropdown>
    );
});

const mapStateToProps = (state) => {
    return {
        userName: state.auth.user.userName,
        keySubUsers: state.subUsers.keySubUsers,
        keysApi: state.api.keysApi,
    };
};

export default compose(
    connect(mapStateToProps, { deleteUserThunk, randomThunk })
)(DropdawnUsers);
