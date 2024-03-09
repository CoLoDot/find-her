import Button from "~/components/core/Button/Button";
import styles from "./ButtonsList.module.css";

export default function ButtonsList({
  links,
}: {
  links: { id: number; label: string; href: string }[];
}) {
  return (
    <ul className={styles.ExternalLinks}>
      {links.map((link) => (
        <li key={link.id}>
          <Button label={link.label} href={link.href} />
        </li>
      ))}
    </ul>
  );
}
