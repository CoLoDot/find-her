import styles from "../components/Button.module.css";

export default function Button({
  href,
  label,
  target = "",
  style = styles.Button,
}: {
  href: string;
  label: string;
  style?: string;
  target?: string;
}) {
  return (
    <a className={`${style}`} href={`${href}`} target={`${target}`}>
      {label}
    </a>
  );
}
