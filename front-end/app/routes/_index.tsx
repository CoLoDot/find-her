import type { MetaFunction } from "@remix-run/node";
import logo from "../assets/logo.png";
import Image from "~/components/core/Image/Image";
import { LINKS } from "~/constants";
import styles from "./Index.module.css";
import ButtonsList from "~/components/core/ButtonsList/ButtonsList";
import MailChimpContactForm from "~/components/MailChimpContactForm/MailChimpContactForm";

export const meta: MetaFunction = () => {
  return [
    { title: "imconstancelouise" },
    {
      name: "description",
      content: "imconstancelouise | software engineer & tattoo artist",
    },
  ];
};

export default function Index() {
  return (
    <div className={styles.Index}>
      <div className={styles.header_wrapper}>
        <Image src={logo} />
      </div>
      <ButtonsList links={LINKS} />
      <div className={styles.footer_wrapper}>
        <MailChimpContactForm />
      </div>
    </div>
  );
}
