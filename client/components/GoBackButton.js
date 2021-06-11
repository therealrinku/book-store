import { useRouter } from "next/router";
import styles from "../styles/GoBackButton.module.css";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button className={styles.GoBackButton} onClick={() => router.back()}>
      Go Back
    </button>
  );
}
