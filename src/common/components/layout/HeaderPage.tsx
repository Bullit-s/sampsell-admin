import React, { FC } from 'react'
import styled from 'astroturf'
import { PageHeader } from 'antd';
import { useHistory } from 'react-router';


interface IProps {
    title: string;
    subTitle?: string;
    extra?: React.ReactElement[]
}
export const HeaderPage: FC<IProps> = ({ title, subTitle, extra, children }) => {
    // const content = useMemo(() => <MyContent>{children}</MyContent>, [children]);
    const history = useHistory()
    return (
        <HeaderWrapper>
            <PageHeader
                ghost={false}
                onBack={() => history.goBack()}
                title={title}
                subTitle={subTitle}
                extra={extra}
            >
                {children}
            </PageHeader>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    // background-color: #f5f5f5;
    // padding: 24px;
`;