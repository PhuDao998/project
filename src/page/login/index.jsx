
import '../../styles/login.css';
import React, { useState } from 'react';
import {
    Layout,
    Space,
    Form,
    Input,
    Button
} from 'antd';
import Cookies from 'universal-cookie';
import { useNavigate, Navigate } from 'react-router-dom';

const { Footer, Content } = Layout;

export default function Login() {
    const cookies = new Cookies();
    const navigate = useNavigate();
    const [loadingButton, setLoadingButton] = useState(false);
    // let refreshToken = cookies.get('refreshToken');
    // if (refreshToken) {
    //     return <Navigate to="/" />;
    // }
    console.log('refreshToken', cookies.get('refreshToken'));
    const onFinish = async (values) => {
        const expiresTime = parseInt(process.env.REACT_APP_TOKEN_EXPIRE_TIME) || 86400;
        setLoadingButton(true);
        let req = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "donglt12345@gmail.com",
                password: "123456"
            })
        });
        let res = await req.json();
        if (res.refreshToken) {
            cookies.set('refreshToken', res.refreshToken, { path: '/' });
            navigate("/");
        }
        console.log("values:", values);
        console.log("res:", res);
        setLoadingButton(false);

    };

    return (
        <Space
            direction="vertical"
            style={{ width: '100%', height: '100%' }}
            size={[0, 48]}
        >
            <Layout id='login-page'>
                <div className='login-content-container'>
                    <Content className='login-content'>
                        <Form
                            name="login-form"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" loading={loadingButton}>
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </div>
                <Footer className='login-footer'>Footer</Footer>
            </Layout>
        </Space>
    );
};

