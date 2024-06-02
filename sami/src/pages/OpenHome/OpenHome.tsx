// import classes from "./open-home.module.scss";
import { Button, Checkbox, Form, type FormProps, Input, Radio } from "antd";
import classes from './open-home.module.scss'
import { Email } from "../../models/email.model";
import { emailService } from "../../services/email.service";


const onFinish: FormProps<Email>["onFinish"] = (values) => {
  handleSendEmail(values);
  console.log("Success:", values);
};

const handleSendEmail = async (email:Email) => {
  await emailService.create(email);
};

const onFinishFailed: FormProps<Email>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const OpenHome = () => {
  return (
    <div className={classes.body}>
      <img src="./logo.jpeg" className={classes.logo}></img>
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
      name="keys"
      label="מפתחות כספת בידי מנהל/זכיין"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="envelopes"
      label="רישום תקין על גבי מעטפות הפקדה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="cash"
      label="דוח X תואם לסכום במעטפה במזומן"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="folder"
      label="קלסר הפקדות מודיעין אזרחי תואם"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="envelopesInDay"
      label="עד 6 מעטפות יומיות בכספת"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item label="הערות" name={"safeNotes"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>קופה:</label>
      <Form.Item
      name="register"
      label="קרן קופה תקין"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="redemption"
      label="דוח  Xתואם לפדיון בקופה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="cashCancellation"
      label="בדיקת ביטול מזומן בקופה"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="unusualAmounts"
      label="בדיקת זיכויים בסכומים חריגים"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="clubMember"
      label='בדיקת שימוש בכרטיס "חבר מועדון"'
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="smallRegister"
      label="בדיקת קופה קטנה (רשת)"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"registerNotes"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>ניהול מלאי:</label>
      <Form.Item
      name="unloadedDocuments"
      label='תעודות פתוחות "נפרק בחנות" עד 5 ימים'
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="otherDocuments"
      label="תעודות פתוחות אחרות עד 5 ימים"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>

    <Form.Item
      name="warehouseStock"
      label="ביקורת מלאי מדגמית מהמחסן"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"stockNotes"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>נוכחות עובדים:</label>
      <Form.Item
      name="employeeAttendance"
      label="נוכחות עובדים בסניף"
      rules={[{ required: true, message: 'Please pick an item!' }]}
    >
      <Radio.Group>
        <Radio.Button value={true}>כן</Radio.Button>
        <Radio.Button value={false}>לא</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="הערות" name={"attendanceNotes"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>

    <label>תשאול עובדים:</label>
    
    <Form.Item label="הערות" name={"employeeNotes"}>
      <Input.TextArea allowClear showCount />
    </Form.Item>
      <Form.Item >
    <div className={classes.submitBody}>
        <Button className={classes.submit} htmlType="submit">
          סיום
        </Button></div>
      </Form.Item>
    </Form>
    </div>
  );
};
