'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles/preferences.module.css';

export default function PreferencesPage() {
  const [step, setStep] = useState('genres');
  const [selected, setSelected] = useState([]);
  const router = useRouter();

  const genres = [
    { genre: 'Rock', image: '/genres/rock.jpg' },
    { genre: 'Pop', image: '/genres/pop.jpg' },
    { genre: 'Hip Hop', image: '/genres/hiphop.jpg' },
    { genre: 'Indie', image: '/genres/indie.jpg' },
    { genre: 'Rap', image: '/genres/rap.jpg' },
    { genre: 'Folk', image: '/genres/folk.jpg' },
    { genre: 'Electronic', image: '/genres/electronic.jpg' },
    { genre: 'Jazz', image: '/genres/jazz.jpg' },
    { genre: 'Country', image: '/genres/country.jpg' },
    { genre: 'R&B', image: '/genres/rb.jpg' },
    { genre: 'Classical', image: '/genres/classical.jpg' },
    { genre: 'Latin', image: '/genres/latin.jpg' },
  ];

  const artists = [
    { name: 'Olivia Rodrigo', image: '/artists/olivia.jpg' },
    { name: 'Billie Eilish', image: '/artists/billie.jpg' },
    { name: 'Harry Styles', image: '/artists/harry.jpg' },
    { name: 'Lady Gaga', image: '/artists/gaga.jpg' },
    { name: 'Eminem', image: '/artists/eminem.jpg' },
    { name: 'Tyler, the Creator', image: '/artists/tyler.jpg' },
    { name: 'Bjork', image: '/artists/bjork.jpg' },
    { name: 'ABBA', image: '/artists/abba.jpg' },
    { name: 'Conan Gray', image: '/artists/conan.jpg' },
    { name: 'Louis Tomlinson', image: '/artists/louis.jpg' },
    { name: 'QUEEN', image: '/artists/queen.jpg' },
    { name: 'Taylor Swift', image: '/artists/taylor.jpg' },
  ];

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

  const toggleSelect = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <div className={styles.preferencesContainer}>
      <div className={styles.centerBlock}>
        <h1 className={styles.title}>Lunaye</h1>
        <h2 className={styles.heading}>Set Your Preferences</h2>
        <p className={styles.subtitle}>
          Tell us what you like, we’ll create a personalized experience for you
        </p>

        <div className={styles.tabGroup}>
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
          {(step === 'genres' ? genres : artists).map((item, index) => {
            const name = step === 'genres' ? item.genre : item.name;
            const image = item.image;
            const isSelected = selected.includes(name);

            return (
              <div
                key={index}
                className={`${styles.card} ${isSelected ? styles.selectedCard : ''}`}
                onClick={() => toggleSelect(name)}
              >
                <img src={image} alt={name} className={styles.cardImage} />
                <span className={styles.cardTitle}>{name}</span>
              </div>
            );
          })}
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
    </div>
  );
}
