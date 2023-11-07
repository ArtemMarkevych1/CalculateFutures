import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button } from 'antd';

import "../components/Form.css"

export default function CalculateForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Form onFinish={handleSubmit(onSubmit)} className="form">
            <Form.Item>
                <Input {...register('input1')} placeholder="Input 1" />
            </Form.Item>

            <Form.Item>
                <Input {...register('input2')} placeholder="Input 2" />
            </Form.Item>

            <Form.Item>
                <Input {...register('input3')} placeholder="Input 3" />
            </Form.Item>

            <Form.Item>
                <Input {...register('input4')} placeholder="Input 4" />
            </Form.Item>

            <Form.Item>
                <Input {...register('input5')} placeholder="Input 5" />
            </Form.Item>

            <Form.Item className="form-buttons">
                <Button type="primary" htmlType="submit">Submit</Button>
                <Button htmlType="reset">Reset</Button>
            </Form.Item>
        </Form>
    );
}