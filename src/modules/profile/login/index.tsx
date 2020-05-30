import React, { FC } from "react";
import styled from "astroturf";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { useDispatch } from "react-redux";
import { Store } from "antd/es/form/interface";
import { AuthRequest } from "../../../core/redux/slices/sliceProfile";
import { useSelector } from "../../../core/redux/useSelector";

const { Title } = Typography;

export const Login: FC = () => {
  const dispatch = useDispatch();
  const profileLoader = useSelector((state) => state.profile.profileLoader);

  const handleSubmit = (values: Store) => {
    dispatch(AuthRequest(values.login, values.password));
  };

  return (
    <>
      {!profileLoader ? (
        <MyForm
          name="normal_login"
          className="login-form"
          onFinish={handleSubmit}
        >
          <Form.Item>
            <Title level={4}>Авторизация</Title>
          </Form.Item>
          <Form.Item
            name="login"
            rules={[{ required: true, message: "Укажите логин" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Логин"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Укажите пароль" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Авторизоваться
            </Button>
          </Form.Item>
        </MyForm>
      ) : (
        <Spin size="large" />
      )}
    </>
  );
};

const MyForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
