import "./AddUsersForm.css";
import React, { useEffect, useState } from "react";
import { Form, Input, InputNumber, Button } from "antd";

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

    // useEffect(() => {
    //     form.resetFields();
    // }, [props.id]);

    const submitSubForm = (values) => {
        props.updateSubUsersThunk(values, props.id);
        // props.updateUsersCreator(values, props.id);
        form.resetFields();
        closeUser();
    };

    const closeUser = () => {
        props.push("/settings/");
    };

    // const updateFullName = () => {};
    return (
        <Form
            form={form}
            {...layout}
            name="nest-messages"
            onFinish={submitSubForm}
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
                // onChange={(e) => setFullName(e.currentTarget.value)}
                // onBlur={updateFullName}
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
                // onChange={(e) => setEmail(e.currentTarget.value)}
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
                // onBlur={(e) => setAge(e.currentTarget.value)}
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
                // onChange={(e) => setAboutMeSelf(e.currentTarget.value)}
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
                            Edit User
                        </Button>
                        <Button type="danger" onClick={closeUser}>
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
export default AddUsersForm;

// const AddUsersForm = (props) => {
//     // handleSubmit = (e) => {
//     //     e.preventDefault();
//     //     this.props.form.validateFields((err, values) => {
//     //         if (!err) {
//     //             console.log("Received values of form: ", values);
//     //         }
//     //     });
//     // };
//     // normFile = (e) => {
//     //     console.log("Upload event:", e);
//     //     if (Array.isArray(e)) {
//     //         return e;
//     //     }
//     //     return e && e.fileList;
//     // };
//     // render() {
//     const { getFieldDecorator } = props.form;
//     const formItemLayout = {
//         labelCol: { span: 6 },
//         wrapperCol: { span: 14 },
//     };
//     return (
//         <Form >
//             <FormItem {...formItemLayout} label="Plain Text">
//                 <span className="ant-form-text">China</span>
//             </FormItem>
//             <FormItem {...formItemLayout} label="Select" hasFeedback>
//                 {getFieldDecorator("select", {
//                     rules: [
//                         {
//                             required: true,
//                             message: "Please select your country!",
//                         },
//                     ],
//                 })(
//                     <Select placeholder="Please select a country">
//                         <Option value="china">China</Option>
//                         <Option value="use">U.S.A</Option>
//                     </Select>
//                 )}
//             </FormItem>

//             <FormItem {...formItemLayout} label="Select[multiple]">
//                 {getFieldDecorator("select-multiple", {
//                     rules: [
//                         {
//                             required: true,
//                             message: "Please select your favourite colors!",
//                             type: "array",
//                         },
//                     ],
//                 })(
//                     <Select
//                         mode="multiple"
//                         placeholder="Please select favourite colors"
//                     >
//                         <Option value="red">Red</Option>
//                         <Option value="green">Green</Option>
//                         <Option value="blue">Blue</Option>
//                     </Select>
//                 )}
//             </FormItem>

//             <FormItem {...formItemLayout} label="InputNumber">
//                 {getFieldDecorator("input-number", { initialValue: 3 })(
//                     <InputNumber min={1} max={10} />
//                 )}
//                 <span className="ant-form-text"> machines</span>
//             </FormItem>

//             <FormItem {...formItemLayout} label="Switch">
//                 {getFieldDecorator("switch", { valuePropName: "checked" })(
//                     <Switch />
//                 )}
//             </FormItem>

//             <FormItem {...formItemLayout} label="Radio.Group">
//                 {getFieldDecorator("radio-group")(
//                     <RadioGroup>
//                         <Radio value="a">item 1</Radio>
//                         <Radio value="b">item 2</Radio>
//                         <Radio value="c">item 3</Radio>
//                     </RadioGroup>
//                 )}
//             </FormItem>

//             <FormItem {...formItemLayout} label="Radio.Button">
//                 {getFieldDecorator("radio-button")(
//                     <RadioGroup>
//                         <RadioButton value="a">item 1</RadioButton>
//                         <RadioButton value="b">item 2</RadioButton>
//                         <RadioButton value="c">item 3</RadioButton>
//                     </RadioGroup>
//                 )}
//             </FormItem>

//                 <FormItem wrapperCol={{ span: 12, offset: 6 }}>
//                 <Button type="primary" htmlType="submit">
//                     Submit
//                 </Button>
//             </FormItem>
//         </Form>
//     );
// };
