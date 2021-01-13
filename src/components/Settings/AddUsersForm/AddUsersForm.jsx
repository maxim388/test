import "./AddUsersForm.css";
import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Form, Input, InputNumber, Button } from "antd";
import {
    setUserThunk,
    updateUserThunk,
} from "../../../store/reducers/usersReducer";
import { withRouter } from "react-router-dom";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const AddUsersForm = React.memo((props) => {
    const [form] = Form.useForm();
    const [fullName, setFullName] = useState(props.user.fullName);
    const [email, setEmail] = useState(props.user.email);
    const [age, setAge] = useState(props.user.age);
    const [aboutMeSelf, setAboutMeSelf] = useState(props.user.aboutMeSelf);

    useEffect(() => {
        let promise = new Promise((resolve) => {
            setFullName(props.user.fullName);
            setEmail(props.user.email);
            setAge(props.user.age);
            setAboutMeSelf(props.user.aboutMeSelf);
            resolve();
        });
        promise.then(() => {
            form.resetFields();
        });
    }, [props.user]);

    const closeForm = () => {
        props.history.push("/settings/");
    };

    const onFinish = () => {
        if (props.match.params.key) {
            return (values) => {
                let clone = props.keySubUsers.findIndex(
                    (k) => k === values.fullName
                );
                props.updateUserThunk(
                    values,
                    props.match.params.key,
                    props.index,
                    clone
                );
                form.resetFields();
                closeForm();
            };
        } else {
            return (values) => {
                let clone = props.keySubUsers.findIndex(
                    (k) => k === values.fullName
                );
                props.setUserThunk(values, clone);
                form.resetFields();
            };
        }
    };

    return (
        <Form
            form={form}
            {...layout}
            onFinish={onFinish()}
            validateMessages={validateMessages}
            initialValues={{
                fullName: fullName,
                email: email,
                age: age,
                aboutMeSelf: aboutMeSelf,
            }}
        >
            <Form.Item
                name={"fullName"}
                label="Fullname"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={"email"}
                label="Email"
                rules={[
                    {
                        type: "email",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={"age"}
                label="Age"
                rules={[
                    {
                        type: "number",
                        min: 0,
                        max: 140,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={"aboutMeSelf"}
                label="About myself"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                {fullName ? (
                    <>
                        <Button type="default" htmlType="submit">
                            Save User
                        </Button>
                        <Button type="danger" onClick={closeForm}>
                            Close User
                        </Button>
                    </>
                ) : (
                    <Button type="primary" htmlType="submit">
                        Add User
                    </Button>
                )}
            </Form.Item>
        </Form>
    );
});

export default compose(
    connect(null, { setUserThunk, updateUserThunk }),
    withRouter
)(AddUsersForm);
