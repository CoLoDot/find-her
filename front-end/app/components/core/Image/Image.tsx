import styles from "../Image/Image.module.css";

export default function Image({
  src,
  style = styles.Image,
}: {
  src: string;
  style?: string;
}) {
  return <img src={src} className={style} />;
}
