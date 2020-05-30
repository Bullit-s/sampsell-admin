import React, { useEffect } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import { mainRoutes } from "./path/mainRoutes";
import { AppRoute } from "../../common/components/layout/AppRoute";
import { useSelector } from "../redux/useSelector";
import { Spin } from "antd";
import { Statistics } from "../../modules/statistics";
import { Offereds } from "../../modules/offereds";
import { Login } from "../../modules/profile/login";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/slices/sliceCategories";
import styled from "astroturf";
import { LoginLayout } from "../../common/components/layout/LoginLayout";
import { Gifts } from "../../modules/gifts";
import { AddGift } from "../../modules/gifts/addGift";
export const MainRoutes = () => {
  const { isEmpty: emptyAuth, isLoaded: loadedAuth } = useSelector(
    (state) => state.firebase.auth
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  //Защищенный роут на страницы авторизации и регистрации
  const PrivateForAuthorized: React.FC<IPrivateRoute> = ({
    children,
    path,
  }) => {
    return loadedAuth ? (
      <Route
        path={path}
        render={({ location }) =>
          emptyAuth ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    ) : (
      <FullPageDiv>
        <Spin size="large" />
      </FullPageDiv>
    );
  };

  return (
    <Switch>
      <PrivateForAuthorized path="/login">
        <AppRoute
          Component={<Login />}
          path={"/login"}
          exact
          Layout={LoginLayout}
        />
      </PrivateForAuthorized>
      <AppRoute
        Component={<Statistics />}
        path={mainRoutes.statistics.link}
        exact
        auth={{ loadedAuth, emptyAuth }}
      />
      <AppRoute
        Component={<Offereds />}
        path={mainRoutes.offereds.link}
        exact
        auth={{ loadedAuth, emptyAuth }}
      />
      <AppRoute
        Component={<Gifts />}
        path={mainRoutes.gifts.link}
        exact
        auth={{ loadedAuth, emptyAuth }}
      />
      <AppRoute
        Component={<AddGift />}
        path={mainRoutes.addGift.link}
        exact
        auth={{ loadedAuth, emptyAuth }}
      />
      <AppRoute
        Component={<Statistics />}
        path={mainRoutes.accounts.link}
        exact
        auth={{ loadedAuth, emptyAuth }}
      />
      <Redirect to={mainRoutes.statistics.link} />
    </Switch>
  );
};

interface IPrivateRoute {
  children: React.ReactNode;
  path: string;
}

const FullPageDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
