import React, { FC } from "react";
import styled from "astroturf";
import { HeaderPage } from "../../../common/components/layout/HeaderPage";
// import { Button } from "antd";

export const AddGift: FC = () => {
  return (
    <PadeWrapper>
      <HeaderPage title="Добавить раздачу" extra={[]} />
      <ContentWrapper></ContentWrapper>
    </PadeWrapper>
  );
};

const PadeWrapper = styled.div`
  padding: 16px 0;
`;

const ContentWrapper = styled.div`
  padding: 16px 24px;
  margin: 16px 0;
  background-color: #fff;
`;
