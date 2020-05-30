import React, { FC, useState } from "react";
import styled from "astroturf";
import { HeaderPage } from "../../common/components/layout/HeaderPage";

import {
  useFirebaseConnect,
  isLoaded,
  useFirebase,
} from "react-redux-firebase";
import { useSelector } from "../../core/redux/useSelector";
import { Form, Spin, Button, Modal, Input } from "antd";
import {
  showSuccesNotify,
  SuccesCode,
} from "../../common/components/helpers/succesHelper";
import { showErrorNotify } from "../../common/components/helpers/errorHelper";
import { EditableTable } from "./giftsList";

export const Gifts: FC = () => {
  const firebase = useFirebase();
  const [addForm] = Form.useForm();
  const [modalAdd, setModalAdd] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = {
    path: "gifts",
    queryParams: [
      //   "orderByChild=user/uid",
      //   "equalTo=7iPcz8eh3Eh5oC4Xlwmvt6o0ARK2",
    ],
  };
  useFirebaseConnect(() => [query]);
  const giftsList = useSelector((state) => state.firebase.ordered.gifts);

  const handleAddGift = async () => {
    const gift = { product: addForm.getFieldValue("product") };
    if (gift.product && gift.product.length > 20) {
      setLoading(true);
      return await firebase
        .push(`gifts`, gift)
        .then(() => {
          setLoading(false);
          setModalAdd(false);
          addForm.resetFields();
          showSuccesNotify(SuccesCode.addGift);
        })
        .catch(() => {
          showErrorNotify();
          setLoading(false);
        });
    } else {
      showErrorNotify("", "Минимальная длинна названия 20 символов");
      setLoading(false);
    }
  };

  const handleDelete = (key: string) => {
    // const dataSource = [...this.state.dataSource];
    // this.setState({
    //   dataSource: dataSource.filter((item) => item.key !== key),
    // });
  };

  return (
    <PadeWrapper>
      <HeaderPage
        title="Раздачи"
        extra={[
          <Button key="1" type="primary" onClick={() => setModalAdd(true)}>
            Добавить
          </Button>,
        ]}
      />
      <ContentWrapper>
        {isLoaded(giftsList) ? (
          <EditableTable gifts={giftsList} handleDelete={handleDelete} />
        ) : (
          <Spin />
        )}
        <Modal
          title="Добавить раздачу"
          visible={modalAdd}
          onOk={handleAddGift}
          confirmLoading={loading}
          onCancel={() => setModalAdd(false)}
        >
          <Form form={addForm}>
            <Form.Item
              name="product"
              label="Название товара"
              extra="(70 символов)"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Пример: Arizona Chandler: 15lvl | 500к | Titan VIP..."
                maxLength={50}
              />
            </Form.Item>
          </Form>
        </Modal>
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
