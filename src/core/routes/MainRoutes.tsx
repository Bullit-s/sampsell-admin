import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { mainRoutes } from "./path/mainRoutes";
import { AppRoute } from "../../common/components/layout/AppRoute";
import { Statistics } from "../../modules/statistics";
import { Offereds } from "../../modules/offereds";

export const MainRoutes = () => {

    return (
        <Switch>
            <AppRoute Component={<Statistics />} path={mainRoutes.statistics.link} exact />
            <AppRoute Component={<Statistics />} path={mainRoutes.gifts.link} exact />
            <AppRoute Component={<Statistics />} path={mainRoutes.applications.link} exact />
            <Redirect to={mainRoutes.statistics.link} />
        </Switch>
    );
};
