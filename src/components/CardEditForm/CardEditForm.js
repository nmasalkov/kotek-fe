import {Form, Input, Button, Switch, message} from 'antd';
import React, { useEffect, useState } from "react";
import {Wrapper} from './CardEditForm.styles'
import {Link} from "react-router-dom";
import axios from "axios";
import EnvUrl from "../../EnvUrl";

function CardEditForm() {
    const [front, setFront] = useState();
    const [back, setBack] = useState();
    const [prioritized, setPrioritized] = useState();
    const [id, setId] = useState();
    const [examples, setExamples] = useState();

    useEffect(() => {
        loadCard()
    }, []);

    const loadCard = async () => {
        const id = parseInt(window.location.href.split('cards/')[1]);

        axios.get(EnvUrl() + 'cards/' + (id) , {
            headers: {
                'Authorization': localStorage.getItem('authToken')
            }
        })
            .then(res =>  {
                setId(res.data['id'])
                setBack(res.data['back'])
                setPrioritized(res.data['prioritized'])
                setFront(res.data['front'])
                setExamples(res.data['examples'])

            }).catch(error => {
            if (error.response.status === 401) {
                localStorage.removeItem('authToken')
                window.location.reload()
            }
        })
    }

    const [form] = Form.useForm();

    // Todo Kill it with fire
    const setValuesLol = (form) => {
        form.setFieldsValue({
            front: front,
            back: back,
            prioritized: prioritized,
            examples: examples
        })
    }

    const onFinish = (values) => {
        const id = parseInt(window.location.href.split('cards/')[1]);
        let url = ''
        if (isNaN(id)) {
            url = EnvUrl() + `cards`
        }
        else {
            url = EnvUrl() + `cards/` + (id)
            }

        axios.post(url, {
            'back': values['back'],
            'prioritized': values['prioritized'],
            'front': values['front'],
            'examples': values['examples']
        }, { headers: {
                'Authorization': localStorage.getItem('authToken')
            }})
            .then(res => {
                message.success('Card was added')
                form.resetFields()
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
            <Form  form={form}
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}

                initialValues={
                    setValuesLol(form)
                }

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
                    <Input.TextArea placeholder={front} rows={6} />
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
                    label="Examples"
                    name="examples"
                    rules={[
                    ]}
                >
                    <Input.TextArea rows={6} />
                </Form.Item>

                <Form.Item label="Prioritized?" name='prioritized' valuePropName="prioritized">
                    <Switch />
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
