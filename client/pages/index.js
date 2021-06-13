import styles from "../styles/LandingPage.module.css";
import { useRouter } from "next/router";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className={styles.landingPage}>
      <img src="https://bit.ly/3zfmByz" alt="hero-image" />
      <section>
        <h3>BOOK STORE</h3>
        <button onClick={() => router.push("/auth")}>Login to get access</button>
      </section>
    </div>
  );
}
