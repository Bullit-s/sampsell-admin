import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { IGift, IGiftsResponse } from "../../../api/IGifts/IGiftsDto";
import { GiftOutlined, DeleteOutlined } from "@ant-design/icons";
import { IVKUser } from "../../../api/VK/VKLoginResponse";

const EditableContext = React.createContext<any>("");

interface EditableRowProps {
  index: number;
}

const EditableRow: React.FC<EditableRowProps> = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof IGift;
  record: IGift;
  handleSave: (record: IGift) => void;
}

const EditableCell: React.FC<EditableCellProps> = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<Input>(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({ [dataIndex]: record[dataIndex] });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input
          ref={inputRef}
          onPressEnter={save}
          onBlur={save}
          maxLength={100}
        />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

interface IProps {
  gifts: IGiftsResponse[];
  handleDelete: (key: string) => void;
  handleComplete: (item: IDataSource) => void;
  handleSave: (row: IDataSource) => void;
}

export interface IDataSource {
  key: string;
  id: number;
  product: string;
  date: string;
  members: IVKUser[];
  countMembers: number;
  winner?: React.ReactNode;
}

export const EditableTable: React.FC<IProps> = ({
  gifts,
  handleComplete,
  handleDelete,
  handleSave,
}) => {
  const dataSource: IDataSource[] = gifts
    ? gifts.map(({ key, value }) => ({
        key,
        ...value,
        members:
          value.members && Object.values(value.members).map((item) => item),
        countMembers: value.members ? Object.keys(value.members).length : 0,
        winner: value.winner ? (
          <a
            className="link"
            href={`https://vk.com/id${value.winner.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {`${value.winner.first_name} ${value.winner.last_name}`}
          </a>
        ) : null,
      }))
    : [];

  const columns = [
    {
      title: "Название",
      dataIndex: "product",
      width: "35%",
      editable: true,
    },
    {
      title: "Кол-во участников",
      dataIndex: "countMembers",
      width: "10%",
    },
    {
      title: "Дата создания",
      dataIndex: "date",
      width: "15%",
    },
    {
      title: "Победитель",
      dataIndex: "winner",
      width: "15%",
    },
    {
      title: "Действия",
      dataIndex: "operation",
      width: "10%",
      render: (_: any, record: IDataSource) =>
        dataSource.length > 0 ? (
          <>
            {!record.winner ? (
              <Popconfirm
                icon={<GiftOutlined />}
                title="Завершить раздачу?"
                onConfirm={() => handleComplete(record)}
              >
                <Button key={record.key} type="link">
                  Завершить
                </Button>
              </Popconfirm>
            ) : null}

            <Popconfirm
              icon={<DeleteOutlined />}
              okType="danger"
              title="Удалить раздачу?"
              onConfirm={() => handleDelete(record.key)}
            >
              <Button key={record.key} type="link">
                Удалить
              </Button>
            </Popconfirm>
          </>
        ) : null,
    },
  ];

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columnsNew = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: IDataSource) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columnsNew}
        scroll={{ x: 767 }}
        pagination={false}
      />
    </div>
  );
};
