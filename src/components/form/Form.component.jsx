import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Typography, Space} from "antd";
import {FormItem} from "react-hook-form-antd";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from 'react-hook-form';
import * as z from "zod";
import {getThemeStyles} from "../../utils/getStyles.js";

import "./Form.styles.css"

const schema = z.object({
    deposit: z.coerce.number().positive(),
    stopLossInPercents: z.coerce.number().positive(),
    entryPrice: z.coerce.number().positive(),
    stopLossPrice: z.coerce.number().positive(),
    leverage: z.coerce.number().positive(),
    remember: z.coerce.boolean()
});

function CalculateForm({theme}) {

    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            deposit: null,
            stopLossInPercents: null,
            entryPrice: null,
            stopLossPrice: null,
            leverage: null,
            remember: true
        },
        resolver: zodResolver(schema)
    });
    const [moneyInDeal, setMoneyInDeal] = useState(0)

    const [formValues, setFormValues] = useState({})

    const onSubmit = (values) => {
        setFormValues(values);
    };

    const resetForm = () => {
        setMoneyInDeal(0);
        reset();
    }

    useEffect(() => {

        const priceMovement = formValues.entryPrice > formValues.stopLossPrice
            ? (1 - formValues.stopLossPrice / formValues.entryPrice) * 100 // long position
            : ((formValues.stopLossPrice / formValues.entryPrice) - 1) * 100; // short position

        const money = (
            formValues.deposit
            * formValues.stopLossInPercents / 100
            * (100 / (priceMovement * formValues.leverage))
        );

        setMoneyInDeal(money)
    }, [formValues])

    return (
        <Form onFinish={handleSubmit(onSubmit)} className="form">

            <FormItem control={control} name="deposit">
                <Input placeholder="Deposit"/>
            </FormItem>

            <FormItem control={control} name="stopLossInPercents">
                <Input placeholder="Stop loss in % from deposit"/>
            </FormItem>

            <FormItem control={control} name="entryPrice">
                <Input placeholder="Entry price into deal"/>
            </FormItem>

            <FormItem control={control} name="stopLossPrice">
                <Input placeholder="Stop loss price out from deal"/>
            </FormItem>

            <FormItem control={control} name="leverage">
                <Input placeholder="Leverage"/>
            </FormItem>

            <Space direction="vertical" size={16} className="money-label">
                <Typography.Text style={getThemeStyles(theme)}>
                    {moneyInDeal ? `Your money in this deal is ${moneyInDeal.toFixed(2)} USDT` : "Please, calculate value"}
                </Typography.Text>
            </Space>

            <div className="form-buttons">
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

                <Form.Item>
                    <Button onClick={resetForm}>
                        Reset
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
}

export default CalculateForm