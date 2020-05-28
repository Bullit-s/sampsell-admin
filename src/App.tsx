import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./core/routes/MainRoutes";
import { ConfigProvider } from 'antd';
import ruRu from 'antd/es/locale/ru_RU';

const antdConfigs = {
  locale: ruRu
}

export const App: FC = () => (
  <ConfigProvider {...antdConfigs}>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </ConfigProvider>
)