import styles from "../styles/Backdrop.module.css";

export default function Backdrop({ toggle }) {
  return <div className={styles.Backdrop} onClick={toggle}></div>;
}
