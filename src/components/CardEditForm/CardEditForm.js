import {Form, Input, Button, Checkbox, message} from 'antd';
import React from 'react'
import {Wrapper} from './CardEditForm.styles'
import {Link} from "react-router-dom";
import axios from "axios";


const CardEditForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        axios.post(`http://localhost:3000/cards`, {
            'back': values['back'],
            'front': values['front']
        }, {headers: {
                'Authorization': localStorage.getItem('authToken')
            }})
            .then(res => {
                message.success('Card was added')
                form.resetFields()
            }).catch(error => {
            message.error(error.response.data.errors);
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Wrapper>
            <Form  form={form}
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
                    label="Front side"
                    name="front"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item
                    label="Back side"
                    name="back"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
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
                    <Link to={'../../cards'}>To cards</Link>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default CardEditForm;
