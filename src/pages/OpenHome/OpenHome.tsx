// import classes from "./open-home.module.scss";
import {
  Button,
  Form,
  type FormProps,
  Input,
  Radio,
  DatePicker,
  Select,
  TimePicker,
} from "antd";
import classes from "./open-home.module.scss";
import { Email } from "../../models/email.model";
import { emailService } from "../../services/email.service";
import { useMemo, useState } from "react";
import { addresses, emails } from "./util";
import { SavedEmailsModal } from "../../components/SavedEmailsModal/SavedEmailsModal";

const onFinish: FormProps<Email>["onFinish"] = (values) => {
  handleSendEmail(values);
  console.log("Success:", values);
  alert("הטופס נשלח בהצלחה");
};

const handleSendEmail = async (email: Email) => {
  await emailService.create(email);
};

const onFinishFailed: FormProps<Email>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const OpenHome = () => {
  const [managerOption, setManagerOption] = useState<string>('מנהל');
  const [company, setCompany] = useState<string>('');

  const handleManagerOptionChange = (e: any) => {
    console.log("====================================");
    console.log(e.target);
    console.log("====================================");
    setManagerOption(e.target.value);
  };
  const timeFormat = "HH:mm";

  const handleCompanyChange = (e: any) => {
    setCompany(e);
  };

  const correctAddress = useMemo(
    () => 
      addresses.filter(address => address.includes(company==='אינטר גינס' ? 'JNI':company))
    ,
    [company]
  );

  return (
    <div className={classes.page}>
      <div className={classes.header}>
      <img src="./logo.jpeg" className={classes.logo}></img>
      <SavedEmailsModal/>
      </div>
      <Form
        name="form"
        // labelCol={{ span: 4 }}
        // wrapperCol={{ span:  }}
        // style={{ maxWidth: 400 }}
        initialValues={{ remember: true , managerOption: 'מנהל'}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={classes.form}
      >
        <Form.Item
          label="תאריך"
          name="date"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="שעה"
          name="time"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <TimePicker format={timeFormat} />
        </Form.Item>
        <Form.Item label="רשת" name="company" style={{ width: '20rem'}} rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <Select placeholder="בחר מבין הרשתות" onChange={handleCompanyChange}>
            <Select.Option value="סטיב מאדן"   dir="rtl">סטיב מאדן</Select.Option>
            <Select.Option value="אינטר גינס"  dir="rtl">אינטר גינס</Select.Option>
            <Select.Option value="רזילי"  dir="rtl">רזילי</Select.Option>
            <Select.Option value="ריפלי"  dir="rtl">ריפלי</Select.Option>
            <Select.Option value="טזניס"  dir="rtl">טזניס</Select.Option>
            <Select.Option value="קלסדוניה"  dir="rtl">קלסדוניה</Select.Option>
            <Select.Option value="אינטימיסימי"  dir="rtl">אינטימיסימי</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="כתובת הסניף" name="address" style={{ width: '25rem'}} rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <Select placeholder="בחר מבין הסניפים">
          {correctAddress.map((address) => (
      <Select.Option  dir="rtl" key={address} value={address}>
        {address}
      </Select.Option>
    ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="managerOption"
          label="סוג הלקוח"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group onChange={handleManagerOptionChange}> 
            <Radio.Button value={"מנהל"}>מנהל</Radio.Button>
            <Radio.Button value={"זכיין"}>זכיין</Radio.Button>
          </Radio.Group>
        </Form.Item>
         <Form.Item label={`שם ה${managerOption}`} name="manager"  rules={[{ required: true, message: "מלא את שם המנהל בבקשה" }]}>
        <Input placeholder={`שם ה${managerOption}`}/>
      </Form.Item>
      <Form.Item label="עובד 1" name="employee1">
        <Input placeholder="עובד 1" />
      </Form.Item>
      <Form.Item label="עובד 2" name="employee2">
        <Input placeholder="עובד 2" />
      </Form.Item>
      <Form.Item label="עובד 3" name="employee3">
        <Input placeholder="עובד 3" />
      </Form.Item>
      <Form.Item label="עובד 4" name="employee4">
        <Input placeholder="עובד 4" />
      </Form.Item>
      <Form.Item label="הערות" name={"attendanceNotes"}>
            <Input.TextArea allowClear showCount />
          </Form.Item>
        <label>כספת:</label>
        <Form.Item
          name="safe"
          label="כספת תקנית"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="keys"
          label="מפתחות כספת בידי מנהל/זכיין"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="envelopes"
          label="רישום תקין על גבי מעטפות הפקדה"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="cash"
          label="דוח X תואם לסכום במעטפה במזומן"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="folder"
          label="קלסר הפקדות מודיעין אזרחי תואם"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="envelopesInDay"
          label="עד 6 מעטפות יומיות בכספת"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="cameras"
          label="מצלמות"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
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
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="redemption"
          label="דוח  Xתואם לפדיון בקופה"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="cashCancellation"
          label="בדיקת ביטול מזומן בקופה"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="unusualAmounts"
          label="בדיקת זיכויים בסכומים חריגים"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="clubMember"
          label='בדיקת שימוש בכרטיס "חבר מועדון"'
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        {managerOption === "מנהל" && (
          <Form.Item
            name="smallRegister"
            label="בדיקת קופה קטנה (רשת)"
            rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
          >
            <Radio.Group>
              <Radio.Button value={true}>כן</Radio.Button>
              <Radio.Button value={false}>לא</Radio.Button>
            </Radio.Group>
          </Form.Item>
        )}
        <Form.Item label="הערות" name={"registerNotes"}>
          <Input.TextArea allowClear showCount />
        </Form.Item>

        <label>ניהול מלאי:</label>
        <Form.Item
          name="unloadedDocuments"
          label='תעודות פתוחות "נפרק בחנות" עד 5 ימים'
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="otherDocuments"
          label="תעודות פתוחות אחרות עד 5 ימים"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="warehouseStock"
          label="ביקורת מלאי מדגמית מהמחסן"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="הערות" name={"stockNotes"}>
          <Input.TextArea allowClear showCount />
        </Form.Item>

        <label>ביטחון:</label>
        <Form.Item
          name="buzzerDetector"
          label='בדיקת גלאי זמזמים'
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="buzzersInItems"
          label="בדיקת זמזמים בפריטים"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="warehouseDoor"
          label="דלת מחסן פנימית/חיצונית"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="הערות" name={"securityNotes"}>
          <Input.TextArea allowClear showCount />
        </Form.Item>


       {managerOption==='מנהל'&& <><label>נוכחות עובדים:</label><Form.Item
          name="employeeAttendance"
          label="נוכחות עובדים בסניף"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item></>}

        <label>תשאול עובדים:</label>

        <Form.Item label="הערות" name={"employeeNotes"}>
          <Input.TextArea allowClear showCount />
        </Form.Item>
        <Form.Item
          label="למי לשלוח"
          name="emailAddress"
          style={{ width: "20rem" }}
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Select placeholder="בחר מבין הנמענים">
            {emails.map((email) => {
              return (
                <Select.Option value={JSON.stringify(email.email)} dir="rtl">
                  {email.description}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item>
          <div className={classes.submitBody}>
            <Button className={classes.submit} htmlType="submit">
              סיום
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
