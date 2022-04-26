import React, { Component } from 'react';
import {
    Form, Input, Button, Checkbox
} from '@alifd/next';
import './Popup.scss';
import { go } from '../chrome';

export default class Popup extends Component {
    state = {
        // @ts-ignore
        name: WRAPPER_CLASS_NAME
    }

    gotoPage() {
        go('../html/view.html');
    }

    render() {
        return (
            // @ts-ignore
            <div className={`${WRAPPER_CLASS_NAME}`}>
                <Form
                    layout="Vertical"
                    name="basic"
                    className="basic-table"
                    defaultValue={{ remember: true }}
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

                    <Form.Item name="remember">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            type="primary"
                            onClick={() => { this.gotoPage(); }}
                            className="form-button"
                        >
                            演示页面跳转
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
