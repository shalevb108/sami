import classes from "./saved-emails-modal.module.scss";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SavedEmails } from "../SavedEmails/SavedEmails";

export const SavedEmailsModal = () => {

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
   setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
   };


  return (
    <>
      <Button type="default" onClick={showModal}>
       מיילים שנשלחו
      </Button>
      <Modal
        open={open}
        title="מיילים שנשלחו"
        onOk={handleOk}
        onCancel={handleCancel}
        className={classes.modal}
        footer={[
          <Button key="submit" loading={loading} onClick={handleOk}>
            אישור
          </Button>,
        ]}
      >
       <SavedEmails />
      </Modal>
    </>
  );
};
