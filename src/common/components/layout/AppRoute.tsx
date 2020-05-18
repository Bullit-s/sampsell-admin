import React, { FC, Suspense } from "react";
import { Route, RouteProps } from "react-router";
import { AppLayout } from "./AppLayout";
import { EmptyContent } from "./empty/EmptyContent";


interface IProps extends RouteProps {
    Component: JSX.Element;
    Layout?: FC;
    protect?: boolean;
}

export const AppRoute: FC<IProps> = ({ Component, Layout = AppLayout, protect, ...rest }) => {

    return (
        <Route {...rest}>
            <Suspense fallback={<EmptyContent />}>
                <Layout>{Component}</Layout>
            </Suspense>
        </Route>
    );
};
