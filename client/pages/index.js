import styles from "../styles/Homepage.module.css";
import { useRouter } from "next/router";

export default function Homepage() {
  const router = useRouter();

  return (
    <div className={styles.homepage}>
      <img src="https://bit.ly/3zfmByz" alt="hero-image" />
      <section>
        <h3>Read Free Books only on book store</h3>
        <button onClick={() => router.push("/auth")}>Login and get started now</button>
      </section>
    </div>
  );
}
