import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { MainRoutes } from "./core/routes/MainRoutes";


export const App: FC = () => (
  <BrowserRouter>
    <MainRoutes />
  </BrowserRouter>
)