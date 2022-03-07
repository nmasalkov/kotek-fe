import {Form, Input, Button, Checkbox, message} from 'antd';
import React from 'react'
import {Wrapper} from './RuleEditForm.styles'
import {Link} from "react-router-dom";
import axios from "axios";
import EnvUrl from "../../EnvUrl";


const RuleEditForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        axios.post(EnvUrl() + `rules`, {
            'name': values['name'],
            'commentary': values['commentary'],
            'image_url': values['image_url']
        }, {headers: {
                'Authorization': localStorage.getItem('authToken')
            }})
            .then(res => {
                message.success('Rule was added')
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
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true
                        },
                    ]}
                >
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item
                    label="Commentary"
                    name="commentary"
                    rules={[
                        {
                            required: false
                        },
                    ]}
                >
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item
                    label="Image url"
                    name="image_url"
                    rules={[
                        {
                            required: false
                        },
                    ]}
                >
                    <Input.TextArea rows={6} />
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

export default RuleEditForm;
