import "./App.css";
import LoginForm from "./components/LoginForm/LoginForm";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { NavLink, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
// import CardsAPI from "./components/CardsAPI/CardsAPI";
import AuthUserState from "./components/AuthUserState/AuthUserState";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import DropdawnUsers from "./components/DropdawnUsers/DropdawnUsers";
// import User from "./components/User/User";
// import Auxiliary from "./components/Auxiliary/Auxiliary";
import Home from "./components/Home/Home";

const { Header, Content, Footer } = Layout;

function App(props) {
    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <Row>
                    <Col span={22}>
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item key="1">
                                <NavLink to="/cards">Home</NavLink>
                            </Menu.Item>

                            {props.userName ? (
                                <>
                                    <Menu.Item key="2">
                                        <SettingOutlined />
                                        <NavLink to="/settings">
                                            Settings
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item key="3">
                                        <UserOutlined />
                                        <DropdawnUsers
                                            userName={props.userName}
                                            keySubUsers={props.keySubUsers}
                                        />
                                    </Menu.Item>
                                </>
                            ) : (
                                <></>
                            )}
                        </Menu>
                    </Col>
                    <Col span={2}>
                        <AuthUserState />
                    </Col>
                </Row>
            </Header>
            <Content
                className="site-layout"
                style={{ padding: "0 50px", marginTop: 64 }}
            >
                <Breadcrumb style={{ margin: "16px 0" }}>
                    {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item> */}
                </Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}
                >
                    <Route path="/cards/:key?" render={() => <Home />} />
                    {/* <Route exact path="/cards" render={() => <CardsAPI />} /> */}
                    {/* <Route path="/cards/:key" render={() => <User />} /> */}
                    {/* <Route exact path="/cards/auxiliary" render={() => <Auxiliary/>} /> */}

                    <Route path="/settings/:key?" render={() => <Settings />} />

                    <Route path="/auth" render={() => <LoginForm />} />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Maxim Alenchikov :)</Footer>
        </Layout>
    );
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.user.userName,
        users: state.subUsers.users,
        keySubUsers: state.subUsers.keySubUsers,
    };
};

export default connect(mapStateToProps)(App);
