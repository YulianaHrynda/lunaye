'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles/preferences.module.css'; // Правильний імпорт модуля!

export default function PreferencesPage() {
  const [step, setStep] = useState('genres');
  const router = useRouter();

  const genres = ['Rock', 'Pop', 'R&B', 'Rap', 'Indie', 'Folk', 'Electronic', 'Country', 'Hip Hop', 'Jazz', 'Classical', 'Latin'];
  const artists = ['Olivia Rodrigo', 'Billie Eilish', 'Harry Styles', 'Lady Gaga', 'Eminem', 'Tyler, the Creator', 'Bjork', 'ABBA', 'Conan Gray', 'Louis Tomlinson', 'QUEEN', 'Taylor Swift'];

  const handleBack = () => {
    if (step === 'genres') {
      router.push('/signup');
    } else {
      setStep('genres');
    }
  };

  const handleNext = () => {
    if (step === 'genres') {
      setStep('artists');
    } else {
      router.push('/home');
    }
  };

  return (
    <div className={styles.preferencesContainer}>
      <h1 className={styles.title}>Lunaye</h1>
      <h2 className={styles.heading}>Set Your Preferences</h2>
      <p className={styles.subtitle}>Tell us what you like, we’ll create a personalized experience for you</p>

      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${step === 'genres' ? styles.tabActive : ''}`}
          onClick={() => setStep('genres')}
        >
          Genres
        </button>
        <button
          className={`${styles.tab} ${step === 'artists' ? styles.tabActive : ''}`}
          onClick={() => setStep('artists')}
        >
          Artists
        </button>
      </div>

      <div className={styles.cardsContainer}>
        {(step === 'genres' ? genres : artists).map((item, index) => (
          <div className={styles.card} key={index}>
            <img src="/intro/music.png" alt={item} className={styles.cardImage} />
            <span className={styles.cardTitle}>{item}</span>
          </div>
        ))}
      </div>

      <div className={styles.navigationButtons}>
        <button className={styles.backButton} onClick={handleBack}>
          Back
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
