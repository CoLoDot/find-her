import { Form } from "@remix-run/react";
import Button from "../core/Button/Button";
import styles from "./MailChimContactForm.module.css";

export default function MailChimpContactForm() {
  return (
    <Form className={styles.Form} action="" method="post" preventScrollReset>
      <p className={styles.title}>Newsletter</p>
      <div className={styles.email_field}>
        <p className={styles.email_label}>Email</p>
        <input className={styles.email_input} name="email" type="email" />
      </div>
      <Button label="submit" type="submit" />
    </Form>
  );
}
