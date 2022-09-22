import { Button, Checkbox, Form, Input } from "antd";
import "./login.scss";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const Login = () => {
  return (
    <div className='login_container'>
      <div className='title'>LOGIN</div>
      <div className='login_wrapper'>
        <div>
          <Form
            initialValues={{ remember: true }}
            autoComplete='off'
            className='login_form'
          >
            <Form.Item
              name={"username"}
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className='site-form-item-icon' />}
                placeholder='Username'
              />
            </Form.Item>
            <Form.Item
              name={"password"}
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input
                prefix={<LockOutlined className='site-form-item-icon' />}
                type='password'
                placeholder='Password'
              />
            </Form.Item>
            <Form.Item name='remember' valuePropName='checked'>
              <Checkbox>Remember me</Checkbox>
              <a className='login-form-forgot' href='/'>
                Forgot Password
              </a>
            </Form.Item>
            <Form.Item>
              <Button
                type='primary'
                htmlType='submit'
                className='login-form-button'
              >
                Submit
              </Button>
              <div>
                Or <a href='/register'>register now!</a>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
