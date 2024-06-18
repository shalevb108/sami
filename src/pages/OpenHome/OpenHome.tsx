// import classes from "./open-home.module.scss";
import { Button, Form, type FormProps, Input, Radio, DatePicker, Select } from "antd";
import classes from "./open-home.module.scss";
import { Email } from "../../models/email.model";
import { emailService } from "../../services/email.service";
import { useState } from "react";

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

const addresses = [
  "מאדן איילון זכיין - 36",
  "מאדן אייס מול אילת - 80",
  "מאדן אילת נפטון - 34",
  "מאדן ביג אשדוד - 17",
  "מאדן ביג נצרת זכיין - 87",
  "מאדן בילו עודפים - 70",
  "מאדן גראנד חיפה - 39",
  "מאדן גרנד ב\"ש זכיין - 85",
  "מאדן הזהב זכיין - 37",
  "מאדן הרצליה עודפים - 83",
  "מאדן חולון עודפים זכיין - 31",
  "מאדן חוצות עודפים - 86",
  "מאדן מודיעין - 58",
  "מאדן מלחה ירושלים - 41",
  "מאדן ממילא זכיין - 42",
  "מאדן נוף הגליל זכיין - 30",
  "מאדן עיר ימים - 81",
  "מאדן פ\"ת זכיין - 52",
  "מאדן קריון - 82",
  "מאדן רוגובין עודפים - 32",
  "מאדן רמ\"א זכיין - 26",
  "סטיב מאדן וילג חדרה - 35",
  "רזילי גבעתיים - 216",
  "רזילי גראנד חיפה - 223",
  "רזילי עודפים בילו - 229",
  "רזילי עודפים רוגובין - 231",
  "רזילי פ\"ת - 227",
  "רזילי קריון - 224",
  "רזילי רחובות - 221",
  "רזילי רמ\"א - 211",
  "ריפלי באר שבע - 79",
  "ריפלי גן שמואל - 61",
  "ריפלי וילג' חדרה - 62",
  "ריפלי זהב - 49",
  "ריפלי כפר סבא - 89",
  "ריפלי נוף הגליל - 48",
  "ריפלי עיר ימים - 40",
  "ריפלי עפולה - 20",
  "ריפלי פופ אפ עזריאלי - 91",
  "ריפלי פתח תקווה - 78",
  "ריפלי רוגובין נתניה - 43",
  "ריפלי תלפיות - 63",
  "ריפליי אאוטלט באר שבע - 16",
  "ריפליי אאוטלט חולון - 10",
  "ריפליי אאוטלט קונגרסים חיפה - 14",
  "ריפליי אילת טיילת נפטון - 22",
  "ריפליי ביג אשדוד - 46",
  "ריפליי נמל תל אביב - 12",
  "ריפליי קניון רמת אביב - 15",
  "ריפליי קריון - 17",
  "JNI אילת אייס מול - 44",
  "JNI אילת ביג - 21",
  "JNI עודפים אילת הרודס - 96",
  "JNI עודפים אילת קלאב הוטל - 95",
  "JNI איילון - 67",
  "JNI בילו - 33",
  "JNI יהוד ביג - 73",
  "JNI כרמיאל ביג - 74",
  "JNI מבקיעים אשקלון - 65",
  "JNI נצרת - 64",
  "JNI קרית אתא - 90",
  "JNI ראש פינה - 56",
  "JNI ראשונים - 18",
  "JNI רמלה - 66",
  "JNI שער הצפון - 23",
  "JNI עודפים אמות כרמיאל - 35",
  "JNI עודפים באר שבע ביג - 45",
  "JNI עודפים חולון המכתש - 77",
  "JNI עודפים כנות - 97",
  "JNI עודפים עד הלום - 92"
];

const emails =[
  {
    email:["Shani_a@inter-jeans.co.il","Roei_m@inter-jeans.co.il"],
    description:"מנהלת רשת רזילי (שני)"
  },
  {
    email:["Noa_s@inter-jeans.co.il","Roei_m@inter-jeans.co.il"],
    description:"מנהלת אזור דרום אינטר ג׳ינס (נועה)"
  },
  {
    email:["Ohad_b@inter-jeans.co.il","Roei_m@inter-jeans.co.il"],
    description:"מנהל אזור צפון אינטר ג׳ינס (אוהד)"
  },
  {
    email:["Maayan_i@inter-jeans.co.il","Roei_m@inter-jeans.co.il"],
    description:"מנהלת אזור דרום סטיב מאדן (מעיין)"
  },
  {
    email:["Natali_y@inter-jeans.co.il","Roei_m@inter-jeans.co.il"],
    description:"מנהלת אזור צפון סטיב מאדן (נטלי)"
  },
  {
    email:["elad_p@inter-jeans.co.il","elad_a@inter-jeans.co.il"],
    description:"ריפליי (אלעד)"
  },
]
export const OpenHome = () => {
  const [managerOption, setManagerOption] = useState<string>('');

  const handleManagerOptionChange = (e: any) => {
    setManagerOption(e.target.value);
  };

  return (
    <div className={classes.page}>
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
        <Form.Item label="תאריך" name="date"  rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <DatePicker />
        </Form.Item>
        <Form.Item label="רשת" name="company" style={{ width: '20rem'}} rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <Select placeholder="בחר מבין הרשתות">
            <Select.Option value="סטיב מאדן"   dir="rtl">סטיב מאדן</Select.Option>
            <Select.Option value="אינטר גינס"  dir="rtl">אינטר גינס</Select.Option>
            <Select.Option value="רזילי"  dir="rtl">רזילי</Select.Option>
            <Select.Option value="ריפליי"  dir="rtl">ריפליי</Select.Option>
            <Select.Option value="טזניס"  dir="rtl">טזניס</Select.Option>
            <Select.Option value="קלסדוניה"  dir="rtl">קלסדוניה</Select.Option>
            <Select.Option value="אינטימיסימי"  dir="rtl">אינטימיסימי</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="כתובת הסניף" name="address" style={{ width: '20rem'}} rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <Select placeholder="בחר מבין הסניפים">
           {addresses.map((address)=>{
            return <Select.Option value={address}  dir="rtl">{address}</Select.Option>
           })}
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

        {managerOption==='מנהל'&&<Form.Item
          name="smallRegister"
          label="בדיקת קופה קטנה (רשת)"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item>}
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

       {managerOption==='מנהל'&& <><label>נוכחות עובדים:</label><Form.Item
          name="employeeAttendance"
          label="נוכחות עובדים בסניף"
          rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}
        >
          <Radio.Group>
            <Radio.Button value={true}>כן</Radio.Button>
            <Radio.Button value={false}>לא</Radio.Button>
          </Radio.Group>
        </Form.Item><Form.Item label="הערות" name={"attendanceNotes"}>
            <Input.TextArea allowClear showCount />
          </Form.Item></>}

        <label>תשאול עובדים:</label>

        <Form.Item label="הערות" name={"employeeNotes"}>
          <Input.TextArea allowClear showCount />
        </Form.Item>
        <Form.Item label="למי לשלוח" name="emailAddress" style={{ width: '25rem'}} rules={[{ required: true, message: "בחר בבקשה מבין האופציות" }]}>
          <Select placeholder="בחר מבין הנמענים">
           {emails.map((email)=>{
            return <Select.Option value={JSON.stringify(email.email)}  dir="rtl">{email.description}</Select.Option>
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
