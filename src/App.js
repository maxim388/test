import "./App.css";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink, Route } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import AuthUserState from "./components/AuthUserState/AuthUserState";
import DropdawnUsers from "./components/DropdawnUsers/DropdawnUsers";
import LoginForm from "./components/LoginForm/LoginForm";
import CardsApi from "./components/CardsApi/CardsApi";
import User from "./components/User/User";
import Auxiliary from "./components/Auxiliary/Auxiliary";

const { Header, Content, Footer } = Layout;

const App = (props) => {
    return (
        <Layout>
            <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                <Row>
                    <Col span={22}>
                        {props.isAuth ? (
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultOpenKeys={["1"]}
                            >
                                <Menu.Item key="1">
                                    <NavLink to="/cards">Home</NavLink>
                                </Menu.Item>

                                <Menu.Item key="2">
                                    <SettingOutlined />
                                    <NavLink to="/settings">Settings</NavLink>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <UserOutlined />
                                    <DropdawnUsers />
                                </Menu.Item>
                            </Menu>
                        ) : (
                            <></>
                        )}
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
                <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 380 }}
                >
                    <Route exact path="/cards" render={() => <CardsApi />} />
                    <Route path="/cards/user/:key" render={() => <User />} />
                    <Route path="/cards/auxiliary/:api" render={() => <Auxiliary />}/>
                    <Route path="/settings/:key?" render={() => <Settings />} />
                    <Route path="/auth" render={() => <LoginForm />} />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Maxim Alenchikov :)</Footer>
        </Layout>
    );
};

export default App;
