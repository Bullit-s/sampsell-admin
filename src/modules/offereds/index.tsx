import React, { FC } from "react";
import styled from "astroturf";
import { HeaderPage } from "../../common/components/layout/HeaderPage";
import { Filters } from "./Filters";
import { useFirebaseConnect, isLoaded } from "react-redux-firebase";
import { useSelector } from "../../core/redux/useSelector";
import { Spin } from "antd";
import { IOfferedResponse } from "../../api/IOffered/OfferedDto";

export const Offereds: FC = () => {
  const query = {
    path: "accounts_offered",
    queryParams: [
      "orderByChild=user/uid",
      "equalTo=7iPcz8eh3Eh5oC4Xlwmvt6o0ARK2",
    ],
  };

  useFirebaseConnect(() => [query]);
  const offeredsList: IOfferedResponse[] = useSelector(
    (state) => state.firebase.ordered.accounts_offered
  );
  return (
    <PadeWrapper>
      <HeaderPage title="Заявки на продажу" />
      <ContentWrapper>
        <Filters />
        {!isLoaded(offeredsList) ? <Spin /> : <div>Загружено</div>}
      </ContentWrapper>
    </PadeWrapper>
  );
};

const PadeWrapper = styled.div`
  padding: 16px 0;
  @media screen and(max-width: 767px) {
    padding: 5px 0;
  }
`;

const ContentWrapper = styled.div`
  padding: 16px 24px;
  margin: 16px 0;
  background-color: #fff;
  @media screen and(max-width: 767px) {
    padding: 5px;
  }
`;
