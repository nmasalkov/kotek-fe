import { Form, Input, Button, Checkbox, message } from 'antd';
import React from 'react'
import {Wrapper} from './LoginForm.styles'
import axios from "axios";
import EnvUrl from "../../EnvUrl";

const LoginForm = () => {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': 'pidorasina'
        }
    }
    const onFinish = (values) => {
        axios.post(EnvUrl() + `sessions/login`, {
            'username': values['username'],
            'password': values['password']
        }, config)
            .then(res => {
                const response = res.data;
                localStorage.setItem('authToken', response['token']);
                // Todo make it react way
                window.location.reload()
            }).catch(error => {
            message.error(error.response.data.errors);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Wrapper>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default LoginForm