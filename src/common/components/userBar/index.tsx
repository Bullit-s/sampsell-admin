import React, { FC, useState } from "react";
import styled from "astroturf";
import { Avatar, Popover, Button, Popconfirm } from "antd";
import { useSelector } from "../../../core/redux/useSelector";
import { IProfile } from "../../../api/IProfile/ProfileDto";
import { useDispatch } from "react-redux";
import { LogoutRequest } from "../../../core/redux/slices/sliceProfile";

export const UserBar: FC = ({ children }) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { email } = useSelector<IProfile>((state) => state.firebase.profile);

  const logOut = () => {
    dispatch(LogoutRequest());
  };
  return (
    <Popover
      content={
        <Popconfirm
          title="Вы хотите выйти?"
          onConfirm={logOut}
          okText="Да"
          cancelText="Нет"
          placement="rightBottom"
        >
          <Button type="dashed">Выход</Button>
        </Popconfirm>
      }
      title={email}
      trigger="click"
      visible={visible}
      onVisibleChange={(value) => setVisible(value)}
    >
      <div onClick={() => setVisible(true)}>
        <MyAvatar size="large">{email ? email[0] : "Админ"}</MyAvatar>
      </div>
    </Popover>
  );
};

const MyAvatar = styled(Avatar)`
  color: #0e2833;
  cursor: pointer;
  background: #2bcaa9;
  font-weight: 600;
  text-transform: uppercase;
`;
