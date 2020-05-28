import React, { FC } from 'react'
import styled from 'astroturf'
import { Form, Input, Select, DatePicker } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;
const { RangePicker } = DatePicker;

interface IProps {
    onFinish?: Function;
}

export const Filters: FC = () => {

    return (
        <MyForm
            name="normal_login"
            className="login-form"
            layout="inline"
        >
            <FormItem name="search" label="Поиск">
                <Input placeholder="Введите почту" prefix={<UserOutlined />} />

            </FormItem>
            <FormItem name="status" label="Статус" >
                <MySelect placeholder="Выбрать статус"
                >
                    <Option key="1" value="1">В обработке</Option>
                    <Option key="2" value="2">Одобрен</Option>
                    <Option key="3" value="2">Оклонен</Option>
                    <Option key="4" value="3">Удален</Option>
                </MySelect>
            </FormItem>
            <FormItem name="range" label="Диапазон">
                <RangePicker
                    format="YYYY/MM/DD"
                />
            </FormItem>
        </MyForm >
    )
}

const MyForm = styled(Form)`
 
`;

const FormItem = styled(Form.Item)`
    display: flex;  
    flex-direction: column;
    align-items: flex-start;

    // @media screen and (max-width: 767px){
        
    // }
`

const MySelect = styled(Select)`
    min-width: 120px
`