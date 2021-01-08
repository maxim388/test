import { Menu, Dropdown } from "antd";
import { DownOutlined, EditOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";

// {props.keySubUsers ? <></> : <DownOutlined />}

const DropdawnUsers = (props) => {
    const subUsers = (
        <Menu>
            {props.keySubUsers.map((key) => {
                return (
                    <Menu.Item>
                        <div>
                            <NavLink to={`/user/${key}`}>{key} | </NavLink>
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
            <Link
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
            >
                {props.userName}
            </Link>
        </Dropdown>
    );
};

export default DropdawnUsers;
