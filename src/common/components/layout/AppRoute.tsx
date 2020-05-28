import React, { FC, Suspense } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { AppLayout } from "./AppLayout";
import { EmptyContent } from "./empty/EmptyContent";
import styled from 'astroturf'
import { Spin } from "antd";

interface IProps extends RouteProps {
    Component: JSX.Element;
    Layout?: FC;
    auth?: { loadedAuth: boolean, emptyAuth: boolean }
}

export const AppRoute: FC<IProps> = ({ Component, Layout = AppLayout, auth, ...rest }) => {
    if (auth && !auth.loadedAuth) {
        return (
            <FullPageDiv><Spin size="large" /></FullPageDiv>
        );
    } else if (auth && auth.emptyAuth) {
        return <Redirect
            to={{
                pathname: "/login",
            }}
        />
    } else {
        return (
            <Route {...rest}>
                <Suspense fallback={<EmptyContent />}>
                    <Layout>{Component}</Layout>
                </Suspense>
            </Route>
        );
    }
};

const FullPageDiv = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;