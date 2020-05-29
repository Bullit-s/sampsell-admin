import React, { FC } from 'react'
import styled from 'astroturf'
import { HeaderPage } from '../../common/components/layout/HeaderPage'
import { Button } from 'antd'
import { Filters } from './Filters'
import { useFirebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
import { useSelector } from '../../core/redux/useSelector'


const offeredsQuery = {
    path: "accountsOffers",
    queryParams: ['orderByChild=user/uid', 'equalTo=7iPcz8eh3Eh5oC4Xlwmvt6o0ARK2']
};


export const Offereds: FC = () => {
    useFirebaseConnect(() => [offeredsQuery]);
    const todos = useSelector(state => state.firebase.ordered.accountsOffers)
    console.log(todos)
    return <PadeWrapper>
        <HeaderPage title="Заявки на продажу" extra={[
            // <Button key="1" type="primary">
            //     Кнопка
            //          </Button>
        ]} />
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

