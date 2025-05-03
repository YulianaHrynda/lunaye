'use client';

import { useRouter } from 'next/navigation';
import styles from './styles/intro.module.css';

export default function IntroPage() {
  const router = useRouter();

  return (
    <div className={styles.introPageWrapper}>
      <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
        <source src="/intro/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.landingContainer}>
        <h1>Lunaye</h1>
        <div>
          <button onClick={() => router.push('/signup')} className={styles.button}>
            Sign Up
          </button>
          <button onClick={() => router.push('/signin')} className={styles.button}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
