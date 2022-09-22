import { Button, Form, Input } from "antd";
import "./register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div className='title'>Register</div>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 12 }}>
        <Form.Item
          name={"name"}
          label='Name'
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"lastname"}
          label='Lastname'
          rules={[{ required: true, message: "Please input your lastname!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Email'
          name='email'
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label='Confirm Password'
          name='confirmPw'
          rules={[
            { required: true, message: "Please input your Confirm password!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
