// import classes from "./open-home.module.scss";
import { Button, Checkbox, Form, type FormProps, Input, Radio } from "antd";
import classes from './open-home.module.scss'
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const OpenHome = () => {
  return (
    <div className={classes.body}>
    <Form
      name="form"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      // style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={classes.form}
    >
<label>כספת:</label>
      <Form.Item
      name="safe"
      label="כספת תקנית"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="מפתחות כספת בידי מנהל/זכיין"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="רישום תקין על גבי מעטפות הפקדה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="דוח X תואם לסכום במעטפה במזומן"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="קלסר הפקדות מודיעין אזרחי תואם"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="עד 6 מעטפות יומיות בכספת"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item label="הערות" name={"note"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>קופה:</label>
      <Form.Item
      name="safe"
      label="קרן קופה תקין"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="דוח  Xתואם לפדיון בקופה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="בדיקת ביטול מזומן בקופה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="בדיקת זיכויים בסכומים חריגים"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label='בדיקת שימוש בכרטיס "חבר מועדון"'
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="בדיקת קופה קטנה (רשת)"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"note"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>ניהול מלאי:</label>
      <Form.Item
      name="safe"
      label='תעודות פתוחות "נפרק בחנות" עד 5 ימים'
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="תעודות פתוחות אחרות עד 5 ימים"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="safe"
      label="ביקורת מלאי מדגמית מהמחסן"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"note"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>נוכחות עובדים:</label>
      <Form.Item
      name="safe"
      label="כספת תקנית"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"note"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>תשאול עובדים:</label>
    
    <Form.Item label="הערות" name={"note"}>
      <Input.TextArea allowClear showCount />
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
