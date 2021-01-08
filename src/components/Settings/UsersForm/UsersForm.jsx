// import { Form, Input, InputNumber, Button } from "antd";

// const layout = {
//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 8,
//     },
// };

// // const validateMessages = {
// //     required: "${label} is required!",
// //     types: {
// //         email: "${label} is not a valid email!",
// //         number: "${label} is not a valid number!",
// //     },
// //     number: {
// //         range: "${label} must be between ${min} and ${max}",
// //     },
// // };

// const UsersForm = (props) => {
//     const [subForm] = Form.useForm();
//     return (
//         <Form
//             form={subForm}
//             {...layout}
//             name="nest-messages"
//             onFinish={props.submitSubForm}
//             validateMessages={validateMessages}
//             initialValues={{ ...props.initialValues }}
//         >
//             <Form.Item
//                 name={"fullName"}
//                 label="Fullname"
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//             >
//                 <Input />
//             </Form.Item>
//             <Form.Item
//                 name={"email"}
//                 label="Email"
//                 rules={[
//                     {
//                         type: "email",
//                     },
//                 ]}
//             >
//                 <Input />
//             </Form.Item>
//             <Form.Item
//                 name={"age"}
//                 label="Age"
//                 rules={[
//                     {
//                         type: "number",
//                         min: 0,
//                         max: 140,
//                     },
//                 ]}
//             >
//                 <InputNumber />
//             </Form.Item>
//             <Form.Item
//                 name={"aboutMeSelf"}
//                 label="About myself"
//                 rules={[
//                     {
//                         required: true,
//                     },
//                 ]}
//             >
//                 <Input.TextArea />
//             </Form.Item>
//             <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//                 <Button type="primary" htmlType="submit">
//                     {"Add User"}
//                 </Button>
//             </Form.Item>
//         </Form>
//     );
// };

// export default UsersForm;
