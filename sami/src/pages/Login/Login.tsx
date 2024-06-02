import { Button, Form, Input } from "antd";
import classes from './login.module.scss'
import { useQuery } from "@tanstack/react-query";
import { usersService } from "../../services/users.service";
import { useEffect, useState } from "react";

type FieldType = {
  username: string;
  password: string;
};

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<any>(); // Change the type as needed

  const onFinish = async (values: FieldType) => {
    console.log('Success:', values);
    // setUsername(values.username);
    // setPassword(values.password);

    // Call useQuery directly here
    const data  = await usersService.findOne(values.username, values.password);
    setUserData(data);
  };
  useEffect(()=>{
    console.log(userData);
    
  },[userData])

  console.log(userData); // Access user data here

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={classes.body}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={classes.form}
      >
        <Form.Item
          label="שם משתמש"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="סיסמא"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
