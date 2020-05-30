import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form } from "antd";
import { IGift, IGiftsResponse } from "../../../api/IGifts/IGiftsDto";
import { GiftOutlined, DeleteOutlined } from "@ant-design/icons";

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
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
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
}

interface IDataSource extends IGift {
  key: string;
}

export const EditableTable: React.FC<IProps> = ({ gifts, handleDelete }) => {
  const dataSource: IDataSource[] = gifts.map(({ key, value }) => ({
    key,
    ...value,
  }));

  const columns = [
    {
      title: "Название",
      dataIndex: "product",
      width: "30%",
      editable: true,
    },
    {
      title: "Кол-во участников",
      dataIndex: "members",
      width: "10%",
    },
    {
      title: "Дата создания",
      dataIndex: "date",
    },
    {
      title: "Победитель",
      dataIndex: "winner",
    },
    {
      title: "Действия",
      dataIndex: "operation",
      render: (_: any, record: IDataSource) =>
        dataSource.length > 0 ? (
          <>
            {!record.winner ? (
              <Popconfirm
                icon={<GiftOutlined />}
                title="Завершить раздачу?"
                onConfirm={() => handleDelete(record.key)}
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

  //   handleSave = (row) => {
  //     const newData = [...this.state.dataSource];
  //     const index = newData.findIndex((item) => row.key === item.key);
  //     const item = newData[index];
  //     newData.splice(index, 1, {
  //       ...item,
  //       ...row,
  //     });
  //     this.setState({ dataSource: newData });
  //   };

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
      onCell: (record: IGift) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        //   handleSave: this.handleSave,
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
