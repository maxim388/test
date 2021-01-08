import "./LoginForm.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { compose } from "redux";
import { connect } from "react-redux";
import { loginCreator } from "../../store/reducers/authReduser";
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
    const [form] = Form.useForm();

    const submitForm = (valuesForm) => {
        let user = {
            userName: valuesForm.username,
            password: valuesForm.password,
        };

        localStorage.setItem("user", JSON.stringify(user));
        props.loginCreator(valuesForm.username, valuesForm.password);
        form.resetFields();
    };
    
    if (props.isAuth) return <Redirect to="/settings"/>;
    return (
        <Form
            form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={submitForm}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: "Please input your Username!",
                    },
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >
                    Log in
                </Button>
            </Form.Item>
        </Form>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    connect(mapStateToProps, { loginCreator })
    //withAuthRedirect
)(LoginForm);
