import { Menu, Dropdown } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const DropdawnUsers = (props) => {
    const [name, setName] = useState(props.userName);
    

    const subUsers = (
        <Menu>
            {props.keySubUsers.map((key) => {
                return (
                    <Menu.Item key={key.toString()}>
                        <div>
                            <NavLink
                                to={`/cards/user/${key}`}
                                // onClick={(e) => {
                                //     e.preventDefault();
                                //     setName(key);
                                // }}
                            >
                                {key} |{" "}
                            </NavLink>
                            <NavLink to={`/settings/${key}`}>
                                <EditOutlined />
                            </NavLink>
                        </div>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <Dropdown overlay={subUsers} placement="bottomLeft">
            <a
                className="ant-dropdown-link"
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                {name}
            </a>
        </Dropdown>
    );
};

export default DropdawnUsers;
