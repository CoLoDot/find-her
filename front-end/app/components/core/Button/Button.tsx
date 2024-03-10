import styles from "../Button/Button.module.css";

export default function Button({
  href,
  label,
  target = "",
  type,
  style = styles.Button,
}: {
  label: string;
  href?: string;
  style?: string;
  target?: string;
  type?: string;
}) {
  return (
    <a
      className={`${style}`}
      href={`${href}`}
      target={`${target}`}
      type={`${type}`}
    >
      {label}
    </a>
  );
}
