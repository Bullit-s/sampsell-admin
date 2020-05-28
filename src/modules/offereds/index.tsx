import React, { FC } from 'react'
import styled from 'astroturf'
import { HeaderPage } from '../../common/components/layout/HeaderPage'
import { Button } from 'antd'
import { Filters } from './Filters'

export const Offereds: FC = () => {
    return <PadeWrapper>
        <HeaderPage title="Заявки на продажу" extra={[
            <Button key="1" type="primary">
                Кнопка
                     </Button>]} />
        <ContentWrapper>
            <Filters />
        </ContentWrapper>
    </PadeWrapper>
}


const PadeWrapper = styled.div`
    padding: 16px 0;
`;

const ContentWrapper = styled.div`
    padding: 16px 24px;
    margin: 16px 0;
    background-color: #fff;
`;

