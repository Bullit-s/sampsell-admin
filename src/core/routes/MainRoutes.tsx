import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { mainRoutes } from "./path/mainRoutes";
import { AppRoute } from "../../common/components/layout/AppRoute";
import { Statistics } from "../../modules/statistics/components/Statistics";

export const MainRoutes = () => {


    return (
        <Switch>
            <AppRoute Component={<Statistics />} path={mainRoutes.statistics.link} />
        </Switch>
    );
};
